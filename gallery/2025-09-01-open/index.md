---
layout: default
title: "FINDS Lab. Logo"
date: 2025-09-01
permalink: /gallery/2025-09-01-open/
tags: [logo]
thumb: logo1.jpg   # 폴더 내 대표 이미지 파일명
---

<!-- ===== Album Banner (first image as cover) ===== -->
{% comment %}
현재 페이지 폴더 내 이미지 수집 (물리 경로 기준: page.dir)
예시 파일: image1.jpg, image2.jpg, image3.jpg, image4.jpg
{% endcomment %}
{% assign here = page.dir %}
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
  {% if page.thumb contains "://" or page.thumb startswith "/" %}
    {% assign cover_url = page.thumb | relative_url %}
  {% else %}
    {% assign base = page.url %}
    {% assign last = base | slice: -1, 1 %}
    {% if last != "/" %}{% assign base = base | append: "/" %}{% endif %}
    {% assign cover_url = base | append: page.thumb | relative_url %}
  {% endif %}
{% elsif imgs.size > 0 %}
  {% assign cover_url = imgs[0].path | relative_url %}
{% else %}
  {% assign cover_url = "/assets/img/banners/gallery-hero.jpg" | relative_url %}
{% endif %}

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
        {% if page.date %}<p class="text-sm md:text-[15px] opacity-95">{{ page.date | date: "%Y.%m.%d" }}</p>{% endif %}
      </div>
    </div>
  </div>
</section>

<!-- ===== Image Grid ===== -->
<section class="max-w-7xl mx-auto px-4 mt-6">
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
