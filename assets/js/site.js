// assets/js/site.js
(function () {
  function ready(fn){ 
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  ready(function(){
    // === Desktop hover intent (약간 늦게 열리고/닫히게) ===
    document.querySelectorAll('[data-menu]').forEach(function(g){
      var enterTO, leaveTO;
      function open(){ clearTimeout(leaveTO); enterTO = setTimeout(function(){ g.setAttribute('data-open','true'); }, 80); }
      function close(){ clearTimeout(enterTO); leaveTO = setTimeout(function(){ g.removeAttribute('data-open'); }, 120); }
      g.addEventListener('mouseenter', open);
      g.addEventListener('mouseleave', close);
      g.addEventListener('focusin', open);
      g.addEventListener('focusout', close);
    });

    // === Mobile: hamburger toggle ===
    var btn   = document.getElementById('btnMobile');
    var panel = document.getElementById('mobileNav');
    if (btn && panel){
      btn.addEventListener('click', function(){
        var willOpen = panel.classList.contains('hidden'); // 현재 숨김이면 열 예정
        panel.classList.toggle('hidden');
        btn.setAttribute('aria-expanded', String(willOpen));
        document.body.classList.toggle('no-scroll', willOpen);
      });

      // ESC로 닫기
      document.addEventListener('keydown', function(e){
        if (e.key === 'Escape' && !panel.classList.contains('hidden')){
          panel.classList.add('hidden');
          btn.setAttribute('aria-expanded', 'false');
          document.body.classList.remove('no-scroll');
        }
      });

      // 패널 내부 링크 클릭 시 자동 닫기(원하면 사용)
      panel.addEventListener('click', function(e){
        var a = e.target.closest('a');
        if (a){ 
          panel.classList.add('hidden');
          btn.setAttribute('aria-expanded','false');
          document.body.classList.remove('no-scroll');
        }
      });
    }

    // === Mobile: accordions ===
    document.querySelectorAll('.mobile-acc-btn').forEach(function(accBtn){
      accBtn.addEventListener('click', function(){
        var panelId = accBtn.getAttribute('aria-controls');
        var accPanel = document.getElementById(panelId);
        var expanded = accBtn.getAttribute('aria-expanded') === 'true';
        accBtn.setAttribute('aria-expanded', String(!expanded));
        if (accPanel) accPanel.classList.toggle('hidden');
      });
    });
  });
})();
