document.getElementById('startBtn').addEventListener('click', () => {
  const progressSection = document.getElementById('progress');
  const progressBar = document.getElementById('progressBar');
  const statusText = document.getElementById('statusText');
  
  progressSection.classList.remove('hidden');
  
  let progress = 0;
  const interval = setInterval(() => {
    progress += 10;
    progressBar.value = progress;
    statusText.textContent = `男磨き ${progress}% 完了`;
    
    if (progress >= 100) {
      clearInterval(interval);
      statusText.textContent = '完了！紳士レベルMAXです。🎩';
    }
  }, 300);
});
