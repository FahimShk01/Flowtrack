// ============================
// LANDING PAGE ANIMATIONS
// GSAP + ScrollTrigger  (Optimized)
// ============================

gsap.registerPlugin(ScrollTrigger);

// ---- Particle Canvas (GPU-accelerated, optimized) ----
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
let W, H, raf;

canvas.style.willChange = 'transform';

function resizeCanvas() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', () => { resizeCanvas(); buildParticles(); });

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * W;
    this.y = Math.random() * H;
    this.size = Math.random() * 1.5 + 0.4;
    this.speedX = (Math.random() - 0.5) * 0.3;
    this.speedY = (Math.random() - 0.5) * 0.3;
    this.opacity = Math.random() * 0.4 + 0.08;
    this.color = ['#6c63ff','#a855f7','#43e97b','#38bdf8'][Math.floor(Math.random()*4)];
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
  }
  draw() {
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Fewer particles on mobile for better performance
function buildParticles() {
  const isMobile = window.innerWidth < 768;
  const count = isMobile ? 20 : 60;
  particles = Array.from({ length: count }, () => new Particle());
}
buildParticles();

// Connection lines only drawn every 3 frames to reduce cost
let frameCount = 0;
let lastConnections = [];

function animateParticles() {
  if (window.innerWidth < 768 && frameCount % 2 !== 0) {
    frameCount++;
    raf = requestAnimationFrame(animateParticles);
    return;
  }
  raf = requestAnimationFrame(animateParticles);
  ctx.clearRect(0, 0, W, H);
  ctx.globalAlpha = 1;

  // Draw connection lines every 3 frames (big perf win)
  frameCount++;
  if (frameCount % 3 === 0) {
    lastConnections = [];
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 90) lastConnections.push([i, j, dist]);
      }
    }
  }

  // Reuse cached connections
  ctx.lineWidth = 1;
  ctx.strokeStyle = '#6c63ff';
  lastConnections.forEach(([i, j, dist]) => {
    ctx.globalAlpha = (1 - dist/90) * 0.06;
    ctx.beginPath();
    ctx.moveTo(particles[i].x, particles[i].y);
    ctx.lineTo(particles[j].x, particles[j].y);
    ctx.stroke();
  });

  // Draw particles
  particles.forEach(p => { p.update(); p.draw(); });
  ctx.globalAlpha = 1;
}

// Stop animation when tab hidden (perf)
document.addEventListener('visibilitychange', () => {
  if (document.hidden) cancelAnimationFrame(raf);
  else animateParticles();
});
animateParticles();

// ---- Navbar scroll effect ----
const nav = document.getElementById('lp-nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

// ---- Mobile nav ----
const hamburger = document.getElementById('lp-hamburger');
const mobileNav = document.getElementById('lp-mobile-nav');
hamburger.addEventListener('click', () => mobileNav.classList.toggle('open'));
document.querySelectorAll('.lp-mobile-nav a').forEach(a => {
  a.addEventListener('click', () => mobileNav.classList.remove('open'));
});

// ---- Hero GSAP Timeline ----
const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
heroTl
  .to('#hero-badge', { opacity: 1, y: 0, duration: 0.7, delay: 0.2 })
  .to('.hero-headline .line', { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 }, '-=0.3')
  .to('#hero-sub',   { opacity: 1, y: 0, duration: 0.7 }, '-=0.3')
  .to('#hero-cta',   { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
  .to('#hero-cards', { opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.4')
  .to('#scroll-indicator', { opacity: 1, duration: 0.5 }, '-=0.2');

// ---- Parallax on mouse move (desktop only) ----
if (window.innerWidth > 1024) {
  document.addEventListener('mousemove', (e) => {
    const xPct = (e.clientX / window.innerWidth - 0.5) * 2;
    const yPct = (e.clientY / window.innerHeight - 0.5) * 2;
    gsap.to('.layer-1', { x: xPct * 18, y: yPct * 12, duration: 1.8, ease: 'power2.out' });
    gsap.to('.layer-2', { x: xPct * -12, y: yPct * -8, duration: 1.8, ease: 'power2.out' });
    gsap.to('.layer-3', { x: xPct * 8,   y: yPct * 6,  duration: 1.8, ease: 'power2.out' });
  }, { passive: true });
}

// ---- Scroll parallax ----
gsap.to('.layer-1', {
  yPercent: -25, ease: 'none',
  scrollTrigger: { trigger: '.hero-section', start: 'top top', end: 'bottom top', scrub: 1 }
});
gsap.to('.layer-2', {
  yPercent: -15, ease: 'none',
  scrollTrigger: { trigger: '.hero-section', start: 'top top', end: 'bottom top', scrub: 1 }
});

// ---- ScrollTrigger reveal ----
function revealOnScroll(selector) {
  gsap.utils.toArray(selector).forEach((el, i) => {
    gsap.fromTo(el,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.7, delay: i * 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none reverse' }
      }
    );
  });
}
revealOnScroll('[data-scroll-reveal]');
revealOnScroll('.feature-card');
revealOnScroll('.step-card');

// ---- Animated counters ----
gsap.utils.toArray('.stat-big[data-count]').forEach(el => {
  const target  = parseFloat(el.dataset.count);
  const prefix  = el.dataset.prefix  || '';
  const suffix  = el.dataset.suffix  || '';
  const isDec   = 'decimal' in el.dataset;
  ScrollTrigger.create({
    trigger: el, start: 'top 88%', once: true,
    onEnter: () => {
      gsap.fromTo({ val: 0 }, { val: target }, {
        duration: 2, ease: 'power2.out',
        onUpdate: function() {
          const v = this.targets()[0].val;
          el.textContent = prefix + (isDec ? v.toFixed(1) : Math.floor(v).toLocaleString('en-IN')) + suffix;
        }
      });
    }
  });
});

// ---- CTA glow pulse ----
gsap.to('.cta-glow', { scale: 1.3, opacity: 0.45, duration: 2.5, yoyo: true, repeat: -1, ease: 'sine.inOut' });

// ---- Button hover magnetic (Desktop Only) ----
if (window.innerWidth > 1024) {
  document.querySelectorAll('.btn-primary, .btn-outline').forEach(btn => {
    btn.addEventListener('mousemove', function(e) {
      const r = this.getBoundingClientRect();
      gsap.to(this, { x:(e.clientX-r.left-r.width/2)*0.15, y:(e.clientY-r.top-r.height/2)*0.15, duration:0.4, ease:'power2.out' });
    });
    btn.addEventListener('mouseleave', function() {
      gsap.to(this, { x:0, y:0, duration:0.5, ease:'elastic.out(1,0.5)' });
    });
  });
}

// ---- Smooth anchor scroll ----
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
