/* ==========================================================================
   Антон Смирнов — интерактивность: темы, навигация, анимации
   ========================================================================== */
(function () {
  'use strict';

  var root = document.documentElement;
  var themeToggle = document.getElementById('themeToggle');
  var accentButtons = document.querySelectorAll('.accent-dot');

  /* ---------- Тёмная / светлая тема ---------- */
  function syncThemeIcon() {
    if (!themeToggle) return;
    var isDark = root.getAttribute('data-bs-theme') !== 'light';
    var icon = themeToggle.querySelector('i');
    if (icon) icon.className = isDark ? 'bi bi-sun' : 'bi bi-moon-stars';
    themeToggle.setAttribute('aria-label', isDark ? 'Включить светлую тему' : 'Включить тёмную тему');
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', isDark ? '#0a0710' : '#f5f2fb');
  }

  function setTheme(theme) {
    root.setAttribute('data-bs-theme', theme);
    try { localStorage.setItem('as-theme', theme); } catch (e) {}
    syncThemeIcon();
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      setTheme(root.getAttribute('data-bs-theme') === 'light' ? 'dark' : 'light');
    });
  }
  syncThemeIcon();

  /* ---------- Акцентная цветовая схема ---------- */
  function setAccent(accent) {
    root.setAttribute('data-accent', accent);
    try { localStorage.setItem('as-accent', accent); } catch (e) {}
    accentButtons.forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.dataset.accent === accent));
    });
  }

  accentButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      setAccent(btn.dataset.accent);
    });
    btn.setAttribute(
      'aria-pressed',
      String(btn.dataset.accent === (root.getAttribute('data-accent') || 'duo'))
    );
  });

  /* ---------- Навигация: фон при скролле ---------- */
  var nav = document.getElementById('siteNav');
  var navLinks = document.querySelectorAll('.site-nav .nav-link');
  var sections = [];

  function onScroll() {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);

    var pos = window.scrollY + window.innerHeight * 0.32;
    var current = '';
    sections.forEach(function (section) {
      if (section.offsetTop <= pos) current = section.id;
    });
    navLinks.forEach(function (link) {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }

  document.querySelectorAll('main section[id]').forEach(function (section) {
    sections.push(section);
  });

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Закрываем мобильное меню после клика ---------- */
  var navCollapse = document.getElementById('navMenu');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (navCollapse && navCollapse.classList.contains('show') && window.bootstrap) {
        bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
      }
    });
  });

  /* ---------- Появление блоков при скролле ---------- */
  var revealItems = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealItems.forEach(function (item, i) {
      item.style.transitionDelay = Math.min(i % 4, 3) * 70 + 'ms';
      observer.observe(item);
    });
  } else {
    revealItems.forEach(function (item) { item.classList.add('is-visible'); });
  }

  /* ---------- Кнопка «Скопировать ник» ---------- */
  var copyBtn = document.getElementById('copyTelegram');
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      var text = copyBtn.dataset.copy || '';
      var label = copyBtn.querySelector('span');
      var icon = copyBtn.querySelector('i');

      function done() {
        if (label) label.textContent = 'Скопировано';
        if (icon) icon.className = 'bi bi-check2';
        copyBtn.classList.add('is-copied');
        setTimeout(function () {
          if (label) label.textContent = 'Скопировать ник';
          if (icon) icon.className = 'bi bi-clipboard';
          copyBtn.classList.remove('is-copied');
        }, 1900);
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(function () {});
      } else {
        var input = document.createElement('textarea');
        input.value = text;
        document.body.appendChild(input);
        input.select();
        try { document.execCommand('copy'); done(); } catch (e) {}
        document.body.removeChild(input);
      }
    });
  }

  /* ---------- Год в футере ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
