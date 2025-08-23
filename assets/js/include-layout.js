// assets/js/include-layout.js

// ---------- Header/ Footer Templates (상대경로 주의: 슬래시 없음) ----------
const headerHTML = `
<div class="sticky-blur border-b border-slate-200">
  <div class="container-root px-4 py-3 flex items-center justify-between gap-4">
    <a href="./" class="flex items-center gap-3 min-w-0">
      <img src="assets/img/brand/logo-finds.png" alt="FINDS Lab Logo"
           class="h-9 w-9 rounded-lg ring-1 ring-slate-200 object-contain bg-white" />
      <div class="leading-tight truncate">
        <div class="text-sm font-extrabold tracking-tight text-[color:var(--accent)]">Financial Data Science Lab.</div>
        <div class="text-[12px] font-semibold text-slate-600">Dongduk Woman's University</div>
      </div>
    </a>

    <nav class="main-nav hidden md:flex">
      <a class="nav-link" href="./"><b>Home</b></a>

      <div class="menu-group" data-menu>
        <a class="nav-link" href="about-introduction.html"><b>About FINDS</b></a>
        <div class="submenu-panel js-submenu" role="menu" aria-label="About submenu">
          <a class="block submenu-item" href="about-introduction.html">Introduction</a>
          <a class="block submenu-item" href="about-vision-area.html">Research Area</a>
          <a class="block submenu-item" href="about-notice.html">Notice</a>
          <a class="block submenu-item" href="about-awards.html">Awards</a>
          <a class="block submenu-item" href="about-location.html">Location</a>
        </div>
      </div>

      <div class="menu-group" data-menu>
        <a class="nav-link" href="members-director.html"><b>Members</b></a>
        <div class="submenu-panel js-submenu" role="menu" aria-label="Members submenu">
          <a class="block submenu-item" href="members-director.html">Director</a>
          <a class="block submenu-item" href="members-current.html">Current Students</a>
          <a class="block submenu-item" href="members-alumni.html">Alumni</a>
          <a class="block submenu-item" href="members-mentorship.html">Mentorship</a>
        </div>
      </div>

      <a class="nav-link" href="publications.html"><b>Publications</b></a>
      <a class="nav-link" href="lectures.html"><b>Lectures</b></a>
      <a class="nav-link" href="projects.html"><b>Projects</b></a>

      <div class="menu-group" data-menu>
        <a class="nav-link" href="archives-news.html"><b>Archives</b></a>
        <div class="submenu-panel js-submenu" role="menu" aria-label="Archives submenu">
          <a class="block submenu-item" href="archives-news.html">News</a>
          <a class="block submenu-item" href="archives-seminar.html">Seminar</a>
          <a class="block submenu-item" href="archives-gallery.html">Gallery</a>
        </div>
      </div>
    </nav>

    <button id="btnMobile" class="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-slate-200 bg-white" aria-label="Open menu">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </button>
  </div>

  <!-- Mobile Nav -->
  <div id="mobileNav" class="md:hidden container-root px-4 pb-3 hidden">
    <div class="grid gap-2 bg-white border border-slate-200 rounded-xl p-3 max-h-[70vh] overflow-y-auto">
      <a class="px-3 py-2 rounded-md hover:bg-slate-50 font-extrabold" href="./">Home</a>
      <div class="px-3 py-2">
        <a class="block font-extrabold mb-1" href="about-introduction.html">About FINDS</a>
        <div class="pl-3 grid text-[14px]">
          <a class="py-1 hover:underline font-bold" href="about-introduction.html">Introduction</a>
          <a class="py-1 hover:underline font-bold" href="about-vision-area.html">Research Area</a>
          <a class="py-1 hover:underline font-bold" href="about-notice.html">Notice</a>
          <a class="py-1 hover:underline font-bold" href="about-awards.html">Awards</a>
          <a class="py-1 hover:underline font-bold" href="about-location.html">Location</a>
        </div>
      </div>
      <div class="px-3 py-2">
        <a class="block font-extrabold mb-1" href="members-director.html">Members</a>
        <div class="pl-3 grid text-[14px]">
          <a class="py-1 hover:underline font-bold" href="members-director.html">Director</a>
          <a class="py-1 hover:underline font-bold" href="members-current.html">Current Students</a>
          <a class="py-1 hover:underline font-bold" href="members-alumni.html">Alumni</a>
          <a class="py-1 hover:underline font-bold" href="members-mentorship.html">Mentorship</a>
        </div>
      </div>
      <a class="px-3 py-2 rounded-md hover:bg-slate-50 font-extrabold" href="publications.html">Publications</a>
      <a class="px-3 py-2 rounded-md hover:bg-slate-50 font-extrabold" href="lectures.html">Lectures</a>
      <a class="px-3 py-2 rounded-md hover:bg-slate-50 font-extrabold" href="projects.html">Projects</a>
      <div class="px-3 py-2">
        <a class="block font-extrabold mb-1" href="archives-news.html">Archives</a>
        <div class="pl-3 grid text-[14px]">
          <a class="py-1 hover:underline font-bold" href="archives-news.html">News</a>
          <a class="py-1 hover:underline font-bold" href="archives-seminar.html">Seminar</a>
          <a class="py-1 hover:underline font-bold" href="archives-gallery.html">Gallery</a>
        </div>
      </div>
    </div>
  </div>
</div>
`;

const footerHTML = `
<div class="border-t border-slate-200 bg-white">
  <div class="container-root px-4 py-8">
    <p class="text-center text-sm text-slate-500 font-semibold footer-links">
      <a class="hover:underline" href="https://scholar.google.com/" target="_blank" rel="noopener">Google Scholar</a> |
      <a class="hover:underline" href="https://www.nrf.re.kr/" target="_blank" rel="noopener">한국연구재단</a>
    </p>
    <p class="mt-4 text-center text-xs text-slate-400">
      Copyright © <span id="current-year"></span> Financial Data Science Lab. All Rights Reserved.
    </p>
  </div>
</div>
`;

// ---------- Inject ----------
(function injectLayout(){
  const headerMount = document.getElementById('site-header');
  const footerMount = document.getElementById('site-footer');
  if(headerMount) headerMount.innerHTML = headerHTML;
  if(footerMount) footerMount.innerHTML = footerHTML;
})();

// ---------- Behavior (menus, mobile toggle, current year) ----------
(function bindHeaderFooterBehavior(){
  // Mobile toggle
  const btnMobile = document.getElementById('btnMobile');
  const mobileNav = document.getElementById('mobileNav');
  btnMobile?.addEventListener('click', ()=> mobileNav.classList.toggle('hidden'));

  // Desktop submenu (hover/focus + delay)
  const MENU_DELAY = 80;
  document.querySelectorAll('.menu-group[data-menu]').forEach(grp=>{
    const panel = grp.querySelector('.js-submenu') || grp.querySelector('.submenu-panel');
    let t;
    const open  = ()=>{ clearTimeout(t); grp.classList.add('open'); };
    const close = ()=>{ t = setTimeout(()=> grp.classList.remove('open'), MENU_DELAY); };
    grp.addEventListener('mouseenter', open);
    grp.addEventListener('mouseleave', close);
    grp.addEventListener('focusin', open);
    grp.addEventListener('focusout', close);
    grp.addEventListener('keydown', (e)=>{ if(e.key==='Escape') grp.classList.remove('open'); });
  });

  // Footer: current year
  const yEl = document.getElementById('current-year');
  if(yEl) yEl.textContent = new Date().getFullYear();
})();
