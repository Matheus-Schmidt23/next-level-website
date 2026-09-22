/* ==========================================================================
   Next Level Contabilidade — script principal
   ========================================================================== */

/**
 * CONFIGURAÇÃO DE CONTATO
 * Ponto único de ajuste: troque o número de WhatsApp aqui (formato DDI+DDD+número,
 * só dígitos) antes de publicar o site. Ver README.md > "Pendências de conteúdo".
 */
const NEXT_LEVEL_CONFIG = {
  whatsappNumber: "5500000000000", // XXXXXXX — substituir pelo número real (DDI+DDD+número)
  whatsappMessageDefault: "Olá! Vim pelo site da Next Level e quero saber mais sobre a contabilidade."
};

(function () {
  "use strict";

  /* ---------- monta os links de WhatsApp ---------- */
  function buildWhatsappLinks() {
    document.querySelectorAll("[data-wa-link]").forEach(function (el) {
      const customMessage = el.getAttribute("data-wa-message");
      const message = encodeURIComponent(customMessage || NEXT_LEVEL_CONFIG.whatsappMessageDefault);
      el.setAttribute("href", "https://wa.me/" + NEXT_LEVEL_CONFIG.whatsappNumber + "?text=" + message);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    });
  }

  /* ---------- menu mobile ---------- */
  function setupMobileNav() {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".main-nav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("is-open");
      toggle.classList.toggle("is-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---------- marca o link ativo do menu conforme a página atual ---------- */
  function highlightActiveNav() {
    const currentPage = (window.location.pathname.split("/").pop() || "index.html");
    document.querySelectorAll(".main-nav a[href]").forEach(function (link) {
      const href = link.getAttribute("href");
      if (href === currentPage || (currentPage === "" && href === "index.html")) {
        link.classList.add("is-active");
      }
    });
  }

  /* ---------- animação simples ao rolar a página ---------- */
  function setupRevealOnScroll() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("show"); });
      return;
    }

    const observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: "0px 0px 0px 0px" }
    );

    items.forEach(function (el) { observer.observe(el); });

    // Rede de segurança: garante que nada fique invisível por qualquer
    // falha silenciosa do observer (ex.: elemento nunca cruza o viewport).
    window.setTimeout(function () {
      items.forEach(function (el) { el.classList.add("show"); });
    }, 2500);
  }

  /* ---------- parallax de scroll no fundo do hero (o zoom Ken Burns fica só em CSS) ----------
     Desloca o .hero-bg-frame em até ±30px conforme a rolagem. O frame é
     maior que a seção (ver CSS) especificamente para sobrar essa folga —
     por isso o deslocamento nunca expõe borda, em nenhum tamanho de tela. */
  function setupHeroParallax() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const heroes = [...document.querySelectorAll(".hero, .hero-inner")]
      .map(function (hero) { return { hero: hero, frame: hero.querySelector(".hero-bg-frame") }; })
      .filter(function (item) { return item.frame; });
    if (!heroes.length) return;

    const MAX_OFFSET = 30; // px — bem dentro da folga de 10% do frame
    let ticking = false;

    function update() {
      heroes.forEach(function (item) {
        const rect = item.hero.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return; // fora da tela, não precisa calcular
        const progress = Math.min(Math.max(-rect.top / (rect.height || 1), -1), 1);
        item.frame.style.transform = "translate3d(0," + (progress * MAX_OFFSET).toFixed(1) + "px,0)";
      });
      ticking = false;
    }

    window.addEventListener("scroll", function () {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    }, { passive: true });

    update();
  }

  /* ---------- fecha outros itens de FAQ ao abrir um novo (opcional, mais limpo) ---------- */
  function setupFaqAccordion() {
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(function (item) {
      item.addEventListener("toggle", function () {
        if (item.open) {
          faqItems.forEach(function (other) {
            if (other !== item) other.open = false;
          });
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    buildWhatsappLinks();
    setupMobileNav();
    highlightActiveNav();
    setupRevealOnScroll();
    setupHeroParallax();
    setupFaqAccordion();
  });
})();
