(function () {
  var form = document.querySelector('[data-search-form]');
  var input = document.querySelector('[data-search-input]');
  var results = document.querySelector('[data-search-results]');
  var status = document.querySelector('[data-search-status]');
  if (!form || !input || !results) return;

  var base = document.body.getAttribute('data-base-url') || '';
  var index = null;

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function render(q) {
    var term = q.trim().toLowerCase();
    if (!term) { results.innerHTML = ''; status.textContent = ''; return; }
    var hits = index.filter(function (item) {
      return (item.title + ' ' + item.excerpt).toLowerCase().indexOf(term) > -1;
    });
    status.textContent = hits.length + ' result' + (hits.length === 1 ? '' : 's') + ' for “' + q.trim() + '”';
    results.innerHTML = hits.map(function (h) {
      return '<a class="archive-item in" href="' + esc(h.link) + '"><span></span><div><h3>' + esc(h.title) + '</h3><p>' + esc(h.excerpt) + '</p></div></a>';
    }).join('');
  }

  function run(q) {
    if (index) return render(q);
    fetch(base + '/search.json').then(function (r) { return r.json(); }).then(function (data) {
      index = data;
      render(q);
    });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    run(input.value);
  });
  input.addEventListener('input', function () { run(input.value); });

  var m = /[?&]q=([^&]*)/.exec(window.location.search);
  if (m) {
    input.value = decodeURIComponent(m[1].replace(/\+/g, ' '));
    run(input.value);
  }
})();
