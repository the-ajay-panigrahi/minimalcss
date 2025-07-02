const toggleBtn = document.querySelector('.theme-toggle');
const root = document.documentElement;

function updateToggleText(theme) {
  toggleBtn.textContent = theme === 'dark' ? 'Light Theme' : 'Dark Theme';
}

function setInitialTheme() {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'light');
  root.setAttribute('data-theme', theme);
  updateToggleText(theme);
}

function toggleTheme() {
  const current = root.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateToggleText(next);
}

toggleBtn.addEventListener('click', toggleTheme);
setInitialTheme();
