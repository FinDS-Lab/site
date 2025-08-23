// Mobile menu toggle
const btnMobile = document.getElementById('btnMobile');
const mobileNav = document.getElementById('mobileNav');
btnMobile?.addEventListener('click', ()=> mobileNav.classList.toggle('hidden'));

// Desktop menus: keep submenu open while moving cursor
const MENU_DELAY = 70; // ms
document.querySelectorAll('.menu-group[data-menu]').forEach((grp)=>{
  const panel = grp.querySelector('.js-submenu');
  if(!panel) return;
  let t;
  const open  = ()=>{ clearTimeout(t); grp.classList.add('open'); };
  const close = ()=>{ t = setTimeout(()=> grp.classList.remove('open'), MENU_DELAY); };
  grp.addEventListener('mouseenter', open);
  grp.addEventListener('mouseleave', close);
  grp.addEventListener('focusin', open);
  grp.addEventListener('focusout', close);
});

// Footer year
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());

// Carousel
const track = document.getElementById('carouselTrack');
const dots  = Array.from(document.querySelectorAll('[data-dot]'));
if (track && dots.length){
  let idx = 0;
  const total = track.children.length;
  let timer;

  const go = (i) => {
    idx = (i + total) % total;
    track.style.transform = `translateX(-${idx * 100}%)`;
    dots.forEach((d, j) => d.classList.toggle('active', j === idx));
  };
  const auto = () => { timer = setInterval(() => go(idx + 1), 5000); };

  dots.forEach((d) => d.addEventListener('click', () => {
    clearInterval(timer);
    go(+d.dataset.dot);
    auto();
  }));

  go(0); auto();
}

// Embed loaders (News / Notice)
async function importList(srcUrl, listSelectors, targetId, limit = 3){
  const target = document.getElementById(targetId);
  if (!target) return;

  if (location.protocol === 'file:') {
    target.innerHTML = '<li class="text-sm text-amber-600">로컬 파일로 열면 임베드가 차단됩니다. 로컬 서버에서 접속해 주세요.</li>';
    return;
  }

  try {
    const res = await fetch(srcUrl, { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();
    const doc = new DOMParser().parseFromString(html, 'text/html');

    let items = [];
    for (const sel of listSelectors) {
      items = Array.from(doc.querySelectorAll(sel));
      if (items.length) break;
    }

    target.innerHTML = '';
    if (items.length === 0) {
      target.innerHTML = '<li class="text-sm text-slate-500">게시글이 없습니다.</li>';
      return;
    }

    items.slice(0, limit).forEach((li) => target.appendChild(li.cloneNode(true)));
  } catch (err) {
    console.error('임베드 오류:', err);
    target.innerHTML = '<li class="text-sm text-slate-500">불러오기 실패</li>';
  }
}

// Load lists
importList('{{ "/archives-news.html"   | relative_url }}',
  ['#news-list > li', '#news ul > li', 'ul#news > li', 'main ul > li'],
  'news-feed', 3
);
importList('{{ "/about-notice.html"    | relative_url }}',
  ['#notice-list > li', '#notices ul > li', 'ul#notice > li', 'main ul > li'],
  'notice-feed', 3
);
