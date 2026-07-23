document.addEventListener('DOMContentLoaded',()=>{
const envelope=document.getElementById('envelope');
const wrapper=document.querySelector('.envlope-wrapper');
const openBtn=document.getElementById('open');
const closeBtn=document.getElementById('reset');
function openEnv(){envelope.classList.add('open');envelope.classList.remove('close');wrapper.classList.add('open-wrapper');}
function closeEnv(){envelope.classList.add('close');envelope.classList.remove('open');wrapper.classList.remove('open-wrapper');}
envelope.onclick=openEnv;openBtn.onclick=openEnv;closeBtn.onclick=closeEnv;});
