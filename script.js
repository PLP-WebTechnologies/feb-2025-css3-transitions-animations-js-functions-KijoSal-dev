// Animate button click
document.getElementById('ctaButton').addEventListener('click', () => {
    const header = document.querySelector('.hero');
    header.style.transition = 'transform 0.6s ease';
    header.style.transform = 'scale(1.05)';
    setTimeout(() => {
      header.style.transform = 'scale(1)';
    }, 600);
  });
  
  // Preferences toggle with localStorage
  const toggle = document.getElementById('toggleAnimations');
  const showcase = document.querySelector('.showcase');
  
  function applyPreferences() {
    const enabled = localStorage.getItem('animationsEnabled') === 'true';
    toggle.checked = enabled;
    showcase.style.display = enabled ? 'flex' : 'none';
  }
  
  toggle.addEventListener('change', () => {
    localStorage.setItem('animationsEnabled', toggle.checked);
    applyPreferences();
  });
  
  window.addEventListener('DOMContentLoaded', applyPreferences);
  