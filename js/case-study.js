const cur = document.getElementById('cur'), curR = document.getElementById('curR');
let mx = 0, my = 0, tx = 0, ty = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cur.style.left = mx + 'px'; cur.style.top = my + 'px'; });
(function loop() { tx += (mx - tx) * 0.12; ty += (my - ty) * 0.12; curR.style.left = tx + 'px'; curR.style.top = ty + 'px'; requestAnimationFrame(loop); })();
document.querySelectorAll('a').forEach(el => { el.addEventListener('mouseenter', () => curR.classList.add('big')); el.addEventListener('mouseleave', () => curR.classList.remove('big')); });
const io = new IntersectionObserver(entries => { entries.forEach(e => { if (!e.isIntersecting) return; e.target.classList.add('in'); io.unobserve(e.target); }); }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.cs-section,.au,.asset-block').forEach(el => io.observe(el));
