const video = document.querySelector('.hero-video');
const soundBtn = document.getElementById('soundBtn');
const startBtn = document.getElementById('startIntroBtn');
const introPrompt = document.getElementById('introPrompt');
const introAudio = document.getElementById('introAudio');

if (video) {
  video.muted = true;
  video.playsInline = true;
  video.play().catch(() => {});
}

if (soundBtn && video) {
  soundBtn.addEventListener('click', () => {
    video.muted = !video.muted;
    soundBtn.textContent = video.muted ? 'Tap for sound' : 'Sound on · Tap to mute';
  });
}

if (startBtn) {
  startBtn.addEventListener('click', async () => {
    // User interaction allows the browser to start audio reliably on mobile.
    if (video) {
      video.muted = true;
      video.currentTime = 0;
      try { await video.play(); } catch (_) {}
    }

    if (introAudio) {
      introAudio.currentTime = 0;
      try { await introAudio.play(); } catch (_) {}
    }

    if (introPrompt) introPrompt.classList.add('hidden');
    startBtn.textContent = 'INTRO PLAYING ✓';
  });
}

document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
  const el = document.querySelector(a.getAttribute('href'));
  if (el) {
    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth' });
  }
}));
