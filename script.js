const video=document.querySelector('.hero-video');
const soundBtn=document.getElementById('soundBtn');
const startBtn=document.getElementById('startIntroBtn');
const introPrompt=document.getElementById('introPrompt');

const introText = "Hi, my name is Gaurav Kumar. I am a BCA graduate with experience in computer operations, data entry, administrative support, and patient coordination. Welcome to my portfolio.";

function speakIntro(){
  if(!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance=new SpeechSynthesisUtterance(introText);
  utterance.rate=0.95;
  utterance.pitch=1;
  utterance.volume=1;
  const voices=window.speechSynthesis.getVoices();
  const preferred=voices.find(v=>/en[-_](IN|US|GB)/i.test(v.lang)) || voices.find(v=>/^en/i.test(v.lang));
  if(preferred) utterance.voice=preferred;
  window.speechSynthesis.speak(utterance);
}

if(video){
  video.muted=true;
  video.play().catch(()=>{});
}

if(soundBtn && video){
  soundBtn.addEventListener('click',()=>{
    video.muted=!video.muted;
    soundBtn.textContent=video.muted?'Tap for sound':'Sound on · Tap to mute';
  });
}

if(startBtn){
  startBtn.addEventListener('click',()=>{
    if(video){
      video.muted=true;
      video.currentTime=0;
      video.play().catch(()=>{});
    }
    speakIntro();
    if(introPrompt) introPrompt.classList.add('hidden');
  });
}

if('speechSynthesis' in window){
  window.speechSynthesis.getVoices();
}

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
  const el=document.querySelector(a.getAttribute('href'));
  if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'});}
}));
