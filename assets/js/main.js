(function () {
  var root = document.documentElement;

  // Theme toggle
  var toggle = document.querySelector('.theme-toggle');
  if (toggle) toggle.addEventListener('click', function () {
    var t = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = t;
    localStorage.setItem('theme', t);
  });

  // Email links are assembled here so the address is not in the HTML
  document.querySelectorAll('.js-email').forEach(function (a) {
    a.href = 'mailto:' + a.dataset.u + '@' + a.dataset.d;
  });

  // Copy BibTeX on paper pages
  document.querySelectorAll('.copy-bib').forEach(function (b) {
    b.addEventListener('click', function () {
      var text = b.parentNode.querySelector('code').textContent;
      navigator.clipboard.writeText(text).then(function () {
        b.textContent = 'Copied';
        setTimeout(function () { b.textContent = 'Copy'; }, 1500);
      });
    });
  });

  // Publications filter
  var pubs = document.getElementById('publications');
  document.querySelectorAll('.filter button').forEach(function (b) {
    b.addEventListener('click', function () {
      document.querySelectorAll('.filter button').forEach(function (x) {
        x.setAttribute('aria-pressed', x === b ? 'true' : 'false');
      });
      pubs.classList.toggle('pubs-selected', b.dataset.filter === 'selected');
    });
  });

  // Back-to-top button
  var top = document.querySelector('.to-top');
  function onScroll() { top.classList.toggle('show', window.scrollY > 600); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Highlight the nav link for the section in view
  var links = {};
  document.querySelectorAll('.nav a').forEach(function (a) {
    links[a.hash.slice(1)] = a;
  });
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting || !links[e.target.id]) return;
        Object.keys(links).forEach(function (k) { links[k].classList.toggle('active', k === e.target.id); });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(links).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) io.observe(el);
    });
  }
})();
