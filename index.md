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
            <span class="tag-gold">FINDS Lab.</span>
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
            <span class="tag-gold">FINDS Lab.</span>
            <h2 class="mt-3 text-[20px] md:text-[30px] lg:text-[40px] font-extrabold leading-tight ko-tight">
              Accomplishments
            </h2>
            <div class="mt-4 flex gap-3">
              <a class="btn-primary text-sm" href="{{ '/publications.html' | relative_url }}">Publications</a>
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
            <span class="tag-gold">FINDS Lab.</span>
            <h2 class="mt-3 text-[20px] md:text-[30px] lg:text-[40px] font-extrabold leading-tight ko-tight">
              Updates
            </h2>
            <div class="mt-4 flex gap-3">
              <a class="btn-primary text-sm" href="{{ '/archives-notice.html' | relative_url }}">Notices</a>
              <a class="btn-primary text-sm" href="{{ '/archives-news.html'  | relative_url }}">News</a>
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
    <p class="text-2xl font-extrabold tracking-tight" style="color:rgb(172,14,14)">Dongduk Women's University</p>

    <h3 class="text-3xl mt-1">
      <span class="font-extrabold" style="color:rgb(214,177,77)">FINDS Lab.</span>
      <span class="ml-1 inline-block align-baseline text-[18px] md:text-[20px]" style="color:rgb(0,0,0)">
        (<span class="font-extrabold">Fin</span><span class="font-light">ancial</span>
        <span class="font-extrabold">D</span><span class="font-light">ata</span>
        <span class="font-extrabold">S</span><span class="font-light">cience</span>
        <span class="font-extrabold"> Laboratory</span>)
      </span>
    </h3>

    <p class="mt-3 text-[15px] leading-7 text-slate-700">
      동덕여자대학교 경영대학 경영융합학부 <b>금융데이터사이언스 연구실</b> 홈페이지입니다.
    </p>
  </div>
</section>

<!-- ===== News & Notices (archive-style rows) ===== -->
<!-- 동일 포맷을 위해 board-row 스타일(archives와 동일)을 간단히 포함 -->
<style>
  .date-box{display:flex;flex-direction:column;align-items:center;justify-content:center;width:64px}
  .date-d{font-weight:900;font-size:22px;line-height:1;color:#111827}
  .date-ym{font-weight:800;font-size:12px;color:#6b7280}
  .line-clamp-2{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
  .board-row{display:grid;grid-template-columns:88px 1fr 84px;gap:14px;align-items:center;padding:14px 16px;border-bottom:1px solid #e5e7eb}
  @media (max-width:640px){
    .board-row{grid-template-columns:64px 1fr;gap:10px}
    .board-row .btn-cell{grid-column:1/-1;justify-self:end}
  }
  .btn-more{display:inline-flex;align-items:center;justify-content:center;border:1px solid #e5e7eb;border-radius:.6rem;padding:.35rem .6rem;font-weight:800;font-size:12px}
  .btn-more:hover{background:#f8fafc}
  .sbj a:hover{text-decoration:underline;text-underline-offset:3px}
</style>

<section class="max-w-7xl mx-auto px-4 mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
  <!-- News: 최신 3개 (archive-style) -->
  <div id="news-panel" class="home-panel min-w-0">
    <div class="flex items-center justify-between gap-3">
      <h4 class="text-xl font-extrabold m-0">News</h4>
      <a class="warm-underline font-bold shrink-0" href="{{ '/archives-news.html' | relative_url }}">More</a>
    </div>

    {% comment %} /news/ 경로 + date가 있는 항목만, 최신 3개 {% endcomment %}
    {% assign all_items = site.pages | concat: site.posts %}
    {% assign news_items = "" | split: "" %}
    {% for item in all_items %}
      {% if item.url and item.url contains '/news/' and item.date %}
        {% assign news_items = news_items | push: item %}
      {% endif %}
    {% endfor %}
    {% assign news_items = news_items | sort: 'date' | reverse %}

    <ul class="mt-4" role="list">
      {% if news_items.size == 0 %}
        <li class="p-6 text-center text-slate-500 font-semibold border-t border-slate-200 rounded-xl">게시글이 없습니다.</li>
      {% else %}
        {% for post in news_items limit:3 %}
          {% assign y = post.date | date: "%Y" %}
          {% assign m = post.date | date: "%m" %}
          {% assign d = post.date | date: "%d" %}
          <li class="board-row" role="listitem">
            <div class="date-box">
              <div class="date-d">{{ d }}</div>
              <span class="date-ym">{{ y }}.{{ m }}</span>
            </div>
            <div>
              <a class="sbj font-extrabold text-[15px] text-slate-900" href="{{ post.url | relative_url }}">
                {{ post.title }}
              </a>
              <div class="txt line-clamp-2 mt-1 text-[13px] text-slate-600">
                {% if post.excerpt %}
                  {{ post.excerpt | strip_html | strip | truncate: 160 }}
                {% else %}
                  {{ post.content | strip_html | strip | truncate: 160 }}
                {% endif %}
              </div>
              <div class="sm:hidden mt-1 text-[12px] text-slate-500">{{ y }}.{{ m }}.{{ d }}</div>
            </div>
            <div class="btn-cell hidden sm:block">
              <a class="btn-more" href="{{ post.url | relative_url }}">Read&nbsp;More</a>
            </div>
          </li>
        {% endfor %}
      {% endif %}
    </ul>
  </div>

  <!-- Notices: 최신 3개 (archive-style) -->
  <div id="notice-panel" class="home-panel min-w-0">
    <div class="flex items-center justify-between gap-3">
      <h4 class="text-xl font-extrabold m-0">Notices</h4>
      <a class="warm-underline font-bold shrink-0" href="{{ '/archives-notice.html' | relative_url }}">More</a>
    </div>

    {% comment %} /notice/ 경로 + date가 있는 항목만, 최신 3개 {% endcomment %}
    {% assign notice_items = "" | split: "" %}
    {% for item in all_items %}
      {% if item.url and item.url contains '/notice/' and item.date %}
        {% assign notice_items = notice_items | push: item %}
      {% endif %}
    {% endfor %}
    {% assign notice_items = notice_items | sort: 'date' | reverse %}

    <ul class="mt-4" role="list">
      {% if notice_items.size == 0 %}
        <li class="p-6 text-center text-slate-500 font-semibold border-t border-slate-200 rounded-xl">게시글이 없습니다.</li>
      {% else %}
        {% for post in notice_items limit:3 %}
          {% assign y = post.date | date: "%Y" %}
          {% assign m = post.date | date: "%m" %}
          {% assign d = post.date | date: "%d" %}
          <li class="board-row" role="listitem">
            <div class="date-box">
              <div class="date-d">{{ d }}</div>
              <span class="date-ym">{{ y }}.{{ m }}</span>
            </div>
            <div>
              <a class="sbj font-extrabold text-[15px] text-slate-900" href="{{ post.url | relative_url }}">
                {{ post.title }}
              </a>
              <div class="txt line-clamp-2 mt-1 text-[13px] text-slate-600">
                {% if post.excerpt %}
                  {{ post.excerpt | strip_html | strip | truncate: 160 }}
                {% else %}
                  {{ post.content | strip_html | strip | truncate: 160 }}
                {% endif %}
              </div>
              <div class="sm:hidden mt-1 text-[12px] text-slate-500">{{ y }}.{{ m }}.{{ d }}</div>
            </div>
            <div class="btn-cell hidden sm:block">
              <a class="btn-more" href="{{ post.url | relative_url }}">Read&nbsp;More</a>
            </div>
          </li>
        {% endfor %}
      {% endif %}
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
</script>
