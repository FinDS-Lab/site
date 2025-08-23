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

<!-- Intro -->
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
      timer = setInterval(() => go(idx + 1), 5000);
    }

    dots.forEach((d) => d.addEventListener('click', () => {
      clearInterval(timer);
      go(+d.dataset.dot);
      auto();
    }));

    go(0);
    auto();

    document.addEventListener('visibilitychange', () => {
      if (document.hidden){ clearInterval(timer); }
      else { auto(); }
    });
  })();
</script>

<!-- ====== News/Notice 임베드 로더 (JSON 우선, HTML 폴백) ====== -->
<script>
  function formatDateYMD(iso){
    const d = new Date(iso);
    const y = d.getFullYear();
    const m = String(d.getMonth()+1).padStart(2,'0');
    const dd= String(d.getDate()).padStart(2,'0');
    return `${y}.${m}.${dd}`;
  }

  function renderSimpleList(targetId, items){
    const ul = document.getElementById(targetId);
    if (!ul) return;
    ul.innerHTML = '';
    if (!items || !items.length){
      ul.innerHTML = '<li class="text-sm text-slate-500">게시글이 없습니다.</li>';
      return;
    }
    items.forEach(it=>{
      const li = document.createElement('li');
      li.innerHTML = `
        <a class="block font-bold hover:underline" href="${it.url}">${it.title}</a>
        <div class="text-xs text-slate-500 mt-0.5">${formatDateYMD(it.date)}</div>
      `;
      ul.appendChild(li);
    });
  }

  async function loadNewsFromJSON(){
    const url = '{{ "/assets/data/news.json" | relative_url }}';
    const res = await fetch(url + '?_=' + Date.now(), { cache: 'no-store' });
    if (!res.ok) throw new Error('news.json not found');
    const data = await res.json(); // [{date,title,url,excerpt,...}]
    // 최신순 정렬 후 상위 3개
    const top3 = data
      .slice()
      .sort((a,b)=> new Date(b.date) - new Date(a.date))
      .slice(0,3);
    renderSimpleList('news-feed', top3);
  }

  async function loadNoticesFromJSON(){
    const url = '{{ "/assets/data/notices.json" | relative_url }}';
    const res = await fetch(url + '?_=' + Date.now(), { cache: 'no-store' });
    if (!res.ok) throw new Error('notices.json not found');
    const data = await res.json(); // [{date,title,url}]
    const top3 = data
      .slice()
      .sort((a,b)=> new Date(b.date) - new Date(a.date))
      .slice(0,3);
    renderSimpleList('notice-feed', top3);
  }

  // HTML 폴백: archives-news.html 구조 지원(#board .board-row .sbj)
  async function loadNewsFromHTML(){
    const target = document.getElementById('news-feed');
    if (!target) return;
    try{
      const res = await fetch('{{ "/archives-news.html" | relative_url }}', { cache: 'no-store' });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const html = await res.text();
      const doc  = new DOMParser().parseFromString(html, 'text/html');

      // 보드 행에서 제목/링크/날짜 추출
      const rows = Array.from(doc.querySelectorAll('#board .board-row'));
      if (!rows.length){
        // 구형 선택자 폴백들
        const legacy = Array.from(doc.querySelectorAll('#news-list > li, #news ul > li, ul#news > li, main ul > li'));
        if (!legacy.length){
          renderSimpleList('news-feed', []);
          return;
        }
        // 구형은 그 상태로 최근 3개만 표시(역순)
        const items = legacy.slice(-3).reverse().map(li=>{
          const a = li.querySelector('a');
          return { title:a ? a.textContent.trim() : li.textContent.trim(), url:a ? a.getAttribute('href') : '#', date:new Date().toISOString().slice(0,10) };
        });
        renderSimpleList('news-feed', items);
        return;
      }

      const items = rows.map(row=>{
        const a   = row.querySelector('.sbj a, a.sbj, .sbj'); // 제목 링크
        const ym  = row.querySelector('.date-ym')?.textContent?.trim() || '';
        const dd  = row.querySelector('.date-d')?.textContent?.trim() || '';
        const date= (ym && dd) ? ym.replace('.', '-') + '-' + dd.padStart(2,'0') : '';
        return {
          title: a ? a.textContent.trim() : 'Untitled',
          url: a ? a.getAttribute('href') : '#',
          date: date ? new Date(date.replace('.', '-')).toISOString().slice(0,10) : new Date().toISOString().slice(0,10)
        };
      })
      .sort((a,b)=> new Date(b.date) - new Date(a.date))
      .slice(0,3);

      renderSimpleList('news-feed', items);
    }catch(e){
      console.error(e);
      renderSimpleList('news-feed', []);
    }
  }

  // Notice HTML 폴백(구조 모르면 a 태그 3개만 뽑기)
  async function loadNoticesFromHTML(){
    const target = document.getElementById('notice-feed');
    if (!target) return;
    try{
      const res = await fetch('{{ "/about-notice.html" | relative_url }}', { cache: 'no-store' });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const html = await res.text();
      const doc  = new DOMParser().parseFromString(html, 'text/html');

      // heuristics: 본문 내 공지 리스트의 링크 3개
      const anchors = Array.from(doc.querySelectorAll('main a, #content a, article a, .board-row .sbj a'))
                        .filter(a=> a.getAttribute('href') && a.textContent.trim())
                        .slice(0,3);
      const items = anchors.map(a=>({
        title: a.textContent.trim(),
        url: a.getAttribute('href'),
        date: new Date().toISOString().slice(0,10)
      }));
      renderSimpleList('notice-feed', items);
    }catch(e){
      console.error(e);
      renderSimpleList('notice-feed', []);
    }
  }

  (async function boot(){
    // JSON 우선
    let newsOk = false, noticeOk = false;
    try{ await loadNewsFromJSON(); newsOk = true; }catch(e){ /* fallback 아래서 */ }
    try{ await loadNoticesFromJSON(); noticeOk = true; }catch(e){ /* fallback 아래서 */ }

    // 폴백: HTML 파싱
    if (!newsOk)   await loadNewsFromHTML();
    if (!noticeOk) await loadNoticesFromHTML();

    // 로컬 파일 열람시 차단 메시지
    if (location.protocol === 'file:'){
      document.getElementById('news-feed').innerHTML   = '<li class="text-sm text-amber-600">로컬 파일로 열면 임베드가 차단됩니다. 로컬 서버에서 접속해 주세요.</li>';
      document.getElementById('notice-feed').innerHTML = '<li class="text-sm text-amber-600">로컬 파일로 열면 임베드가 차단됩니다. 로컬 서버에서 접속해 주세요.</li>';
    }
  })();
</script>
