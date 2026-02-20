console.log("The website is running! You should see this message in the developer console of the preview window.");

const toggle = document.getElementById('dark-mode-toggle');

if (localStorage.getItem('dark-mode') === 'enabled') {
  document.body.classList.add('dark');
  toggle.textContent = '☀️ Light Mode';
}

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  toggle.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
  localStorage.setItem('dark-mode', isDark ? 'enabled' : 'disabled');
});