// ============================
// SHARED APP DATA STORE
// Trackflow – Mock Data + Utils
// ============================

const Trackflow = {
  user: { name: "Rahul Sharma", email: "rahul@example.com", initial: "RS" },

  summary: {
    balance: 245800,
    monthExpense: 38240,
    savings: 18500,
    budgetLeft: 11760,
  },

  categories: [
    { id: "food", label: "Food & Dining", icon: "🍔", color: "#6c63ff" },
    { id: "transport", label: "Transport", icon: "🚗", color: "#43e97b" },
    { id: "shopping", label: "Shopping", icon: "🛒", color: "#f7971e" },
    { id: "health", label: "Health & Medical", icon: "💊", color: "#ff6b6b" },
    { id: "bills", label: "Bills & Utilities", icon: "💡", color: "#38bdf8" },
    {
      id: "entertainment",
      label: "Entertainment",
      icon: "🎬",
      color: "#a855f7",
    },
    { id: "education", label: "Education", icon: "📚", color: "#ffd200" },
    { id: "savings", label: "Savings", icon: "💰", color: "#43e97b" },
    { id: "other", label: "Other", icon: "📦", color: "#8b8fa8" },
  ],

  defaultTransactions: [
    {
      id: 1,
      date: "2026-04-27",
      category: "food",
      amount: 450,
      note: "Lunch at Cafe Coffee Day",
      type: "expense",
    },
    {
      id: 2,
      date: "2026-04-27",
      category: "transport",
      amount: 180,
      note: "Uber to office",
      type: "expense",
    },
    {
      id: 3,
      date: "2026-04-26",
      category: "shopping",
      amount: 2400,
      note: "Amazon – headphones",
      type: "expense",
    },
    {
      id: 4,
      date: "2026-04-26",
      category: "food",
      amount: 720,
      note: "Dinner – Zomato",
      type: "expense",
    },
    {
      id: 5,
      date: "2026-04-25",
      category: "bills",
      amount: 1200,
      note: "Electricity bill",
      type: "expense",
    },
    {
      id: 6,
      date: "2026-04-25",
      category: "health",
      amount: 800,
      note: "Pharmacy",
      type: "expense",
    },
    {
      id: 7,
      date: "2026-04-24",
      category: "entertainment",
      amount: 599,
      note: "Netflix subscription",
      type: "expense",
    },
    {
      id: 8,
      date: "2026-04-24",
      category: "food",
      amount: 340,
      note: "Chai & snacks",
      type: "expense",
    },
    {
      id: 9,
      date: "2026-04-23",
      category: "transport",
      amount: 250,
      note: "Auto rickshaw",
      type: "expense",
    },
    {
      id: 10,
      date: "2026-04-23",
      category: "education",
      amount: 999,
      note: "Udemy course",
      type: "expense",
    },
    {
      id: 11,
      date: "2026-04-22",
      category: "shopping",
      amount: 3600,
      note: "New shirt & jeans",
      type: "expense",
    },
    {
      id: 12,
      date: "2026-04-22",
      category: "food",
      amount: 560,
      note: "Grocery – BigBasket",
      type: "expense",
    },
    {
      id: 13,
      date: "2026-04-21",
      category: "health",
      amount: 1500,
      note: "Doctor consultation",
      type: "expense",
    },
    {
      id: 14,
      date: "2026-04-20",
      category: "bills",
      amount: 499,
      note: "Internet bill",
      type: "expense",
    },
    {
      id: 15,
      date: "2026-04-20",
      category: "food",
      amount: 220,
      note: "Tea & biscuits",
      type: "expense",
    },
    {
      id: 16,
      date: "2026-04-19",
      category: "entertainment",
      amount: 350,
      note: "Movie tickets",
      type: "expense",
    },
    {
      id: 17,
      date: "2026-04-18",
      category: "transport",
      amount: 620,
      note: "Fuel refill",
      type: "expense",
    },
    {
      id: 18,
      date: "2026-04-17",
      category: "shopping",
      amount: 1200,
      note: "Home decor items",
      type: "expense",
    },
    {
      id: 19,
      date: "2026-04-16",
      category: "food",
      amount: 890,
      note: "Weekend brunch",
      type: "expense",
    },
    {
      id: 20,
      date: "2026-04-15",
      category: "other",
      amount: 500,
      note: "Miscellaneous",
      type: "expense",
    },
  ],

  defaultBudgets: [
    { category: "food", limit: 10000, spent: 8120 },
    { category: "transport", limit: 5000, spent: 2680 },
    { category: "shopping", limit: 8000, spent: 9200 },
    { category: "health", limit: 4000, spent: 2300 },
    { category: "bills", limit: 3000, spent: 1699 },
    { category: "entertainment", limit: 2000, spent: 949 },
    { category: "education", limit: 3000, spent: 999 },
  ],

  defaultGoals: [
    {
      id: 1,
      name: "New iPhone 16 Pro",
      icon: "📱",
      target: 130000,
      saved: 45000,
      color: "#6c63ff",
      deadline: "2026-08-01",
    },
    {
      id: 2,
      name: "Goa Trip",
      icon: "✈️",
      target: 40000,
      saved: 38000,
      color: "#43e97b",
      deadline: "2026-06-01",
    },
    {
      id: 3,
      name: "Emergency Fund",
      icon: "🏦",
      target: 200000,
      saved: 80000,
      color: "#f7971e",
      deadline: "2027-01-01",
    },
    {
      id: 4,
      name: "New Laptop",
      icon: "💻",
      target: 90000,
      saved: 22000,
      color: "#38bdf8",
      deadline: "2026-12-01",
    },
    {
      id: 5,
      name: "House Down Payment",
      icon: "🏠",
      target: 500000,
      saved: 120000,
      color: "#a855f7",
      deadline: "2028-01-01",
    },
  ],

  transactions: [],
  budgets: [],
  savingsGoals: [],

  monthlyTrend: {
    labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
    expenses: [28000, 32000, 45000, 29000, 35000, 42000, 38240],
    income: [80000, 80000, 85000, 80000, 80000, 82000, 80000],
  },
  weeklySpend: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    data: [1200, 800, 2400, 650, 3100, 4800, 1900],
  },
  categoryBreakdown: [
    { category: "food", amount: 8120, pct: 21 },
    { category: "shopping", amount: 9200, pct: 24 },
    { category: "transport", amount: 2680, pct: 7 },
    { category: "bills", amount: 1699, pct: 4 },
    { category: "health", amount: 2300, pct: 6 },
    { category: "entertainment", amount: 949, pct: 3 },
    { category: "education", amount: 999, pct: 3 },
    { category: "other", amount: 500, pct: 1 },
  ],
};

// ============================
// DATA PERSISTENCE (localStorage)
// Data persists across login sessions.
// Calling logout() clears user data.
// ============================

/** Central loader for all persistent data from LocalStorage */
function loadAllData() {
  loadData();
  // Dispatch event that data is ready
  window.dispatchEvent(new Event("appDataLoaded"));
}

function getUserKey(base) {
  const user = localStorage.getItem("ft_current_user") || "guest";
  return base + "_" + user;
}

function loadData() {
  const txns = localStorage.getItem(getUserKey("ft_transactions"));
  const goals = localStorage.getItem(getUserKey("ft_goals"));
  const budgets = localStorage.getItem(getUserKey("ft_budgets"));

  if (txns) {
    Trackflow.transactions = JSON.parse(txns);
  } else {
    // For new users, we can either give empty or default.
    // User asked to "reset all data", so let's give empty.
    Trackflow.transactions = [];
  }

  if (goals) {
    Trackflow.savingsGoals = JSON.parse(goals);
  } else {
    Trackflow.savingsGoals = [];
  }

  if (budgets) {
    Trackflow.budgets = JSON.parse(budgets);
  } else {
    Trackflow.budgets = JSON.parse(
      JSON.stringify(Trackflow.defaultBudgets),
    ).map((b) => ({ ...b, spent: 0 }));
  }

  try {
    const notifs = localStorage.getItem(getUserKey("ft_notifications"));
    Trackflow.notifications = notifs ? JSON.parse(notifs) : [];
    if (Trackflow.notifications.length === 0) {
      addNotification(
        "👋",
        "Welcome to Trackflow!",
        "Start by setting your budget and tracking expenses.",
      );
    }
  } catch (e) {
    Trackflow.notifications = [];
  }

  calculateSummary();
}

function calculateSummary() {
  const tExp = Trackflow.transactions
    .filter((t) => t.type === "expense")
    .reduce((s, t) => s + Number(t.amount), 0);
  const tInc = Trackflow.transactions
    .filter((t) => t.type === "income")
    .reduce((s, t) => s + Number(t.amount), 0);
  const mBud =
    parseFloat(localStorage.getItem(getUserKey("ft_monthly_budget"))) || 0;

  Trackflow.summary.monthExpense = tExp;
  Trackflow.summary.balance = tInc - tExp;
  Trackflow.summary.savings = Trackflow.savingsGoals.reduce(
    (s, g) => s + Number(g.saved),
    0,
  );
  Trackflow.summary.budgetLeft = mBud + tInc - tExp;

  // Dynamic breakdown for Analytics
  const breakdown = {};
  Trackflow.transactions
    .filter((t) => t.type === "expense")
    .forEach((t) => {
      breakdown[t.category] = (breakdown[t.category] || 0) + Number(t.amount);
    });
  Trackflow.categoryBreakdown = Object.entries(breakdown)
    .map(([id, amt]) => ({
      category: id,
      amount: amt,
      pct: Math.round(tExp ? (amt / tExp) * 100 : 0),
    }))
    .sort((a, b) => b.amount - a.amount);

  // Update category-wise spent in Trackflow.budgets
  Trackflow.budgets.forEach((b) => {
    b.spent = Trackflow.transactions
      .filter((t) => t.type === "expense" && t.category === b.category)
      .reduce((s, t) => s + Number(t.amount), 0);
  });

  try {
    checkBudgetRules();
  } catch (e) {
    console.error("Rule check error", e);
  }
}

function checkBudgetRules() {
  Trackflow.budgets.forEach((b) => {
    if (b.limit > 0 && b.spent > b.limit) {
      const cat = getCategoryMeta(b.category);
      const title = `${cat.label} Over Budget!`;
      const msg = `You've spent ${formatINR(b.spent)} vs ${formatINR(b.limit)} limit.`;
      // Check if we already notified recently to avoid spam
      const exists = (Trackflow.notifications || []).some(
        (n) => n.title === title && !n.read,
      );
      if (!exists) addNotification("🔥", title, msg);
    }
  });
}

function addNotification(icon, title, msg) {
  if (!Trackflow.notifications) Trackflow.notifications = [];
  const n = { id: Date.now(), icon, title, msg, time: "Just now", read: false };
  Trackflow.notifications.unshift(n);
  if (Trackflow.notifications.length > 20) Trackflow.notifications.pop();
  try {
    saveNotifs();
    renderNotifications();
  } catch (e) {}
}

function saveTransactions() {
  calculateSummary();
  localStorage.setItem(
    getUserKey("ft_transactions"),
    JSON.stringify(Trackflow.transactions),
  );
}

function saveGoals() {
  calculateSummary();
  localStorage.setItem(
    getUserKey("ft_goals"),
    JSON.stringify(Trackflow.savingsGoals),
  );
}
function saveBudgets() {
  calculateSummary();
  localStorage.setItem(
    getUserKey("ft_budgets"),
    JSON.stringify(Trackflow.budgets),
  );
}
function saveNotifs() {
  localStorage.setItem(
    getUserKey("ft_notifications"),
    JSON.stringify(Trackflow.notifications || []),
  );
}

/** Call this on logout — clears session, keeps data for next login */
function clearAllData() {
  localStorage.removeItem("ft_current_user");
  localStorage.removeItem("ft_current_name");
  localStorage.removeItem("ft_token");
}

function getCategoryMeta(id) {
  return (
    Trackflow.categories.find((c) => c.id === id) || {
      label: "Other",
      icon: "📦",
      color: "#8b8fa8",
    }
  );
}

function formatINR(amount) {
  return "₹" + Number(amount).toLocaleString("en-IN");
}

function formatDate(dateStr) {
  // Append time to force local-timezone parsing; bare YYYY-MM-DD is treated as UTC
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function relativeDate(dateStr) {
  // Parse as local midnight to avoid UTC-vs-local off-by-one in UTC+ timezones
  const d = new Date(dateStr + "T00:00:00");
  const now = new Date();
  // Compare calendar dates, not raw ms, so "today" is always correct
  const todayMidnight = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
  );
  const txnMidnight = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const diff = Math.floor((todayMidnight - txnMidnight) / 86400000);
  if (diff === 0) return "Today";
  if (diff === 1) return "Yesterday";
  if (diff < 7) return `${diff} days ago`;
  return formatDate(dateStr);
}

loadData();

// ============================
// TOAST SYSTEM
// ============================
function showToast(title, type = "info", msg = "") {
  const icons = {
    success: "fa-circle-check",
    error: "fa-circle-xmark",
    info: "fa-circle-info",
    warning: "fa-triangle-exclamation",
  };
  const container = document.getElementById("toast-container");
  if (!container) return;
  const t = document.createElement("div");
  t.className = `toast ${type}`;
  t.innerHTML = `
    <i class="fa-solid ${icons[type] || icons.info} toast-icon"></i>
    <div class="toast-body">
      <div class="toast-title">${title}</div>
      ${msg ? `<div class="toast-msg">${msg}</div>` : ""}
    </div>`;
  container.appendChild(t);
  if (typeof gsap !== "undefined") {
    gsap.fromTo(
      t,
      { opacity: 0, x: 50, scale: 0.95 },
      { opacity: 1, x: 0, scale: 1, duration: 0.4, ease: "back.out(1.4)" },
    );
    setTimeout(
      () =>
        gsap.to(t, {
          opacity: 0,
          x: 50,
          duration: 0.35,
          ease: "power2.in",
          onComplete: () => t.remove(),
        }),
      3500,
    );
  } else {
    setTimeout(() => t.remove(), 3500);
  }
}

// NOTIFICATION PANEL
// ============================
function renderNotifications() {
  const list = document.getElementById("notif-list");
  if (!list) return; // DOM not ready yet (called during initial data load)
  const dot = document.querySelector(".notif-dot");
  const notifs = Trackflow.notifications || [];

  const unreadCount = notifs.filter((n) => !n.read).length;
  if (dot) dot.style.display = unreadCount > 0 ? "block" : "none";

  if (notifs.length === 0) {
    list.innerHTML = `<div style="padding:40px 20px; text-align:center; color:var(--text-muted); font-size:.8rem">No notifications yet.</div>`;
    return;
  }

  list.innerHTML = notifs
    .map(
      (n) => `
    <div class="notif-item ${n.read ? "read" : ""}" style="padding:14px 20px; border-bottom:1px solid rgba(255,255,255,0.04); display:flex; gap:12px; cursor:pointer; transition:.2s" onclick="markRead(${n.id})">
      <div style="font-size:1.2rem">${n.icon}</div>
      <div style="flex:1; min-width:0">
        <div style="font-weight:600; font-size:.85rem; color:var(--text-primary); margin-bottom:2px">${n.title}</div>
        <div style="font-size:.78rem; color:var(--text-secondary); line-height:1.4">${n.msg}</div>
        <div style="font-size:.7rem; color:var(--text-muted); margin-top:6px">${n.time}</div>
      </div>
      ${!n.read ? `<div style="width:8px; height:8px; border-radius:50%; background:#6c63ff; margin-top:6px"></div>` : ""}
    </div>
  `,
    )
    .join("");
}

function markRead(id) {
  const n = Trackflow.notifications.find((n) => n.id === id);
  if (n) n.read = true;
  saveNotifs();
  renderNotifications();
}

function markAllRead() {
  (Trackflow.notifications || []).forEach((n) => (n.read = true));
  saveNotifs();
  renderNotifications();
}

function initNotifications() {
  const btn = document.querySelector(".notification-btn");
  if (!btn) return;

  // Build panel
  const panel = document.createElement("div");
  panel.id = "notif-panel";
  panel.style.cssText = `
    position:fixed; top:70px; right:16px; width:320px; max-width:calc(100vw - 32px);
    background:#13142a; border:1px solid rgba(255,255,255,0.12); border-radius:20px;
    box-shadow:0 20px 60px rgba(0,0,0,0.6); z-index:500;
    display:none; overflow:hidden;`;
  panel.innerHTML = `
    <div style="padding:16px 20px; border-bottom:1px solid rgba(255,255,255,0.08); display:flex; justify-content:space-between; align-items:center">
      <span style="font-weight:700; font-size:.95rem">Notifications</span>
      <span style="font-size:.75rem; color:#6c63ff; cursor:pointer" onclick="markAllRead()">Mark all read</span>
    </div>
    <div id="notif-list" style="max-height:360px; overflow-y:auto"></div>
    <div style="padding:14px 20px; border-top:1px solid rgba(255,255,255,0.08); text-align:center">
      <span style="font-size:.8rem; color:#8b8fa8">You're all caught up ✨</span>
    </div>`;
  document.body.appendChild(panel);
  renderNotifications();

  // Toggle
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = panel.style.display === "block";
    panel.style.display = isOpen ? "none" : "block";
    if (!isOpen && typeof gsap !== "undefined") {
      gsap.fromTo(
        panel,
        { opacity: 0, y: -10, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.25, ease: "power2.out" },
      );
    }
  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (
      !panel.contains(e.target) &&
      e.target !== btn &&
      !btn.contains(e.target)
    ) {
      panel.style.display = "none";
    }
  });
}

// ============================
// SIDEBAR LOGIC
// ============================

// The sidebar/overlay/logout live OUTSIDE <main> — bind once only.
// The #menu-toggle lives INSIDE <main> and is replaced on every router
// navigation, so we re-bind it each time via bindMenuToggle().
let _sidebarInitDone = false;

function initSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  if (!sidebar) return;

  // ── One-time setup ───────────────────────────────────────────────────────
  if (!_sidebarInitDone) {
    _sidebarInitDone = true;

    // Close sidebar when tapping the dark overlay
    if (overlay)
      overlay.addEventListener("click", () => {
        sidebar.classList.remove("open");
        overlay.classList.remove("active");
      });

    // Logout — delegated on document so it works even after router swaps
    document.addEventListener("click", (e) => {
      const link = e.target.closest('a[href="login.html"]');
      if (!link) return;
      e.preventDefault();
      clearAllData();
      window.location.href = "login.html";
    });

    // User info lives in sidebar footer (outside <main>), set once
    const activeUserEmail =
      localStorage.getItem("ft_current_user") || Trackflow.user.email;
    const activeUserName =
      localStorage.getItem("ft_current_name") || Trackflow.user.name;
    const nameEl = document.getElementById("sb-user-name");
    const emailEl = document.getElementById("sb-user-email");
    const initEl = document.getElementById("sb-user-init");
    if (nameEl) nameEl.textContent = activeUserName;
    if (emailEl) emailEl.textContent = activeUserEmail;
    if (initEl) initEl.textContent = activeUserName.charAt(0).toUpperCase();

    initNotifications();
    bindSidebarNavClose();
  }

  // ── Per-navigation: re-bind toggle, update active link, greeting ─────────
  bindMenuToggle();
  updateActiveNav();
  updateGreeting();

  // Re-measure topbar height for mobile padding after each swap
  requestAnimationFrame(() => {
    const topBar = document.querySelector(".top-bar");
    const mainContent = document.querySelector(".main-content");
    if (topBar && mainContent && window.innerWidth <= 900) {
      mainContent.style.paddingTop =
        topBar.getBoundingClientRect().height + 20 + "px";
    }
  });
}

// Re-bind the hamburger button that lives inside <main>.
// Stores the handler on the element itself so we can cleanly remove it
// before re-adding — prevents duplicate listeners stacking across navigations.
function bindMenuToggle() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  const toggle = document.getElementById("menu-toggle");
  if (!toggle || !sidebar) return;

  if (toggle._sidebarHandler) {
    toggle.removeEventListener("click", toggle._sidebarHandler);
  }
  toggle._sidebarHandler = () => {
    sidebar.classList.toggle("open");
    if (overlay) overlay.classList.toggle("active");
  };
  toggle.addEventListener("click", toggle._sidebarHandler);
}

// Close sidebar whenever any link inside it is clicked.
// This is the single most reliable place to handle this — attached once,
// uses event delegation on the sidebar element itself (which never gets
// replaced by the router), so it works across all navigations.
function bindSidebarNavClose() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  if (!sidebar || sidebar._navClosebound) return;
  sidebar._navClosebound = true;
  sidebar.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (!link) return;
    // Small delay so the router's navigate() can start its fetch first
    setTimeout(() => {
      sidebar.classList.remove("open");
      if (overlay) overlay.classList.remove("active");
    }, 10);
  });
}

// Highlight the correct sidebar link for the current URL.
function updateActiveNav() {
  const page = window.location.pathname.split("/").pop() || "dashboard.html";
  document.querySelectorAll(".nav-item[data-page]").forEach((item) => {
    item.classList.toggle("active", item.dataset.page === page);
  });
}

// Update the greeting subtitle on the dashboard only.
function updateGreeting() {
  const greetingEl = document.querySelector(".page-subtitle");
  const page = window.location.pathname.split("/").pop() || "dashboard.html";
  if (!greetingEl || page !== "dashboard.html") return;
  const activeUserName =
    localStorage.getItem("ft_current_name") || Trackflow.user.name;
  const hours = new Date().getHours();
  const greet =
    hours < 12
      ? "Good morning"
      : hours < 17
        ? "Good afternoon"
        : "Good evening";
  greetingEl.textContent = `${greet}, ${activeUserName} 👋 Here's your financial snapshot.`;
}

// ============================
// ANIMATED COUNTER (Performance Optimized)
// ============================
function animateCounter(el, target, prefix = "₹", suffix = "", duration = 0.7) {
  if (!el) return;
  const isMobile = window.innerWidth < 768;

  // On mobile, use a simpler animation or even skip if battery saver is on
  // But we'll just make it snappier and use less frequent updates
  const obj = { val: 0 };
  gsap.fromTo(
    obj,
    { val: 0 },
    {
      val: target,
      duration: isMobile ? 0.5 : duration,
      ease: "power2.out",
      onUpdate: function () {
        const v = obj.val;
        // Use Math.round for better performance than Math.floor + abs
        const displayVal =
          (v < 0 ? "-" : "") +
          prefix +
          Math.round(Math.abs(v)).toLocaleString("en-IN") +
          suffix;

        // Only update DOM if value changed to save cycles
        if (el.textContent !== displayVal) {
          el.textContent = displayVal;
        }

        if (v < 0) el.style.color = "var(--accent-2)";
        else if (v > 0 && el.id === "stat-budget")
          el.style.color = "var(--accent-3)";
      },
    },
  );
}

// ============================
// PAGE ENTRANCE
// ============================
function pageEntrance() {
  gsap.fromTo(
    ".main-content",
    { opacity: 0, y: 8 },
    { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
  );
}

function launchConfetti() {
  const colors = [
    "#6c63ff",
    "#43e97b",
    "#f7971e",
    "#ff6b6b",
    "#38bdf8",
    "#ffd200",
    "#a855f7",
  ];
  for (let i = 0; i < 60; i++) {
    const dot = document.createElement("div");
    dot.className = "confetti-dot";
    dot.style.cssText = `background:${colors[Math.floor(Math.random() * colors.length)]};
      left:${Math.random() * 100}vw; top:-10px;
      width:${Math.random() * 8 + 4}px; height:${Math.random() * 8 + 4}px;
      border-radius:${Math.random() > 0.5 ? "50%" : "2px"};`;
    document.body.appendChild(dot);
    gsap.to(dot, {
      y: window.innerHeight + 50,
      x: (Math.random() - 0.5) * 400,
      rotation: Math.random() * 720,
      duration: Math.random() * 2 + 1.5,
      ease: "power1.in",
      delay: Math.random() * 0.5,
      onComplete: () => dot.remove(),
    });
  }
}

// ============================
// SHARED RENDER HELPERS
// Defined here (not in dashboard.html) so the router can call them
// from initDashboardPage() regardless of which page was loaded first.
// ============================

function renderRecentTransactions() {
  const el = document.getElementById("recent-list");
  if (!el) return;

  const recent = Trackflow.transactions.slice(0, 5);
  const isMobile = window.innerWidth < 768;

  if (recent.length === 0) {
    el.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">💸</div>
        <div class="empty-title">No transactions yet</div>
        <div style="font-size:.8rem;color:var(--text-muted);margin-top:4px">
          Add your first transaction to get started.
        </div>
      </div>`;
    return;
  }

  const fragment = document.createDocumentFragment();
  const items = [];
  recent.forEach((txn) => {
    const cat = getCategoryMeta(txn.category);
    const item = document.createElement("div");
    item.className = "txn-item";
    item.style.cssText = "opacity:0;will-change:transform,opacity;";
    item.innerHTML = `
      <div class="txn-emoji">${cat.icon}</div>
      <div class="txn-info">
        <div class="txn-name">${txn.note}</div>
        <div class="txn-cat">${cat.label}</div>
      </div>
      <div>
        <div class="txn-amount ${txn.type}">${txn.type === "expense" ? "-" : "+"}${formatINR(txn.amount)}</div>
        <div class="txn-date">${relativeDate(txn.date)}</div>
      </div>`;
    fragment.appendChild(item);
    items.push(item);
  });

  el.innerHTML = "";
  el.appendChild(fragment);

  if (typeof gsap !== "undefined") {
    gsap.fromTo(
      items,
      { opacity: 0, x: isMobile ? 0 : -12, y: isMobile ? 8 : 0 },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: isMobile ? 0.3 : 0.4,
        stagger: 0.05,
        ease: "power2.out",
        onComplete: () => items.forEach((it) => (it.style.willChange = "auto")),
      },
    );
  } else {
    items.forEach((it) => (it.style.opacity = "1"));
  }
}

function renderBudgetMini() {
  const el = document.getElementById("budget-mini");
  if (!el) return;

  const budgets = Trackflow.budgets.slice(0, 3);
  if (budgets.length === 0) {
    el.innerHTML = `<div style="padding:20px 0;text-align:center;color:var(--text-muted);font-size:.8rem">No budgets set yet.</div>`;
    return;
  }

  el.innerHTML = budgets
    .map((b) => {
      const cat = getCategoryMeta(b.category);
      const pct = Math.min(100, Math.round((b.spent / b.limit) * 100)) || 0;
      const isOver = b.spent > b.limit;
      const barColor = isOver ? "var(--accent-2)" : cat.color;
      return `
        <div style="margin-bottom:15px">
          <div style="display:flex;justify-content:space-between;margin-bottom:6px;font-size:.85rem">
            <span>${cat.icon} ${cat.label}</span>
            <span style="color:${isOver ? "var(--accent-2)" : "var(--text-secondary)"}">${formatINR(b.spent)} / ${formatINR(b.limit)}</span>
          </div>
          <div style="height:6px;background:rgba(255,255,255,0.05);border-radius:10px;overflow:hidden">
            <div class="mini-bar" style="width:0%;height:100%;background:${barColor};border-radius:10px;will-change:width" data-w="${pct}"></div>
          </div>
        </div>`;
    })
    .join("");

  requestAnimationFrame(() => {
    el.querySelectorAll(".mini-bar").forEach((bar) => {
      if (typeof gsap !== "undefined") {
        gsap.to(bar, {
          width: bar.dataset.w + "%",
          duration: 0.9,
          ease: "power2.out",
          onComplete: () => {
            bar.style.willChange = "auto";
          },
        });
      } else {
        bar.style.width = bar.dataset.w + "%";
      }
    });
  });
}

function renderGoalsMini() {
  const el = document.getElementById("goals-mini");
  if (!el) return;

  const goals = (Trackflow.savingsGoals || []).slice(0, 3);
  if (goals.length === 0) {
    el.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🎯</div>
        <div class="empty-title">No savings goals yet</div>
        <div style="font-size:.8rem;color:var(--text-muted);margin-top:4px">
          Go to Savings Goals to set one up.
        </div>
      </div>`;
    return;
  }

  el.innerHTML = goals
    .map((g) => {
      const pct = Math.min(100, Math.round((g.saved / g.target) * 100)) || 0;
      return `
        <div style="margin-bottom:15px">
          <div style="display:flex;justify-content:space-between;margin-bottom:6px;font-size:.85rem">
            <span>${g.icon} ${g.name}</span>
            <span style="color:var(--accent-1)">${pct}%</span>
          </div>
          <div style="height:6px;background:rgba(255,255,255,0.05);border-radius:10px;overflow:hidden">
            <div class="mini-bar" style="width:0%;height:100%;background:${g.color};border-radius:10px;will-change:width" data-w="${pct}"></div>
          </div>
          <div style="font-size:.7rem;color:var(--text-muted);margin-top:4px">
            ${formatINR(g.saved)} saved of ${formatINR(g.target)}
          </div>
        </div>`;
    })
    .join("");

  requestAnimationFrame(() => {
    el.querySelectorAll(".mini-bar").forEach((bar) => {
      if (typeof gsap !== "undefined") {
        gsap.to(bar, {
          width: bar.dataset.w + "%",
          duration: 0.9,
          ease: "power2.out",
          onComplete: () => {
            bar.style.willChange = "auto";
          },
        });
      } else {
        bar.style.width = bar.dataset.w + "%";
      }
    });
  });
}

// ============================
// CROSS-TAB SYNCHRONIZATION
// ============================
// Automatically sync changes if the user has multiple tabs open
window.addEventListener("storage", (e) => {
  if (e.key && e.key.startsWith(getUserKey("ft_"))) {
    // Data changed in another tab, reload it
    loadData();
    
    // Attempt to re-render visible widgets dynamically without refreshing
    if (typeof renderRecentTransactions === "function") renderRecentTransactions();
    if (typeof renderBudgetMini === "function") renderBudgetMini();
    if (typeof renderGoalsMini === "function") renderGoalsMini();
    if (typeof renderNotifications === "function") renderNotifications();
    
    // Update counters if we are on the dashboard
    if (document.getElementById("stat-balance") && typeof animateCounter === "function") {
      animateCounter(document.getElementById("stat-balance"), Trackflow.summary.balance);
      animateCounter(document.getElementById("stat-expenses"), Trackflow.summary.monthExpense);
      animateCounter(document.getElementById("stat-savings"), Trackflow.summary.savings);
      animateCounter(document.getElementById("stat-budget"), Trackflow.summary.budgetLeft);
    }
  }
});

