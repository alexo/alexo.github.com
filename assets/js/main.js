(function () {
  var root = document.documentElement;

  var themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  var header = document.getElementById('site-header');
  var navBtn = document.getElementById('nav-toggle');
  if (header && navBtn) {
    navBtn.addEventListener('click', function () {
      var open = header.classList.toggle('nav-open');
      navBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  var bar = document.getElementById('progress');
  var article = document.querySelector('.post .entry-content');
  if (bar && article) {
    var update = function () {
      var rect = article.getBoundingClientRect();
      var total = rect.height - window.innerHeight;
      var done = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
      bar.style.width = (done * 100) + '%';
    };
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  var toc = document.getElementById('toc');
  if (toc && article) {
    var heads = article.querySelectorAll('h2');
    if (heads.length >= 3) {
      var html = '<p>On this page</p>';
      heads.forEach(function (h, i) {
        if (!h.id) h.id = 'section-' + (i + 1);
        html += '<a href="#' + h.id + '">' + h.textContent + '</a>';
      });
      toc.innerHTML = html;
      toc.hidden = false;
      var links = toc.querySelectorAll('a');
      if ('IntersectionObserver' in window) {
        var spy = new IntersectionObserver(function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) {
              links.forEach(function (l) { l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id); });
            }
          });
        }, { rootMargin: '-10% 0px -80% 0px' });
        heads.forEach(function (h) { spy.observe(h); });
      }
    }
  }

  document.querySelectorAll('.entry-content pre').forEach(function (pre) {
    if (pre.closest('.code-block')) return;
    var holder = pre.closest('.highlighter-rouge') || pre.closest('.highlight') || pre;
    var langEl = holder.closest('[class*="language-"]') || holder.querySelector('[class*="language-"]');
    var lang = 'code';
    if (langEl) {
      var m = langEl.className.match(/language-([\w+-]+)/);
      if (m) lang = m[1];
    }
    var wrap = document.createElement('div');
    wrap.className = 'code-block';
    var bar2 = document.createElement('div');
    bar2.className = 'code-bar';
    var label = document.createElement('span');
    label.textContent = lang;
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = 'Copy';
    btn.addEventListener('click', function () {
      var text = pre.innerText;
      var done = function () { btn.textContent = 'Copied'; setTimeout(function () { btn.textContent = 'Copy'; }, 1500); };
      if (navigator.clipboard) navigator.clipboard.writeText(text).then(done);
    });
    bar2.appendChild(label);
    bar2.appendChild(btn);
    holder.parentNode.insertBefore(wrap, holder);
    wrap.appendChild(bar2);
    wrap.appendChild(holder);
  });

  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }
})();
