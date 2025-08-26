---
layout: default
title: FINDS Lab | Financial Data Science Lab. (Dongduk Women's University)
---

<!-- ======================= Sticky Header ======================= -->
<div class="sticky-blur border-b border-slate-200">
  <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
    <a href="{{ '/' | relative_url }}" class="flex items-center gap-3">
      <img src="{{ '/assets/img/brand/logo-finds.png' | relative_url }}" alt="FINDS Lab Logo" class="h-9 w-9 rounded-lg ring-1 ring-slate-200 object-contain bg-white" />
      <div class="leading-tight">
        <div class="text-sm font-extrabold tracking-tight" style="color:var(--accent)">Financial Data Science Lab.</div>
        <div class="text-[12px] font-semibold text-slate-600">Dongduk Women's University</div>
      </div>
    </a>

    <nav class="hidden md:flex items-center gap-6">
      <a class="nav-link" href="{{ '/' | relative_url }}"><b>Home</b></a>

      <div class="relative menu-group" data-menu>
        <a class="nav-link" href="{{ '/about-introduction.html' | relative_url }}"><b>About FINDS</b></a>
        <div class="absolute top-full left-0 bg-white border border-slate-200 rounded-xl mt-1 py-2 submenu-panel shadow-xl js-submenu">
          <a class="block submenu-item hover:bg-slate-50" href="{{ '/about-introduction.html'  | relative_url }}">Introduction</a>
          <a class="block submenu-item hover:bg-slate-50" href="{{ '/about-vision-area.html'   | relative_url }}">Research Area</a>
          <a class="block submenu-item hover:bg-slate-50" href="{{ '/about-awards.html'        | relative_url }}">Awards</a>
          <a class="block submenu-item hover:bg-slate-50" href="{{ '/about-location.html'      | relative_url }}">Location</a>
        </div>
      </div>

      <div class="relative menu-group" data-menu>
        <a class="nav-link" href="{{ '/members-director.html' | relative_url }}"><b>Members</b></a>
        <div class="absolute top-full left-0 bg-white border border-slate-200 rounded-xl mt-1 py-2 submenu-panel shadow-xl js-submenu">
          <a class="block submenu-item hover:bg-slate-50" href="{{ '/members-director.html'   | relative_url }}">Director</a>
          <a class="block submenu-item hover:bg-slate-50" href="{{ '/members-current.html'    | relative_url }}">Current Students</a>
          <a class="block submenu-item hover:bg-slate-50" href="{{ '/members-alumni.html'     | relative_url }}">Alumni</a>
        </div>
      </div>

      <a class="nav-link" href="{{ '/publications.html' | relative_url }}"><b>Publications</b></a>
      <a class="nav-link" href="{{ '/lectures.html'     | relative_url }}"><b>Lectures</b></a>
      <a class="nav-link" href="{{ '/projects.html'     | relative_url }}"><b>Projects</b></a>

      <div class="relative menu-group" data-menu>
        <a class="nav-link" href="{{ '/archives-news.html' | relative_url }}"><b>Archives</b></a>
        <div class="absolute top-full left-0 bg-white border border-slate-200 rounded-xl mt-1 py-2 submenu-panel shadow-xl js-submenu">
          <a class="block submenu-item hover:bg-slate-50" href="{{ '/archives-news.html'    | relative_url }}">News</a>
          <a class="block submenu-item hover:bg-slate-50" href="{{ '/about-notice.html'     | relative_url }}">Notice</a>
          <a class="block submenu-item hover:bg-slate-50" href="{{ '/archives-seminar.html' | relative_url }}">Seminar</a>
          <a class="block submenu-item hover:bg-slate-50" href="{{ '/archives-gallery.html' | relative_url }}">Gallery</a>
        </div>
      </div>
    </nav>

    <div class="flex items-center gap-2">
      <button id="btnMobile" class="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-slate-200 bg-white" aria-label="Open menu">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
    </div>
  </div>

  <!-- Mobile Nav -->
  <div id="mobileNav" class="md:hidden max-w-7xl mx-auto px-4 pb-3 hidden">
    <div class="grid gap-2 bg-white border border-slate-200 rounded-xl p-3 max-h-[70vh] overflow-y-auto">
      <a class="px-3 py-2 rounded-md hover:bg-slate-50 font-extrabold mobile-link" href="{{ '/' | relative_url }}">Home</a>

      <div class="px-3 py-2">
        <a class="block font-extrabold mb-1 mobile-link" href="{{ '/about-introduction.html' | relative_url }}">About FINDS</a>
        <div class="pl-3 grid text-[14px]">
          <a class="py-1 hover:underline font-bold mobile-link" href="{{ '/about-introduction.html' | relative_url }}">Introduction</a>
          <a class="py-1 hover:underline font-bold mobile-link" href="{{ '/about-vision-area.html'  | relative_url }}">Research Area</a>
          <a class="py-1 hover:underline font-bold mobile-link" href="{{ '/about-awards.html'       | relative_url }}">Awards</a>
          <a class="py-1 hover:underline font-bold mobile-link" href="{{ '/about-location.html'     | relative_url }}">Location</a>
        </div>
      </div>

      <div class="px-3 py-2">
        <a class="block font-extrabold mb-1 mobile-link" href="{{ '/members-director.html' | relative_url }}">Members</a>
        <div class="pl-3 grid text-[14px]">
          <a class="py-1 hover:underline font-bold mobile-link" href="{{ '/members-director.html'   | relative_url }}">Director</a>
          <a class="py-1 hover:underline font-bold mobile-link" href="{{ '/members-current.html'    | relative_url }}">Current Students</a>
          <a class="py-1 hover:underline font-bold mobile-link" href="{{ '/members-alumni.html'     | relative_url }}">Alumni</a>
        </div>
      </div>

      <a class="px-3 py-2 rounded-md hover:bg-slate-50 font-extrabold mobile-link" href="{{ '/publications.html' | relative_url }}">Publications</a>
      <a class="px-3 py-2 rounded-md hover:bg-slate-50 font-extrabold mobile-link" href="{{ '/lectures.html'     | relative_url }}">Lectures</a>
      <a class="px-3 py-2 rounded-md hover:bg-slate-50 font-extrabold mobile-link" href="{{ '/projects.html'     | relative_url }}">Projects</a>

      <div class="px-3 py-2">
        <a class="block font-extrabold mb-1 mobile-link" href="{{ '/archives-news.html' | relative_url }}">Archives</a>
        <div class="pl-3 grid text-[14px]">
          <a class="py-1 hover:underline font-bold mobile-link" href="{{ '/archives-news.html'    | relative_url }}">News</a>
          <a class="py-1 hover:underline font-bold mobile-link" href="{{ '/about-notice.html'     | relative_url }}">Notice</a>
          <a class="py-1 hover:underline font-bold mobile-link" href="{{ '/archives-seminar.html' | relative_url }}">Seminar</a>
          <a class="py-1 hover:underline font-bold mobile-link" href="{{ '/archives-gallery.html' | relative_url }}">Gallery</a>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Hover Color Styles (Header) -->
<style>
  .sticky-blur{position:sticky;top:0;background:rgba(255,255,255,.8);backdrop-filter:saturate(120%) blur(10px);z-index:50}
  .submenu-panel{display:none;min-width:220px}
  .menu-group:hover .submenu-panel{display:block}
  .nav-link, .submenu-item, .mobile-link { color:#1f2937; transition:color .2s ease; }
  .nav-link:hover, .submenu-item:hover, .mobile-link:hover { color:rgb(214,177,77); }
</style>

<!-- ======================= Home Hero / Intro / News ======================= -->

<!-- ====== 홈 히어로 캐러셀 전용 스타일 ====== -->
<style>
  .carousel{position:relative;overflow:hidden;border-radius:1.25rem;background:#0b1020}
  .carousel-track{display:flex;transition:transform .6s cubic-bezier(.2,.6,.2,1)}
  .carousel-slide{min-width:100%;height:520px;position:relative;background:#0b1020}
  .carousel-slide img.bg,
  .carousel-slide video.bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}
  .carousel-caption{position:absolute;inset:0;display:flex;align-items:center;background:linear-gradient(90deg,rgba(0,0,0,.55),rgba(0,0,0,.15) 55%,rgba(0,0,0,0));color:#fff;padding:0 1rem}
  .dot{width:10px;height:10px;border-radius:9999px;background:#e5e7eb}
  .dot.active{background:var(--accent, #ac0e0e)}
  @media (max-width: 768px){ .carousel-slide{height:420px} }

  /* 홈 하단 News/Notice 패널 */
  .home-panel{background:#fff;border:1px solid #e5e7eb;border-radius:1rem;padding:1rem}
  .home-panel h4{margin:0}
  .line-1{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .min-w-0{min-width:0} /* grid overflow 방지 */

  /* 유틸(버튼/태그/카드) — 전역에 없으면 임시 정의 */
  .btn-primary{display:inline-flex;align-items:center;justify-content:center;padding:.55rem .9rem;border-radius:.75rem;background:var(--accent,#ac0e0e);color:#fff;font-weight:700}
  .btn-primary:hover{opacity:.9}
  .tag-gold{display:inline-block;font-size:.75rem;font-weight:800;letter-spacing:.02em;color:#111;background:linear-gradient(90deg,#f8e7b0,#e2c36e);padding:.25rem .5rem;border-radius:.5rem}
  .card{background:#fff;border:1px solid #e5e7eb;border-radius:1rem;padding:1rem}
  .warm-underline{position:relative}
  .warm-underline::after{content:'';position:absolute;left:0;right:0;bottom:-2px;height:2px;background:rgb(214,177,77);opacity:.6;transform:scaleX(0);transform-origin:left;transition:transform .2s}
  .warm-underline:hover::after{transform:scaleX(1)}
</style>

<!-- Hero -->
<section class="max-w-7xl mx-auto px-4 mt-6">
  <div class="carousel" id="carousel" aria-roledescription="carousel">
    <div class="carousel-track" id="carouselTrack">
      <!-- Slide 1 -->
      <div class="carousel-slide">
        <img class="bg" src="{{ '/assets/img/hero/slide-1.jpg' | relative_url }}" alt="FINDS Lab Hero 1" loading="eager" />
        <div class="carousel-caption">
          <div class="max-w-xl px-6">
            <span class="tag-gold">Financial Data Science Lab.</span>
            <h1 class="mt-3 text-[20px] md:text-[30px] lg:text-[40px] font-extrabold leading-tight ko-tight">
              Towards Data-Inspired Financial Management
            </h1>
            <div class="mt-4 flex gap-3">
              <a class="btn-primary text-sm" href="{{ '/about-introduction.html' | relative_url }}">Introduction</a>
              <a class="btn-primary text-sm" href="{{ '/about-awards.html' | relative_url }}">Awards</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 2 -->
      <div class="carousel-slide">
        <img class="bg" src="{{ '/assets/img/hero/slide-2.jpg' | relative_url }}" alt="FINDS Lab Hero 2" loading="lazy" />
        <div class="carousel-caption">
          <div class="max-w-xl px-6">
            <span class="tag-gold">Financial Data Science Lab.</span>
            <h2 class="mt-3 text-[20px] md:text-[30px] lg:text-[40px] font-extrabold leading-tight ko-tight">
              Accomplishments
            </h2>
            <div class="mt-4 flex gap-3">
              <a class="btn-primary text-sm" href="{{ '/publications.html' | relative_url }}">Publications</a>
              <a class="btn-primary text-sm" href="{{ '/lectures.html'     | relative_url }}">Lectures</a>
              <a class="btn-primary text-sm" href="{{ '/projects.html'     | relative_url }}">Projects</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 3 -->
      <div class="carousel-slide">
        <img class="bg" src="{{ '/assets/img/hero/slide-3.jpg' | relative_url }}" alt="FINDS Lab Hero 3" loading="lazy" />
        <div class="carousel-caption">
          <div class="max-w-xl px-6">
            <span class="tag-gold">Financial Data Science Lab.</span>
            <h2 class="mt-3 text-[20px] md:text-[30px] lg:text-[40px] font-extrabold leading-tight ko-tight">
              Updates
            </h2>
            <div class="mt-4 flex gap-3">
              <a class="btn-primary text-sm" href="{{ '/about-notice.html'     | relative_url }}">Notice</a>
              <a class="btn-primary text-sm" href="{{ '/archives-news.html'    | relative_url }}">News</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Dots -->
    <div class="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
      <button class="dot" data-dot="0" aria-label="slide 1"></button>
      <button class="dot" data-dot="1" aria-label="slide 2"></button>
      <button class="dot" data-dot="2" aria-label="slide 3"></button>
    </div>
  </div>
</section>

<!-- Intro -->
<section class="max-w-7xl mx-auto px-4 mt-10 grid lg:grid-cols-[auto,1fr] gap-4 items-center">
  <div>
    <img src="{{ '/assets/img/brand/logo-finds.png' | relative_url }}"
         alt="FINDS Lab Logo"
         class="w-40 h-40 object-contain rounded-xl ring-1 ring-slate-200 bg-white p-3" />
  </div>

  <div>
    <p class="text-2xl font-extrabold tracking-tight" style="color:var(--accent)">Dongduk Women's University</p>

    <h3 class="text-3xl mt-1">
      <span class="font-extrabold" style="color:rgb(214,177,77)">FINDS Lab.</span>
      <span class="font-extrabold">(Fin</span><span class="font-light">ancial</span>
      <span class="font-extrabold">D</span><span class="font-light">ata</span>
      <span class="font-extrabold">S</span><span class="font-light">cience</span>
      <span class="font-extrabold"> Laboratory)</span>
    </h3>

    <p class="mt-3 text-[15px] leading-7 text-slate-700">
      동덕여자대학교 경영대학 경영융합학부 <b>금융데이터사이언스 연구실</b> 홈페이지입니다.
    </p>
  </div>
</section>

<!-- News & Notice -->
<section class="max-w-7xl mx-auto px-4 mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
  <!-- News: 최신 3개 -->
  <div class="card">
    <div class="flex items-center justify-between">
      <h4 class="text-xl font-extrabold">News</h4>
      <a class="warm-underline font-bold" href="{{ '/archives-news.html' | relative_url }}">More</a>
    </div>

    {% assign all = site.pages | concat: site.posts %}
    {% assign all_sorted = all | sort: 'date' | reverse %}
    {% assign shown = 0 %}
    <ul class="mt-4 space-y-2">
      {% for post in all_sorted %}
        {% if post.url and post.date and post.url contains '/news/' and shown < 3 %}
          <li class="text-[14px] leading-6">
            <a class="font-bold hover:underline line-1" href="{{ post.url | relative_url }}">{{ post.title }}</a>
            <span class="ml-2 text-slate-500 text-[12px]">· {{ post.date | date: "%Y.%m.%d" }}</span>
          </li>
          {% assign shown = shown | plus: 1 %}
        {% endif %}
      {% endfor %}
      {% if shown == 0 %}
        <li class="text-sm text-slate-500">게시글이 없습니다.</li>
      {% endif %}
    </ul>
  </div>

  <!-- Notice -->
  <div class="home-panel min-w-0">
    <div class="flex items-center justify-between gap-3">
      <h4 class="text-xl font-extrabold m-0">Notice</h4>
      <a class="warm-underline font-bold shrink-0" href="{{ '/about-notice.html' | relative_url }}">More</a>
    </div>
    <ul id="notice-feed" class="mt-4 space-y-2">
      <li class="text-sm text-slate-500">불러오는 중…</li>
    </ul>
  </div>
</section>

<!-- ====== Header JS (submenu & mobile toggle) ====== -->
<script>
  // Desktop submenu: show on hover/focus, hide on leave
  document.querySelectorAll('[data-menu]').forEach(group => {
    const panel = group.querySelector('.js-submenu');
    if(!panel) return;
    group.addEventListener('mouseenter', () => panel.style.display = 'block');
    group.addEventListener('mouseleave', () => panel.style.display = 'none');
    group.addEventListener('focusin',   () => panel.style.display = 'block');
    group.addEventListener('focusout',  (e) => { if(!group.contains(e.relatedTarget)) panel.style.display = 'none'; });
  });

  // Mobile toggle
  const btnMobile = document.getElementById('btnMobile');
  const mobileNav = document.getElementById('mobileNav');
  if (btnMobile && mobileNav){
    btnMobile.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
    });
  }
</script>

<!-- ====== 캐러셀 전용 JS ====== -->
<script>
  (function(){
    const track = document.getElementById('carouselTrack');
    const dots  = Array.from(document.querySelectorAll('[data-dot]'));
    if (!track || !dots.length) return;

    let idx = 0;
    const total = track.children.length;
    let timer;

    function go(i){
      idx = (i + total) % total;
      track.style.transform = `translateX(-${idx * 100}%)`;
      dots.forEach((d, j) => d.classList.toggle('active', j === idx));
    }

    function auto(){ timer = setInterval(() => go(idx + 1), 5000); }

    dots.forEach((d) => d.addEventListener('click', () => {
      clearInterval(timer); go(+d.dataset.dot); auto();
    }));

    go(0); auto();

    document.addEventListener('visibilitychange', () => {
      if (document.hidden){ clearInterval(timer); } else { auto(); }
    });
  })();
</script>

<!-- ====== Notice 간단 로더 ====== -->
<script>
  (async function(){
    const target = document.getElementById('notice-feed');
    if (!target) return;

    try{
      const res = await fetch('{{ "/about-notice.html" | relative_url }}', { cache:'no-store' });
      if(!res.ok) throw new Error(res.status);
      const html = await res.text();
      const doc  = new DOMParser().parseFromString(html, 'text/html');

      const anchors = Array.from(doc.querySelectorAll('main a, article a, .board-row .sbj a, #content a'))
        .filter(a => a.getAttribute('href') && a.textContent.trim())
        .slice(0,3);

      target.innerHTML = '';
      if (anchors.length === 0){
        target.innerHTML = '<li class="text-sm text-slate-500">게시글이 없습니다.</li>';
        return;
      }

      anchors.forEach(a => {
        const li = document.createElement('li');
        li.className = 'text-[14px] leading-6';
        li.innerHTML = `<a class="font-bold hover:underline line-1" href="${a.getAttribute('href')}">${a.textContent.trim()}</a>`;
        target.appendChild(li);
      });
    }catch(e){
      console.error(e);
      target.innerHTML = '<li class="text-sm text-slate-500">불러오기 실패</li>';
    }
  })();
</script>
