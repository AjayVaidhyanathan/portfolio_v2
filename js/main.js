// ── CURSOR
const cur = document.getElementById('cur');
const curR = document.getElementById('curR');
let mx=0, my=0, tx=0, ty=0;
document.addEventListener('mousemove', e => {
  mx=e.clientX; my=e.clientY;
  cur.style.left=mx+'px'; cur.style.top=my+'px';
});
(function loop() {
  tx += (mx-tx)*0.12; ty += (my-ty)*0.12;
  curR.style.left=tx+'px'; curR.style.top=ty+'px';
  requestAnimationFrame(loop);
})();
document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => curR.classList.add('big'));
  el.addEventListener('mouseleave', () => curR.classList.remove('big'));
});

// ── NAV
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 60), {passive:true});

// ── INTERSECTION OBSERVER
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in');
    io.unobserve(e.target);
  });
}, {threshold: 0.08, rootMargin: '0px 0px -40px 0px'});

document.querySelectorAll('.au,.ac,.sec-label,.case-item,.ap-step,.sk,.tr').forEach(el => io.observe(el));
document.querySelectorAll('.case-item').forEach((el,i) => el.style.transitionDelay = i*0.06+'s');
document.querySelectorAll('.ap-step').forEach((el,i) => el.style.transitionDelay = i*0.08+'s');
document.querySelectorAll('.sk').forEach((el,i) => el.style.transitionDelay = i*0.06+'s');
document.querySelectorAll('.tr').forEach((el,i) => el.style.transitionDelay = i*0.07+'s');

// ── EXPAND / COLLAPSE detail panels
document.querySelectorAll('.ci-expand-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const detail = btn.nextElementSibling;
    const isOpen = detail.classList.contains('open');
    // close all others
    document.querySelectorAll('.ci-detail.open').forEach(d => {
      d.classList.remove('open');
      d.previousElementSibling.classList.remove('open');
      d.previousElementSibling.setAttribute('aria-expanded', 'false');
      d.previousElementSibling.childNodes[2].textContent = ' ↓';
    });
    document.querySelectorAll('.ci-expand-btn.open').forEach(b => b.classList.remove('open'));
    if (!isOpen) {
      detail.classList.add('open');
      btn.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

// ── FILTER + PAGINATION
const filterBtns  = document.querySelectorAll('.filter-btn');
const allItems     = Array.from(document.querySelectorAll('.case-item'));
const noResults    = document.getElementById('noResults');
const searchInput  = document.getElementById('caseSearch');
const pgPrev       = document.getElementById('pgPrev');
const pgNext       = document.getElementById('pgNext');
const pgInfo       = document.getElementById('pgInfo');
const pagination   = document.getElementById('pagination');

const PER_PAGE = 4;
let activeFilter = 'all';
let searchQuery  = '';
let currentPage  = 1;
let filteredItems = [];

function closeDetail(item) {
  const detail = item.querySelector('.ci-detail');
  const btn    = item.querySelector('.ci-expand-btn');
  if (detail) { detail.classList.remove('open'); }
  if (btn)    { btn.classList.remove('open'); btn.setAttribute('aria-expanded','false'); }
}

function applyFilters() {
  // Build filtered list
  filteredItems = allItems.filter(item => {
    const tags    = item.dataset.tags || '';
    const title   = item.querySelector('.ci-title').textContent.toLowerCase();
    const summary = item.querySelector('.ci-summary').textContent.toLowerCase();
    const text    = tags + ' ' + title + ' ' + summary;
    const matchFilter = activeFilter === 'all' || tags.includes(activeFilter);
    const matchSearch = searchQuery === '' || text.includes(searchQuery);
    return matchFilter && matchSearch;
  });

  currentPage = 1;
  renderPage();
}

function renderPage() {
  const totalPages = Math.ceil(filteredItems.length / PER_PAGE);
  const start = (currentPage - 1) * PER_PAGE;
  const end   = start + PER_PAGE;

  // Hide all, show only current page slice
  allItems.forEach(item => {
    item.classList.add('hidden');
    closeDetail(item);
  });
  filteredItems.slice(start, end).forEach(item => item.classList.remove('hidden'));

  // No results
  noResults.classList.toggle('visible', filteredItems.length === 0);

  // Pagination controls
  const showPagination = filteredItems.length > PER_PAGE;
  pagination.style.display = showPagination ? 'flex' : 'none';

  if (showPagination) {
    pgPrev.disabled = currentPage === 1;
    pgNext.disabled = currentPage >= totalPages;

    // Dot indicators
    pgInfo.innerHTML = Array.from({length: totalPages}, (_,i) =>
      `<span class="pg-dot ${i+1===currentPage ? 'active' : ''}" data-page="${i+1}"></span>`
    ).join('');

    pgInfo.querySelectorAll('.pg-dot').forEach(dot => {
      dot.addEventListener('click', () => {
        currentPage = parseInt(dot.dataset.page);
        renderPage();
        scrollToWork();
      });
    });
  }
}

function scrollToWork() {
  document.getElementById('work').scrollIntoView({behavior: 'smooth', block: 'start'});
}

pgPrev.addEventListener('click', () => {
  if (currentPage > 1) { currentPage--; renderPage(); scrollToWork(); }
});
pgNext.addEventListener('click', () => {
  const totalPages = Math.ceil(filteredItems.length / PER_PAGE);
  if (currentPage < totalPages) { currentPage++; renderPage(); scrollToWork(); }
});

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    applyFilters();
  });
});

searchInput.addEventListener('input', () => {
  searchQuery = searchInput.value.toLowerCase().trim();
  applyFilters();
});

// Init
applyFilters();
