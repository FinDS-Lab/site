---
layout: default
title: "FINDS Lab. Logo"
date: 2025-09-01
permalink: /gallery/2025-09-01-open/
tags: [logo]
thumb: logo1.png
images:
  - logo1.png
  - logo2.png
  - logo3.png
  - logo4.png
---

<!-- ===== Styles ===== -->
<style>
  .breadcrumbs{display:flex;flex-wrap:wrap;gap:.5rem;align-items:center;font-size:12px}
  .breadcrumbs a{color:#e5e7eb}
  .breadcrumbs a:hover{text-decoration:underline}
  .breadcrumbs .sep{opacity:.8}
  
  .image-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:20px}
  @media(max-width:640px){.image-grid{grid-template-columns:1fr}}
  
  .image-card{
    background:#fff;border:1px solid #e5e7eb;border-radius:1rem;overflow:hidden;
    transition:all .2s;cursor:pointer;
  }
  .image-card:hover{transform:translateY(-4px);box-shadow:0 12px 32px rgba(0,0,0,.1)}
  
  .image-wrapper{
    aspect-ratio:16/9;background:#f3f4f6;display:flex;align-items:center;justify-content:center;
    overflow:hidden;position:relative;
  }
  .image-wrapper img{
    width:100%;height:100%;object-fit:contain;
  }
  .image-info{padding:12px 16px;border-top:1px solid #f3f4f6}
  .image-name{font-size:14px;font-weight:700;color:#374151}
</style>

<!-- ===== Banner ===== -->
<section class="max-w-7xl mx-auto px-4 mt-6">
  <div class="relative rounded-2xl overflow-hidden ring-1 ring-slate-200">
    {%- comment -%} 소스 폴더 기준 경로 (permalink 무시) {%- endcomment -%}
    {% assign src_dir = '/' | append: page.path | remove: page.name | replace: '//','/' %}
    {% assign cover_url = src_dir | append: page.thumb | replace: '//','/' | relative_url %}
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
  {% if page.images and page.images.size > 0 %}
    <div class="image-grid">
      {% for img in page.images %}
        {% assign img_url = src_dir | append: img | replace: '//','/' | relative_url %}
        <a href="{{ img_url }}" target="_blank" rel="noopener" class="image-card">
          <div class="image-wrapper">
            <img src="{{ img_url }}" alt="{{ img }}" loading="lazy">
          </div>
          <div class="image-info">
            <div class="image-name">{{ img }}</div>
          </div>
        </a>
      {% endfor %}
    </div>
  {% else %}
    <!-- Fallback: site.static_files 방식 (소스 폴더 기준) -->
    {% assign here = src_dir %}
    {% assign files = site.static_files | where_exp: "f", "f.path contains here" %}
    
    {% assign imgs = "" | split: "" %}
    {% for f in files %}
      {% assign ext = f.extname | downcase %}
      {% if ext == ".jpg" or ext == ".jpeg" or ext == ".png" or ext == ".webp" or ext == ".gif" %}
        {% assign imgs = imgs | push: f %}
      {% endif %}
    {% endfor %}
    
    {% if imgs.size > 0 %}
      <div class="image-grid">
        {% for it in imgs %}
          <a href="{{ it.path | relative_url }}" target="_blank" rel="noopener" class="image-card">
            <div class="image-wrapper">
              <img src="{{ it.path | relative_url }}" alt="{{ it.name }}" loading="lazy">
            </div>
            <div class="image-info">
              <div class="image-name">{{ it.name }}</div>
            </div>
          </a>
        {% endfor %}
      </div>
    {% else %}
      <div class="p-8 text-center text-slate-500 font-semibold bg-white border border-slate-200 rounded-2xl">
        갤러리 이미지를 표시하려면 front matter의 images 배열에 파일명을 추가하세요.
      </div>
    {% endif %}
  {% endif %}
</section>
