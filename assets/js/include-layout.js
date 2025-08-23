<script>
  // 모바일 메뉴 토글
  document.getElementById('btnMobile')?.addEventListener('click', ()=>{
    document.getElementById('mobileNav')?.classList.toggle('hidden');
  });

  // 데스크톱 서브메뉴 hover 유지
  const MENU_DELAY = 80;
  document.querySelectorAll('.menu-group[data-menu]').forEach(grp=>{
    const panel = grp.querySelector('.js-submenu') || grp.querySelector('.submenu-panel');
    let t;
    const open  = ()=>{ clearTimeout(t); grp.classList.add('open'); fixPanelEdge(panel); };
    const close = ()=>{ t = setTimeout(()=> grp.classList.remove('open'), MENU_DELAY); };
    grp.addEventListener('mouseenter', open);
    grp.addEventListener('mouseleave', close);
    grp.addEventListener('focusin', open);
    grp.addEventListener('focusout', close);
  });

  // 서브메뉴가 화면 밖으로 나가면 오른쪽 정렬
  function fixPanelEdge(panel){
    if(!panel) return;
    // 우선 기본값 초기화
    panel.classList.remove('align-right');
    // 다음 프레임에서 DOM 측정
    requestAnimationFrame(()=>{
      const r = panel.getBoundingClientRect();
      if(r.right > window.innerWidth - 8){ // 8px 여백
        panel.classList.add('align-right');
      }
    });
  }

  // 리사이즈 시 열린 메뉴 보정
  window.addEventListener('resize', ()=>{
    document.querySelectorAll('.submenu-panel').forEach(fixPanelEdge);
  });
</script>
