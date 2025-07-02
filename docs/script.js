new ClipboardJS('.copy-btn')

const toggleBtn = document.getElementById('theme-toggle');
const root = document.documentElement;

function updateToggleIcon(theme) {
    toggleBtn.innerHTML = theme === 'dark'
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
}

function setInitialTheme() {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');
    root.setAttribute('data-theme', theme);
    updateToggleIcon(theme);
}

function toggleTheme() {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateToggleIcon(next);
}

toggleBtn.addEventListener('click', toggleTheme);
setInitialTheme();


fetch("https://api.github.com/repos/the-ajay-panigrahi/minimalcss")
    .then(res => res.json())
    .then(data => {
        document.getElementById("star-count").textContent = data.stargazers_count;
    });
