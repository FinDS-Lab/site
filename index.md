---
layout: default
title: FINDS Lab | Financial Data Science Lab. (Dongduk Woman's University)
---

<!-- Hero -->
<section class="max-w-7xl mx-auto px-4 mt-6">
  <div class="carousel" id="carousel" aria-roledescription="carousel">
    <div class="carousel-track" id="carouselTrack">
      <!-- Slide 1 -->
      <div class="carousel-slide">
        <img class="bg" src="{{ '/assets/img/hero/hero-1.jpg' | relative_url }}" alt="FINDS Lab Hero 1" />
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
        <img class="bg" src="{{ '/assets/img/hero/hero-2.jpg' | relative_url }}" alt="FINDS Lab Hero 2" />
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
        <img class="bg" src="{{ '/assets/img/hero/hero-3.jpg' | relative_url }}" alt="FINDS Lab Hero 3" />
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
<section class="max-w-7xl mx-auto px-4 mt-10 grid lg:grid-cols-3 gap-6 items-center">
  <div class="lg:col-span-1">
    <img src="{{ '/assets/img/brand/logo-finds.png' | relative_url }}" alt="FINDS Lab Logo" class="w-40 h-40 object-contain rounded-xl ring-1 ring-slate-200 bg-white p-3" />
  </div>
  <div class="lg:col-span-2">
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
    <div class="mt-5">
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
