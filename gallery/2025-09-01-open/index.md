{% comment %} /gallery/ 아래의 페이지/포스트 수집 {% endcomment %}
{% assign all_items = site.pages | concat: site.posts %}
{% assign galleries = "" | split: "" %}
{% for item in all_items %}
  {% if item.url and item.url contains '/gallery/' and item.title %}
    {% assign galleries = galleries | push: item %}
  {% endif %}
{% endfor %}
{% assign galleries = galleries | sort: 'date' | reverse %}

<ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
  {% for post in galleries %}
    {% assign thumb = post.thumb | default: post.image %}
    {% if thumb %}
      {%- comment -%}
        thumb가 파일명(상대경로)라면 post.url 뒤에 붙여서 경로 생성
        절대경로(/...)나 http(s)면 그대로 사용
      {%- endcomment -%}
      {% if thumb contains '://' or thumb startswith '/' %}
        {% assign thumb_url = thumb | relative_url %}
      {% else %}
        {% assign thumb_url = post.url | append: thumb | relative_url %}
      {% endif %}
    {% else %}
      {% assign thumb_url = '/assets/img/placeholders/gallery.jpg' | relative_url %}
    {% endif %}

    <li class="group">
      <a class="block rounded-xl overflow-hidden ring-1 ring-slate-200 hover:shadow-xl transition"
         href="{{ post.url | relative_url }}">
        <div class="h-44 bg-center bg-cover"
             style="background-image:url('{{ thumb_url }}')"></div>
        <div class="p-4 bg-white">
          <h3 class="font-extrabold text-[15px] line-clamp-2">{{ post.title }}</h3>
          <p class="mt-1 text-[12px] text-slate-500">{{ post.date | date: "%Y.%m.%d" }}</p>
        </div>
      </a>
    </li>
  {% endfor %}
</ul>
