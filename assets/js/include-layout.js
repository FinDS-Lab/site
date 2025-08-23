<script>
(async function injectLayout(){
  const headCSS = `
    <style>
      .container-root{ width:min(1120px, 100% - 32px); margin-inline:auto; }
      @media (min-width:1024px){ .container-root{ width:min(1120px, 100% - 48px); } }
      html{ scrollbar-gutter:stable both-edges; }
      .menu-group{ position:relative; }
      .submenu-panel{ position:absolute; z-index:6000; }
      .menu-group .js-submenu{ visibility:hidden; opacity:0; transform:translateY(6px);
        transition:visibility .18s ease, opacity .18s ease, transform .18s ease; }
      .menu-group.open .js-submenu{ visibility:visible; opacity:1; transform:translateY(0); }
      .sticky-blur{ position:sticky; top:0; z-index:9999; backdrop-filter:saturate(180%) blur(8px);
        background:rgba(255,255,255,.85); }
    </style>`;
  document.head.insertAdjacentHTML('beforeend', headCSS);

  // fetch & inject header
  const headerHost = document.getElementById('site-header');
  if(headerHost){
    const resH = await fetch('/partials/header.html', {cache:'no-store'});
    headerHost.innerHTML = await resH.text();
  }
  // fetch & inject footer
  const footerHost = document.getElementById('site-footer');
  if(footerHost){
    const resF = await fetch('/partials/footer.html', {cache:'no-store'});
    footerHost.innerHTML = await resF.text();
  }

  // init menus (after header inserted)
  const btnMobile = document.getElementById('btnMobile');
  const mobileNav = document.getElementById('mobileNav');
  btnMobile?.addEventListener('click', ()=> mobileNav?.classList.toggle('hidden'));

  const MENU_DELAY = 70;
  document.querySelectorAll('.menu-group[data-menu]').forEach(grp=>{
    const panel = grp.querySelector('.js-submenu');
    let t;
    const open  = ()=>{ clearTimeout(t); grp.classList.add('open'); };
    const close = ()=>{ t = setTimeout(()=> grp.classList.remove('open'), MENU_DELAY); };
    grp.addEventListener('mouseenter', open);
    grp.addEventListener('mouseleave', close);
    grp.addEventListener('focusin', open);
    grp.addEventListener('focusout', close);
  });
})();
</script>
