---
layout: default
title: FINDS Lab | Financial Data Science Lab. (Dongduk Woman's University)
---

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

  /* CLS(흔들림) 최소화: 높이 고정(모바일에서만 낮춤) */
  @media (max-width: 768px){
    .carousel-slide{height:420px}
  }
</style>

<!-- Hero -->
<section class="max-w-7xl mx-auto px-4 mt-6">
  <div class="carousel" id="carousel" aria-roledescription="carousel">
    <div class="carousel-track" id="carouselTrack">
      <!-- Slide 1 -->
      <div class="carousel-slide">
        <!-- 여기에 '슬라이드1' 배경 이미지 경로 -->
        <img class="bg" src="{{ '/assets/img/hero/slide-1.jpg' | relative_url }}" alt="FINDS Lab Hero 1" loading="eager" />
        <div class="carousel-caption">
          <div class="max-w-xl px-6">
            <span class="tag-gold">Financial Data Science Lab.</span>
            <h1 class="mt-3 text-[20px] md:text-[30px] lg:text-[40px] font-extrabold leading-tight ko-tight">
              Towards Data-Inspired Financial Management
            </h1>
            <div class="mt-4 flex gap-3">
              <a class="btn-primary text-sm" href="{{ '/about-introduction.html' | relative_url }}">Read More</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 2 -->
      <div class="carousel-slide">
        <!-- 여기에 '슬라이드2' 배경 이미지 경로 -->
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
        <!-- 여기에 '슬라이드3' 배경 이미지 경로 -->
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
              <a class="btn-primary text-sm" href="{{ '/archives-seminar.html' | relative_url }}">Seminar</a>
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

<!-- Intro (교체본) -->
<section class="max-w-7xl mx-auto px-4 mt-10 grid lg:grid-cols-[auto,1fr] gap-4 items-center">
  <div>
    <img src="{{ '/assets/img/brand/logo-finds.png' | relative_url }}"
         alt="FINDS Lab Logo"
         class="w-40 h-40 object-contain rounded-xl ring-1 ring-slate-200 bg-white p-3" />
  </div>

  <div>
    <p class="text-2xl font-extrabold tracking-tight" style="color:var(--accent)">Dongduk Woman's University</p>

    <h3 class="text-3xl mt-1">
      <span class="font-extrabold">Fin</span><span class="font-light">ancial</span>
      <span class="font-extrabold">D</span><span class="font-light">ata</span>
      <span class="font-extrabold">S</span><span class="font-light">cience</span>
      <span class="font-extrabold"> Lab. - </span>
      <span class="font-extrabold" style="color:rgb(214,177,77)">FINDS Lab.</span>
    </h3>

    <p class="mt-3 text-[15px] leading-7 text-slate-700">
      동덕여자대학교 경영학과 <b>금융데이터사이언스 연구실 (Financial Data Science)</b> 홈페이지입니다.
    </p>

    <div class="mt-4">
      <a class="btn-primary text-sm" href="{{ '/about-introduction.html' | relative_url }}">Read More</a>
    </div>
  </div>
</section>

<!-- News & Notice -->
<section class="max-w-7xl mx-auto px-4 mt-12 grid grid-cols-1 gap-6">
  <div class="card">
    <div class="flex items-center justify-between">
      <h4 class="text-xl font-extrabold">News</h4>
      <a class="warm-underline font-bold" href="{{ '/archives-news.html' | relative_url }}">More</a>
    </div>
    <ul id="news-feed" class="mt-4 space-y-3">
      <li class="text-sm text-slate-500">불러오는 중…</li>
    </ul>
  </div>

  <div class="card">
    <div class="flex items-center justify-between">
      <h4 class="text-xl font-extrabold">Notice</h4>
      <a class="warm-underline font-bold" href="{{ '/about-notice.html' | relative_url }}">More</a>
    </div>
    <ul id="notice-feed" class="mt-4 space-y-3">
      <li class="text-sm text-slate-500">불러오는 중…</li>
    </ul>
  </div>
</section>

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

    function auto(){
      timer = setInterval(() => go(idx + 1), 5000); // 5초마다 자동 전환
    }

    dots.forEach((d) => d.addEventListener('click', () => {
      clearInterval(timer);
      go(+d.dataset.dot);
      auto();
    }));

    // 초기 진입
    go(0);
    auto();

    // 탭 전환 시 타이머 일시정지/재개 (배터리/퍼포먼스 최적화)
    document.addEventListener('visibilitychange', () => {
      if (document.hidden){ clearInterval(timer); }
      else { auto(); }
    });
  })();
</script>

<!-- ====== News/Notice 임베드 로더(그대로 유지 가능) ====== -->
<script>
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
  
      // 🔥 최근 3개만 보이게 (역순 정렬 포함)
      items.slice(-limit).reverse().forEach((li) => 
        target.appendChild(li.cloneNode(true))
      );
  
    } catch (err) {
      console.error('임베드 오류:', err);
      target.innerHTML = '<li class="text-sm text-slate-500">불러오기 실패</li>';
    }
  }

  // Load lists
  importList('{{ "/archives-news.html" | relative_url }}',
    ['#news-list > li', '#news ul > li', 'ul#news > li', 'main ul > li'],
    'news-feed', 3
  );
  importList('{{ "/about-notice.html" | relative_url }}',
    ['#notice-list > li', '#notices ul > li', 'ul#notice > li', 'main ul > li'],
    'notice-feed', 3
  );
</script>
