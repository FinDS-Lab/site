---
layout: default
title: home
---

<!-- ======================= Home Hero / Intro / News ======================= -->

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
              <a class="btn-primary text-sm" href="{{ '/about-honors.html' | relative_url }}">Honors</a>
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
              <a class="btn-primary text-sm" href="{{ '/about-notice.html'  | relative_url }}">Notice</a>
              <a class="btn-primary text-sm" href="{{ '/archives-news.html' | relative_url }}">News</a>
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

<!-- ====== Page-only JS (헤더/푸터와 분리) ====== -->
<script>
  // 캐러셀
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

  // Notice 간단 로더
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
