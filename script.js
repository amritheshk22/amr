document.documentElement.classList.add('js');
const body=document.body;
const saved=localStorage.getItem('amr-theme');
if(saved==='dark') body.classList.add('dark');
const theme=document.querySelector('[data-theme-toggle]');
if(theme) theme.addEventListener('click',()=>{body.classList.toggle('dark');localStorage.setItem('amr-theme',body.classList.contains('dark')?'dark':'light')});
const menu=document.querySelector('[data-menu]');
const nav=document.querySelector('nav');
if(menu&&nav){menu.setAttribute('aria-expanded','false');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close menu':'Open menu');menu.textContent=open?'×':'☰'})}
if(nav) nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(x=>{if(x.isIntersecting)x.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(x=>observer.observe(x));
document.querySelectorAll('[data-tab]').forEach(btn=>btn.addEventListener('click',()=>{const group=btn.closest('[data-tabs]');group.querySelectorAll('[data-tab]').forEach(x=>x.classList.remove('active'));group.querySelectorAll('.panel').forEach(x=>x.classList.remove('active'));btn.classList.add('active');const panel=group.querySelector('#'+btn.dataset.tab);if(panel)panel.classList.add('active')}));
document.querySelectorAll('[data-case]').forEach(card=>card.addEventListener('click',()=>{const was=card.classList.contains('open');document.querySelectorAll('[data-case]').forEach(x=>x.classList.remove('open'));if(!was)card.classList.add('open')}));
document.querySelectorAll('[data-step]').forEach(step=>step.addEventListener('click',()=>{document.querySelectorAll('[data-step]').forEach(x=>x.classList.remove('selected'));step.classList.add('selected');const out=document.querySelector('[data-insight]');if(out)out.innerHTML='<strong>'+step.querySelector('h3').textContent+'</strong><span>'+step.dataset.step+'</span>'}));
const copy=document.querySelector('[data-copy-email]');const toast=document.querySelector('.toast');
if(copy)copy.addEventListener('click',async()=>{try{await navigator.clipboard.writeText('amritheshk22@outlook.com');if(toast){toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1800)}}catch(e){location.href='mailto:amritheshk22@outlook.com'}});
const links=[...document.querySelectorAll('nav a')];links.forEach(a=>{if(a.pathname===location.pathname)a.classList.add('active')});
