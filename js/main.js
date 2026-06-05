/* ═══════════════════════════════════════════════════════════════
   MSHochzeit — Saskia & Maximilian · 3. Juni 2028
   js/main.js — All interactive behaviour
═══════════════════════════════════════════════════════════════ */

/* ── NAV SCROLL BEHAVIOUR ───────────────────────────────────── */
const navEl = document.getElementById("nav");
window.addEventListener("scroll", () => {
  navEl.classList.toggle("scrolled", window.scrollY > 60);
}, { passive: true });

/* ── COUNTDOWN ───────────────────────────────────────────────── */
const wedding = new Date("2028-06-03T14:00:00");
function pad(n) { return String(n).padStart(2, "0"); }
function tick() {
  const diff = wedding - new Date();
  if (diff <= 0) {
    ["cd-days","cd-hours","cd-mins","cd-secs"].forEach(id => {
      document.getElementById(id).textContent = "00";
    });
    return;
  }
  document.getElementById("cd-days").textContent  = pad(Math.floor(diff / 86400000));
  document.getElementById("cd-hours").textContent = pad(Math.floor((diff % 86400000) / 3600000));
  document.getElementById("cd-mins").textContent  = pad(Math.floor((diff % 3600000) / 60000));
  document.getElementById("cd-secs").textContent  = pad(Math.floor((diff % 60000) / 1000));
}
tick();
setInterval(tick, 1000);

/* ── TOAST HELPER ────────────────────────────────────────────── */
function showToast(message, duration = 3500) {
  const t = document.getElementById("toast");
  t.textContent = message;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), duration);
}

/* ── SUBSCRIBE FORM ──────────────────────────────────────────── */
function subscribe() {
  const val = document.getElementById("emailInput").value.trim();
  if (!val || !val.includes("@")) return;
  showToast("Danke — wir melden uns bald ✦");
  document.getElementById("emailInput").value = "";
}

document.getElementById("emailInput").addEventListener("keydown", e => {
  if (e.key === "Enter") subscribe();
});

/* ── SCROLL REVEAL ───────────────────────────────────────────── */
(function initReveal() {
  const revealEls = document.querySelectorAll(".reveal, .reveal-group");
  if (!revealEls.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  });

  revealEls.forEach(el => observer.observe(el));
})();

/* ── FAQ ACCORDION ───────────────────────────────────────────── */
(function initFaq() {
  const faqItems = document.querySelectorAll(".faq-item");
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    if (!question) return;

    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");

      // Close all open items
      faqItems.forEach(other => other.classList.remove("open"));

      // If this wasn't open, open it
      if (!isOpen) {
        item.classList.add("open");
      }
    });
  });
})();

/* ── RSVP FORM ───────────────────────────────────────────────── */
(function initRsvp() {
  const form = document.getElementById("rsvpForm");
  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();

    // Validate: name required
    const nameEl = form.querySelector("#rsvpName");
    if (!nameEl || !nameEl.value.trim()) {
      nameEl && nameEl.focus();
      return;
    }

    // Validate: attendance radio required
    const attendanceEl = form.querySelector("input[name='anwesenheit']:checked");
    if (!attendanceEl) {
      return;
    }

    // Show success toast & reset form
    showToast("Vielen Dank! Wir freuen uns auf euch ✦", 4000);
    form.reset();
  });
})();
