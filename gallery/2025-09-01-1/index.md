---
layout: default
title: "FINDS Lab. Logo"
date: 2025-09-01
permalink: /gallery/2025-09-01-open/
tags: [logo]
thumb: logo1.png   # 폴더 내 대표 이미지 파일명 (상대 경로)
---

<!-- ========= Album Banner & Image Grid (robust static_files scan) ========= -->

{% comment %}
- 이 페이지(index.md)와 같은 폴더 안의 이미지를 수집해 그리드로 표시합니다.
- thumb는 상대파일명 또는 절대경로(/...)/URL 모두 지원.
- site.static_files 조회 시 page.dir 기준으로 하위 파일만 모읍니다.
{% endcomment %}

{% assign here = page.dir | append: "/" %}
{% assign files = site.static_files | where_exp: "f", "f.path contains here" %}

{% assign imgs = "" | split: "" %}
{% for f in files %}
  {% assign ext = f.extname | downcase %}
  {% if ext == ".jpg" or ext == ".jpeg" or ext == ".png" or ext == ".webp" or ext == ".gif" %}
    {% assign imgs = imgs | push: f %}
  {% endif %}
{% endfor %}
{% assign imgs = imgs | sort: "path" %}

{% comment %}
대표 커버 이미지 결정 우선순위
1) front matter thumb (파일명/절대경로/URL)
2) 폴더 내 첫 이미지
3) 플레이스홀더
{% endcomment %}
{% assign cover_url = nil %}
{% if page.thumb %}
  {% assign first_char = page.thumb | slice: 0 %}
  {% if page.thumb contains "://" or first_char == "/" %}
    {% assign cover_url = page.thumb | relative_url %}
  {% else %}
    {%- comment -%}
    thumb이 파일명일 경우: 현재 페이지 디렉토리(page.dir) 기준으로 붙여 사용
    {%- endcomment -%}
    {% assign cover_url = page.dir | append: "/" | append: page.thumb | replace: "//","/" | relative_url %}
  {% endif %}
{% elsif imgs.size > 0 %}
  {% assign cover_url = imgs[0].path | relative_url %}
{% else %}
  {% assign cover_url = "/assets/img/banners/gallery-hero.jpg" | relative_url %}
{% endif %}

<!-- ===== Styles (소규모, 페이지 전용) ===== -->
<style>
  .breadcrumbs{display:flex;flex-wrap:wrap;gap:.5rem;align-items:center;font-size:12px}
  .breadcrumbs a{color:#e5e7eb}
  .breadcrumbs a:hover{text-decoration:underline}
  .breadcrumbs .sep{opacity:.8}
</style>

<!-- ===== Banner ===== -->
<section class="max-w-7xl mx-auto px-4 mt-6">
  <div class="relative rounded-2xl overflow-hidden ring-1 ring-slate-200">
    <img src="{{ cover_url }}" alt="{{ page.title }} cover"
         class="w-full h-[200px] md:h-[260px] object-cover" width="1600" height="320">
    <div class="absolute inset-0 bg-black/40"></div>
    <div class="absolute inset-x-0 bottom-4 px-4">
      <div class="max-w-7xl mx-auto text-white">
        <!-- Breadcrumbs -->
        <nav aria-label="Breadcrumb" class="flex flex-wrap gap-2 items-center text-[12px] mb-1">
          <a class="hover:underline" href="{{ '/' | relative_url }}">Home</a>
          <span class="opacity-80">›</span>
          <span>Archives</span>
          <span class="opacity-80">›</span>
          <a class="hover:underline" href="{{ '/archives-gallery.html' | relative_url }}">Gallery</a>
          <span class="opacity-80">›</span>
          <span aria-current="page" class="font-semibold">{{ page.title }}</span>
        </nav>
        <h1 class="text-2xl md:text-3xl font-extrabold">{{ page.title }}</h1>
        {% if page.date %}
          <p class="text-sm md:text-[15px] opacity-95">{{ page.date | date: "%Y.%m.%d" }}</p>
        {% endif %}
      </div>
    </div>
  </div>
</section>

<!-- ===== Image Grid ===== -->
<section class="max-w-7xl mx-auto px-4 mt-6 pb-8">
  {% if imgs.size == 0 %}
    <div class="p-8 text-center text-slate-500 font-semibold bg-white border border-slate-200 rounded-2xl">
      폴더에 표시할 이미지가 없습니다. (jpg/jpeg/png/webp/gif)
    </div>
  {% else %}
    <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {% for it in imgs %}
        <li class="group">
          <a class="block rounded-xl overflow-hidden ring-1 ring-slate-200 hover:shadow-xl transition"
             href="{{ it.path | relative_url }}" target="_blank" rel="noopener">
            <div class="h-44 bg-center bg-cover"
                 style="background-image:url('{{ it.path | relative_url }}')"></div>
            <div class="p-4 bg-white">
              <h3 class="font-extrabold text-[14px] line-clamp-1">
                {{ it.name }}
              </h3>
            </div>
          </a>
        </li>
      {% endfor %}
    </ul>
  {% endif %}
</section>
