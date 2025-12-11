
// Бургер-меню
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });

  // Закрывать меню при клике по ссылке (на мобильном)
  mainNav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      mainNav.classList.remove("open");
    }
  });
}

// Плавный скролл по якорям
document.addEventListener("click", (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;

  const href = link.getAttribute("href");
  if (href === "#" || href === "#top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    e.preventDefault();
    return;
  }

  const target = document.querySelector(href);
  if (target) {
    const headerOffset = 64;
    const rect = target.getBoundingClientRect();
    const offsetTop = rect.top + window.scrollY - headerOffset;

    window.scrollTo({ top: offsetTop, behavior: "smooth" });
    e.preventDefault();
  }
});

// Текущий год в футере
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Заглушка для формы (чтобы не перезагружала страницу)
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Сообщение отправлено (демо). В рабочей версии форма будет направлять обращение в штаб СКВРиЗ.");
    contactForm.reset();
  });
}
