---
layout: default
title: Home
---

<!-- Hero Section -->
<style>
  .carousel{position:relative;overflow:hidden;border-radius:1.25rem;background:#0b1020}
  .carousel-track{display:flex;transition:transform .6s cubic-bezier(.2,.6,.2,1)}
  .carousel-slide{min-width:100%;height:520px;position:relative;background:#0b1020}
  .carousel-slide img.bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}
  .carousel-caption{position:absolute;inset:0;display:flex;align-items:center;background:linear-gradient(90deg,rgba(0,0,0,.55),rgba(0,0,0,.15) 55%,rgba(0,0,0,0));color:#fff;padding:0 1rem}
  .dot{width:10px;height:10px;border-radius:9999px;background:#e5e7eb;cursor:pointer;border:none}
  .dot.active{background:#ac0e0e}
  @media (max-width: 768px){ .carousel-slide{height:420px} }
  .btn-primary{display:inline-flex;align-items:center;justify-content:center;padding:.55rem .9rem;border-radius:.75rem;background:#ac0e0e;color:#fff;font-weight:700}
  .btn-primary:hover{opacity:.9}
  .tag-gold{display:inline-block;font-size:.75rem;font-weight:800;letter-spacing:.02em;color:#111;background:linear-gradient(90deg,#f8e7b0,#e2c36e);padding:.25rem .5rem;border-radius:.5rem}
  .card{background:#fff;border:1px solid #e5e7eb;border-radius:1rem;padding:1rem}
  .warm-underline{position:relative}
  .warm-underline::after{content:'';position:absolute;left:0;right:0;bottom:-2px;height:2px;background:rgb(214,177,77);opacity:.6;transform:scaleX(0);transform-origin:left;transition:transform .2s}
  .warm-underline:hover::after{transform:scaleX(1)}
</style>

<section class="max-w-7xl mx-auto px-4 mt-6">
  <div class="carousel" id="carousel">
    <div class="carousel-track" id="carouselTrack">
      <div class="carousel-slide">
        <img class="bg" src="{{ '/assets/img/hero/slide-1.jpg' | relative_url }}" alt="FINDS Lab Hero 1" loading="eager">
        <div class="carousel-caption">
          <div class="max-w-xl px-6">
            <span class="tag-gold">Financial Data Science Lab.</span>
            <h1 class="mt-3 text-[20px] md:text-[30px] lg:text-[40px] font-extrabold leading-tight">
              Towards Data-Inspired Financial Management
            </h1>
            <div class="mt-4 flex gap-3">
              <a class="btn-primary text-sm" href="{{ '/about-introduction.html' | relative_url }}">Introduction</a>
              <a class="btn-primary text-sm" href="{{ '/about-honors.html' | relative_url }}">Honors</a>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-slide">
        <img class="bg" src="{{ '/assets/img/hero/slide-2.jpg' | relative_url }}" alt="FINDS Lab Hero 2" loading="lazy">
        <div class="carousel-caption">
          <div class="max-w-xl px-6">
            <span class="tag-gold">Financial Data Science Lab.</span>
            <h2 class="mt-3 text-[20px] md:text-[30px] lg:text-[40px] font-extrabold leading-tight">
              Accomplishments
            </h2>
            <div class="mt-4 flex gap-3">
              <a class="btn-primary text-sm" href="{{ '/publications.html' | relative_url }}">Publications</a>
              <a class="btn-primary text-sm" href="{{ '/lectures.html' | relative_url }}">Lectures</a>
              <a class="btn-primary text-sm" href="{{ '/projects.html' | relative_url }}">Projects</a>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-slide">
        <img class="bg" src="{{ '/assets/img/hero/slide-3.jpg' | relative_url }}" alt="FINDS Lab Hero 3" loading="lazy">
        <div class="carousel-caption">
          <div class="max-w-xl px-6">
            <span class="tag-gold">Financial Data Science Lab.</span>
            <h2 class="mt-3 text-[20px] md:text-[30px] lg:text-[40px] font-extrabold leading-tight">
              Updates
            </h2>
            <div class="mt-4 flex gap-3">
              <a class="btn-primary text-sm" href="{{ '/archives-notice.html' | relative_url }}">Notice</a>
              <a class="btn-primary text-sm" href="{{ '/archives-news.html' | relative_url }}">News</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
      <button class="dot active" data-dot="0" aria-label="slide 1"></button>
      <button class="dot" data-dot="1" aria-label="slide 2"></button>
      <button class="dot" data-dot="2" aria-label="slide 3"></button>
    </div>
  </div>
</section>

<!-- Intro -->
<section class="max-w-7xl mx-auto px-4 mt-10 grid lg:grid-cols-[auto,1fr] gap-4 items-center">
  <div>
    <img src="{{ '/assets/img/brand/logo-finds.png' | relative_url }}" alt="FINDS Lab Logo" 
         class="w-40 h-40 object-contain rounded-xl ring-1 ring-slate-200 bg-white p-3">
  </div>
  <div>
    <p class="text-2xl font-extrabold tracking-tight" style="color:#ac0e0e">Dongduk Women's University</p>
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
  <div class="card">
    <div class="flex items-center justify-between">
      <h4 class="text-xl font-extrabold">News</h4>
      <a class="warm-underline font-bold" href="{{ '/archives-news.html' | relative_url }}">More</a>
    </div>
    <ul class="mt-4 space-y-2">
      {% if site.news %}
        {% assign sorted_news = site.news | sort: 'date' | reverse %}
        {% for post in sorted_news limit:3 %}
        <li class="text-[14px] leading-6">
          <a class="font-bold hover:underline" href="{{ post.url | relative_url }}">{{ post.title }}</a>
          <span class="ml-2 text-slate-500 text-[12px]">· {{ post.date | date: "%Y.%m.%d" }}</span>
        </li>
        {% endfor %}
      {% else %}
        <li class="text-sm text-slate-500">게시글이 없습니다.</li>
      {% endif %}
    </ul>
  </div>
  
  <div class="card">
    <div class="flex items-center justify-between">
      <h4 class="text-xl font-extrabold">Notice</h4>
      <a class="warm-underline font-bold" href="{{ '/archives-notice.html' | relative_url }}">More</a>
    </div>
    <ul class="mt-4 space-y-2">
      {% if site.notice %}
        {% assign sorted_notice = site.notice | sort: 'date' | reverse %}
        {% for post in sorted_notice limit:3 %}
        <li class="text-[14px] leading-6">
          <a class="font-bold hover:underline" href="{{ post.url | relative_url }}">{{ post.title }}</a>
          <span class="ml-2 text-slate-500 text-[12px]">· {{ post.date | date: "%Y.%m.%d" }}</span>
        </li>
        {% endfor %}
      {% else %}
        <li class="text-sm text-slate-500">게시글이 없습니다.</li>
      {% endif %}
    </ul>
  </div>
</section>

<div class="intro-section" style="padding:40px;background:linear-gradient(135deg,rgba(214,177,77,0.1),rgba(172,14,14,0.05));border-radius:12px;margin:40px auto;max-width:1200px;text-align:center;">
  <h2 style="color:#ac0e0e;margin-bottom:20px;">Welcome to FINDS Lab.</h2>
  <p>The Financial Data Science Laboratory at Dongduk Women's University conducts cutting-edge research at the intersection of finance and data science.</p>
</div>

<script>
  // Carousel
  (function(){
    const track = document.getElementById('carouselTrack');
    const dots = Array.from(document.querySelectorAll('[data-dot]'));
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
  })();
</script>
```
