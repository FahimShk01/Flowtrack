/**
 * Trackflow – SPA Router
 * Intercepts nav link clicks, fetches new page content via fetch(),
 * swaps only <main class="main-content"> and the inline <style>/<script>
 * blocks, then runs a smooth GSAP transition.
 * Result: fonts, GSAP, FontAwesome and app.js are loaded ONCE ever.
 */
(function () {
  "use strict";

  // Maps filenames to init function *names* (strings).
  // Resolved lazily via window[fnName] at call-time so each page's inline
  // <script> can register window.initXxxPage without racing this module.
  const PAGE_INITS = {
    "dashboard.html": "initDashboardPage",
    "add-expense.html": "initAddExpensePage",
    "transactions.html": "initTransactionsPage",
    "budget.html": "initBudgetPage",
    "savings.html": "initSavingsPage",
    "analytics.html": "initAnalyticsPage",
  };

  function runPageInit(page) {
    // Always reload from localStorage so every page sees the latest data
    if (typeof loadAllData === "function") loadAllData();
    else if (typeof loadData === "function") loadData();

    const fnName = PAGE_INITS[page];
    const fn = fnName && window[fnName];
    if (typeof fn === "function") fn();
  }

  // ── Helpers ─────────────────────────────────────────────────────────────

  function currentPage() {
    return location.pathname.split("/").pop() || "dashboard.html";
  }

  function setActiveNav(page) {
    document
      .querySelectorAll(".nav-item[data-page], .bottom-nav-item")
      .forEach((el) => {
        el.classList.remove("active");
      });
    // Sidebar
    const sideLink = document.querySelector(`.nav-item[data-page="${page}"]`);
    if (sideLink) sideLink.classList.add("active");
    // Bottom nav — highlight immediately on tap, no wait for page swap
    const botLink = document.querySelector(`.bottom-nav-item[href="${page}"]`);
    if (botLink) botLink.classList.add("active");
  }

  // Highlight bottom nav tab instantly on tap (before navigation completes)
  document.addEventListener(
    "click",
    (e) => {
      const botItem = e.target.closest(".bottom-nav-item");
      if (!botItem) return;
      document
        .querySelectorAll(".bottom-nav-item")
        .forEach((el) => el.classList.remove("active"));
      botItem.classList.add("active");
    },
    { capture: true },
  ); // capture phase = fires before anything else

  // ── Transition ───────────────────────────────────────────────────────────

  const DURATION = 0.15; // seconds — snappy page swap

  function transitionOut(el) {
    return new Promise((resolve) => {
      gsap.to(el, {
        opacity: 0,
        y: -10,
        duration: DURATION,
        ease: "power2.in",
        onComplete: resolve,
      });
    });
  }

  function transitionIn(el) {
    gsap.fromTo(
      el,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: DURATION + 0.08, ease: "power2.out" },
    );
  }

  // ── Page swap ────────────────────────────────────────────────────────────

  let navigating = false;

  async function navigate(href) {
    if (navigating) return;
    const page = href.split("/").pop();
    if (page === currentPage()) return; // already here

    navigating = true;

    // Close sidebar on every navigation (mobile: sidebar stays open after tap)
    const _sb = document.getElementById("sidebar");
    const _ov = document.getElementById("sidebar-overlay");
    if (_sb) _sb.classList.remove("open");
    if (_ov) _ov.classList.remove("active");

    const main = document.querySelector(".main-content");

    try {
      // 1. Kick off fetch immediately — parallel with fade-out
      const fetchPromise = fetch(href).then((r) => {
        if (!r.ok) throw new Error("Network response not ok");
        return r.text();
      });

      // 2. Fade current content out
      await transitionOut(main);

      // 3. Parse new HTML (fetch should already be done or nearly done)
      const html = await fetchPromise;
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      // 4. Swap <main> content
      // Note: innerHTML assignment intentionally does NOT execute <script> tags
      // (browser security spec). We re-execute them manually in step 6 below.
      const newMain = doc.querySelector(".main-content");
      if (!newMain) throw new Error("No .main-content in fetched page");
      main.innerHTML = newMain.innerHTML;

      // 5. Inject page-specific <style> blocks (skip if already present)
      doc.querySelectorAll("head style").forEach((s) => {
        // Use a data attribute to avoid duplicating the same style block
        const key = s.textContent.trim().substring(0, 60);
        if (
          !document.querySelector(`style[data-router-key="${CSS.escape(key)}"]`)
        ) {
          const clone = document.createElement("style");
          clone.setAttribute("data-router-key", key);
          clone.textContent = s.textContent;
          document.head.appendChild(clone);
        }
      });

      // 6. Execute page-specific <script> blocks from the fetched <body>.
      //    This registers window.initXxxPage so runPageInit() can find it.
      //    External scripts (src="...") are skipped — already loaded once.
      doc.querySelectorAll("body script").forEach((s) => {
        if (s.src) return; // skip external — already loaded globally
        const script = document.createElement("script");
        [...s.attributes].forEach((attr) =>
          script.setAttribute(attr.name, attr.value),
        );
        script.textContent = s.textContent;
        document.body.appendChild(script);
      });

      // 7. Update <title>
      const newTitle = doc.querySelector("title");
      if (newTitle) document.title = newTitle.textContent;

      // 8. Update browser history
      history.pushState({ page }, "", href);

      // 9. Update active nav state
      setActiveNav(page);

      // 10. Re-bind hamburger — it lives inside <main> and was just replaced
      if (typeof bindMenuToggle === "function") bindMenuToggle();

      // 11. Fade new content in
      transitionIn(main);

      // 12. Run page-specific init — deferred one tick so the freshly injected
      //     <script> (step 6) has finished registering its window.initXxxPage fn.
      setTimeout(() => runPageInit(page), 0);
    } catch (err) {
      // Fallback: hard navigate
      console.warn("[Router] fetch failed, falling back:", err);
      navigating = false;
      location.href = href;
      return;
    }

    navigating = false;
  }

  // ── Link interception ────────────────────────────────────────────────────

  function shouldIntercept(el) {
    // Only intercept same-origin .html links in our nav
    if (!el) return false;
    const href = el.getAttribute("href");
    if (!href) return false;
    if (href.startsWith("http") || href.startsWith("//")) return false;
    if (!href.endsWith(".html")) return false;
    // Don't intercept login/index
    if (href.includes("login.html") || href.includes("index.html"))
      return false;
    return true;
  }

  document.addEventListener("click", (e) => {
    const link = e.target.closest("a[href]");
    if (!link) return;

    // Always close the sidebar on any nav click, regardless of routing
    const _sb = document.getElementById("sidebar");
    const _ov = document.getElementById("sidebar-overlay");
    if (_sb) _sb.classList.remove("open");
    if (_ov) _ov.classList.remove("active");

    if (!shouldIntercept(link)) return;
    e.preventDefault();
    navigate(link.getAttribute("href"));
  });

  // Handle back/forward
  window.addEventListener("popstate", (e) => {
    if (e.state && e.state.page) {
      navigate(e.state.page);
    }
  });

  // Set initial history state
  history.replaceState({ page: currentPage() }, "", location.href);
  setActiveNav(currentPage());
})();
