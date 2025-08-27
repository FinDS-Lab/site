<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>FINDS Lab - Financial Data Science Laboratory</title>
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --gold: rgb(214, 177, 77);
    --gold-light: rgb(234, 207, 127);
    --red: rgb(172, 14, 14);
    --red-dark: rgb(127, 10, 10);
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: #ffffff;
    color: #111827;
  }

  /* Hero Carousel */
  .hero-section {
    position: relative;
    width: 100%;
    height: 500px;
    overflow: hidden;
    background: #000;
  }

  @media (max-width: 768px) {
    .hero-section {
      height: 400px;
    }
  }

  .carousel-track {
    display: flex;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    height: 100%;
  }

  .carousel-slide {
    min-width: 100%;
    height: 100%;
    position: relative;
  }

  .carousel-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .carousel-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%);
    display: flex;
    align-items: center;
    padding: 0 5%;
  }

  .carousel-content {
    max-width: 600px;
    color: white;
    animation: fadeInUp 0.8s ease-out;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .tag-badge {
    display: inline-block;
    background: linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%);
    color: #000;
    padding: 6px 16px;
    border-radius: 999px;
    font-weight: 900;
    font-size: 14px;
    letter-spacing: 0.5px;
    margin-bottom: 16px;
  }

  .hero-title {
    font-size: clamp(28px, 5vw, 48px);
    font-weight: 900;
    line-height: 1.2;
    margin-bottom: 20px;
  }

  .hero-buttons {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .btn-hero {
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 700;
    font-size: 14px;
    text-decoration: none;
    transition: all 0.3s;
    display: inline-block;
  }

  .btn-hero.primary {
    background: linear-gradient(135deg, var(--red) 0%, var(--red-dark) 100%);
    color: white;
    border: 2px solid transparent;
  }

  .btn-hero.primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(172, 14, 14, 0.3);
  }

  .btn-hero.secondary {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
  }

  .btn-hero.secondary:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
  }

  /* Carousel Dots */
  .carousel-dots {
    position: absolute;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
    z-index: 10;
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.4);
    border: none;
    cursor: pointer;
    transition: all 0.3s;
  }

  .dot.active {
    width: 24px;
    border-radius: 4px;
    background: var(--gold);
  }

  /* Introduction Section */
  .intro-section {
    max-width: 1200px;
    margin: 80px auto;
    padding: 0 24px;
    display: grid;
    grid-template-columns: 180px 1fr;
    gap: 40px;
    align-items: center;
  }

  @media (max-width: 768px) {
    .intro-section {
      grid-template-columns: 1fr;
      margin: 40px auto;
      text-align: center;
    }
  }

  .logo-container {
    position: relative;
  }

  .logo-box {
    width: 180px;
    height: 180px;
    background: white;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 20px 40px rgba(0,0,0,0.08);
    position: relative;
    overflow: hidden;
  }

  @media (max-width: 768px) {
    .logo-box {
      margin: 0 auto;
    }
  }

  .logo-box::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(214,177,77,0.1) 0%, rgba(172,14,14,0.1) 100%);
    opacity: 0;
    transition: opacity 0.3s;
  }

  .logo-box:hover::before {
    opacity: 1;
  }

  .logo-box img {
    width: 140px;
    height: 140px;
    object-fit: contain;
    position: relative;
    z-index: 1;
  }

  .intro-content h2 {
    color: var(--red);
    font-size: 24px;
    font-weight: 900;
    margin-bottom: 8px;
  }

  .intro-content h3 {
    font-size: 32px;
    margin-bottom: 4px;
  }

  .intro-content .lab-name {
    color: var(--gold);
    font-weight: 900;
  }

  .intro-content .lab-full {
    font-size: 18px;
    color: #374151;
    margin-left: 8px;
  }

  .intro-content .description {
    margin-top: 16px;
    font-size: 16px;
    line-height: 1.8;
    color: #4b5563;
  }

  /* News & Notice Section */
  .updates-section {
    max-width: 1200px;
    margin: 0 auto 80px;
    padding: 0 24px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  @media (max-width: 768px) {
    .updates-section {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }

  .update-card {
    background: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(0,0,0,0.05);
    transition: all 0.3s;
  }

  .update-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.1);
  }

  .update-header {
    padding: 24px 28px;
    background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
    border-bottom: 2px solid #f3f4f6;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .update-title {
    font-size: 20px;
    font-weight: 900;
    color: #111827;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .update-icon {
    width: 32px;
    height: 32px;
    background: linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
  }

  .update-more {
    color: var(--red);
    font-weight: 700;
    font-size: 14px;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 4px;
    transition: gap 0.2s;
  }

  .update-more:hover {
    gap: 8px;
  }

  .update-list {
    padding: 8px;
  }

  .update-item {
    padding: 20px;
    border-radius: 12px;
    transition: all 0.2s;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .update-item::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 0;
    background: var(--gold);
    transition: height 0.3s;
  }

  .update-item:hover {
    background: #fef9f3;
  }

  .update-item:hover::before {
    height: 60%;
  }

  .update-date {
    display: flex;
    align-items: baseline;
    gap: 6px;
    margin-bottom: 8px;
  }

  .date-day {
    font-size: 24px;
    font-weight: 900;
    color: var(--red);
  }

  .date-month {
    font-size: 12px;
    font-weight: 700;
    color: #9ca3af;
  }

  .update-item-title {
    font-size: 15px;
    font-weight: 800;
    color: #1f2937;
    line-height: 1.5;
    text-decoration: none;
    display: block;
  }

  .update-item-title:hover {
    color: var(--red);
  }

  .update-meta {
    margin-top: 6px;
    font-size: 12px;
    color: #9ca3af;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .meta-tag {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    background: rgba(214,177,77,0.1);
    border-radius: 999px;
    font-weight: 600;
  }

  .empty-message {
    padding: 40px;
    text-align: center;
    color: #9ca3af;
    font-size: 14px;
  }

  /* Mobile optimizations */
  @media (max-width: 640px) {
    .hero-buttons {
      flex-direction: column;
    }
    
    .btn-hero {
      width: 100%;
      text-align: center;
    }
    
    .update-header {
      padding: 20px;
    }
    
    .update-item {
      padding: 16px;
    }
  }
</style>
</head>
<body>

<!-- Hero Section -->
<section class="hero-section">
  <div class="carousel-track" id="carouselTrack">
    <!-- Slide 1 -->
    <div class="carousel-slide">
      <img src="/api/placeholder/1600/500" alt="FINDS Lab Hero 1">
      <div class="carousel-overlay">
        <div class="carousel-content">
          <span class="tag-badge">FINDS Lab.</span>
          <h1 class="hero-title">Towards Data-Inspired<br>Financial Management</h1>
          <div class="hero-buttons">
            <a href="#" class="btn-hero primary">Introduction</a>
            <a href="#" class="btn-hero secondary">Honors</a>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Slide 2 -->
    <div class="carousel-slide">
      <img src="/api/placeholder/1600/500" alt="FINDS Lab Hero 2">
      <div class="carousel-overlay">
        <div class="carousel-content">
          <span class="tag-badge">FINDS Lab.</span>
          <h1 class="hero-title">Research<br>Accomplishments</h1>
          <div class="hero-buttons">
            <a href="#" class="btn-hero primary">Publications</a>
            <a href="#" class="btn-hero secondary">Projects</a>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Slide 3 -->
    <div class="carousel-slide">
      <img src="/api/placeholder/1600/500" alt="FINDS Lab Hero 3">
      <div class="carousel-overlay">
        <div class="carousel-content">
          <span class="tag-badge">FINDS Lab.</span>
          <h1 class="hero-title">Latest<br>Updates</h1>
          <div class="hero-buttons">
            <a href="#" class="btn-hero primary">Notice</a>
            <a href="#" class="btn-hero secondary">News</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="carousel-dots">
    <button class="dot active" data-dot="0"></button>
    <button class="dot" data-dot="1"></button>
    <button class="dot" data-dot="2"></button>
  </div>
</section>

<!-- Introduction Section -->
<section class="intro-section">
  <div class="logo-container">
    <div class="logo-box">
      <img src="/api/placeholder/140/140" alt="FINDS Lab Logo">
    </div>
  </div>
  
  <div class="intro-content">
    <h2>Dongduk Women's University</h2>
    <h3>
      <span class="lab-name">FINDS Lab.</span>
      <span class="lab-full">
        (<b>Fin</b>ancial <b>D</b>ata <b>S</b>cience <b>Laboratory</b>)
      </span>
    </h3>
    <p class="description">
      동덕여자대학교 경영대학 경영융합학부 <b>금융데이터사이언스 연구실</b> 홈페이지입니다.
    </p>
  </div>
</section>

<!-- News & Notice Section -->
<section class="updates-section">
  <!-- News Card -->
  <div class="update-card">
    <div class="update-header">
      <div class="update-title">
        <div class="update-icon">📰</div>
        <span>News</span>
      </div>
      <a href="{{ '/archives-news.html' | relative_url }}" class="update-more">More →</a>
    </div>
    <div class="update-list">
      {% assign all_items = site.pages | concat: site.posts %}
      {% assign news_items = "" | split: "" %}
      {% for item in all_items %}
        {% if item.url and item.url contains '/news/' and item.date %}
          {% assign news_items = news_items | push: item %}
        {% endif %}
      {% endfor %}
      {% assign news_items = news_items | sort: 'date' | reverse %}
      
      {% if news_items.size == 0 %}
        <div class="empty-message">게시글이 없습니다.</div>
      {% else %}
        {% for post in news_items limit:3 %}
          <div class="update-item">
            <div class="update-date">
              <span class="date-day">{{ post.date | date: "%d" }}</span>
              <span class="date-month">{{ post.date | date: "%Y.%m" }}</span>
            </div>
            <a href="{{ post.url | relative_url }}" class="update-item-title">
              {{ post.title }}
            </a>
            {% if post.category %}
            <div class="update-meta">
              <span class="meta-tag">{{ post.category }}</span>
            </div>
            {% endif %}
          </div>
        {% endfor %}
      {% endif %}
    </div>
  </div>
  
  <!-- Notice Card -->
  <div class="update-card">
    <div class="update-header">
      <div class="update-title">
        <div class="update-icon">📌</div>
        <span>Notice</span>
      </div>
      <a href="{{ '/archives-notice.html' | relative_url }}" class="update-more">More →</a>
    </div>
    <div class="update-list">
      {% assign notice_items = "" | split: "" %}
      {% for item in all_items %}
        {% if item.url and item.url contains '/notice/' and item.date %}
          {% assign notice_items = notice_items | push: item %}
        {% endif %}
      {% endfor %}
      {% assign notice_items = notice_items | sort: 'date' | reverse %}
      
      {% if notice_items.size == 0 %}
        <div class="empty-message">게시글이 없습니다.</div>
      {% else %}
        {% for post in notice_items limit:3 %}
          <div class="update-item">
            <div class="update-date">
              <span class="date-day">{{ post.date | date: "%d" }}</span>
              <span class="date-month">{{ post.date | date: "%Y.%m" }}</span>
            </div>
            <a href="{{ post.url | relative_url }}" class="update-item-title">
              {{ post.title }}
            </a>
            {% if post.category %}
            <div class="update-meta">
              <span class="meta-tag">{{ post.category }}</span>
            </div>
            {% endif %}
          </div>
        {% endfor %}
      {% endif %}
    </div>
  </div>
</section>

<script>
  // Carousel functionality
  (function() {
    const track = document.getElementById('carouselTrack');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    let interval;
    
    function goToSlide(index) {
      currentIndex = index;
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
    }
    
    function nextSlide() {
      goToSlide((currentIndex + 1) % dots.length);
    }
    
    function startAutoplay() {
      interval = setInterval(nextSlide, 5000);
    }
    
    function stopAutoplay() {
      clearInterval(interval);
    }
    
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        stopAutoplay();
        goToSlide(index);
        startAutoplay();
      });
    });
    
    startAutoplay();
    
    // Pause on visibility change
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        stopAutoplay();
      } else {
        startAutoplay();
      }
    });
  })();
</script>

</body>
</html>
