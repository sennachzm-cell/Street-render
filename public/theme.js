/* Street Admin · Studio Violet: alternância de tema na entrada e no painel. */
(function(){
 'use strict';
 const KEY='street-admin-visual-theme';
 const root=document.documentElement;
 const toggles=[...document.querySelectorAll('#theme-toggle,#auth-theme-toggle')];
 let saved='dark';
 try{saved=localStorage.getItem(KEY)==='light'?'light':'dark';}catch(e){}
 function apply(mode){
  const theme=mode==='light'?'light':'dark';
  root.dataset.theme=theme;
  for(const toggle of toggles){
   const login=toggle.id==='auth-theme-toggle';
   const icon=toggle.querySelector('.theme-icon');
   const label=toggle.querySelector('.theme-label');
   if(icon)icon.textContent=theme==='dark'?'☀':'☾';
   if(label)label.textContent=theme==='dark'?'Modo claro':'Modo escuro';
   toggle.setAttribute('aria-label',theme==='dark'?'Ativar modo claro':'Ativar modo escuro');
   toggle.setAttribute('title',theme==='dark'?'Ativar modo claro':'Ativar modo escuro');
   toggle.setAttribute('aria-pressed',String(theme==='light'));
  }
  const meta=document.querySelector('meta[name="theme-color"]');
  if(meta)meta.setAttribute('content',theme==='dark'?'#101118':'#faf9ff');
 }
 apply(saved);
 toggles.forEach(button=>button.addEventListener('click',function(){
  const next=root.dataset.theme==='dark'?'light':'dark';
  try{localStorage.setItem(KEY,next);}catch(e){}
  apply(next);
 }));
})();
