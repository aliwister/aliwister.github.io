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

  // Publications filter: Selected/All toggle combined with one topic or method chip.
  // Chips are links (?topic= / ?tag=) so they also work from paper pages.
  var pubs = document.getElementById('publications');
  if (pubs) {
    var params = new URLSearchParams(location.search);
    var state = { sel: false, topic: params.get('topic'), tag: params.get('tag') };

    var apply = function () {
      pubs.querySelectorAll('.pub').forEach(function (a) {
        a.hidden = !((!state.sel || a.dataset.selected === 'true') &&
          (!state.topic || a.dataset.topics.split(' ').indexOf(state.topic) >= 0) &&
          (!state.tag || a.dataset.tags.split('|').indexOf(state.tag) >= 0));
      });
      pubs.querySelectorAll('.pub-group').forEach(function (g) {
        g.hidden = !g.querySelector('.pub:not([hidden])');
      });
      pubs.querySelectorAll('.topic-filter a').forEach(function (c) {
        var on = c.hasAttribute('data-all') ? !state.topic && !state.tag
          : c.dataset.topic ? c.dataset.topic === state.topic : c.dataset.tag === state.tag;
        c.classList.toggle('is-active', on);
      });
    };

    document.addEventListener('click', function (e) {
      var c = e.target.closest('[data-topic], [data-tag], [data-all]');
      if (!c) return;
      e.preventDefault();
      if (c.hasAttribute('data-all')) { state.topic = state.tag = null; }
      else if (c.dataset.topic) { state.topic = state.topic === c.dataset.topic ? null : c.dataset.topic; state.tag = null; }
      else { state.tag = state.tag === c.dataset.tag ? null : c.dataset.tag; state.topic = null; }
      apply();
      var q = state.topic ? '?topic=' + state.topic : state.tag ? '?tag=' + encodeURIComponent(state.tag) : '';
      history.replaceState(null, '', location.pathname + q + '#publications');
      if (!c.closest('.topic-filter')) pubs.scrollIntoView({ behavior: 'smooth' });
    });

    document.querySelectorAll('.filter button').forEach(function (b) {
      b.addEventListener('click', function () {
        document.querySelectorAll('.filter button').forEach(function (x) {
          x.setAttribute('aria-pressed', x === b ? 'true' : 'false');
        });
        state.sel = b.dataset.filter === 'selected';
        apply();
      });
    });
    apply();
  }

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
