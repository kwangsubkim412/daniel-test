console.log("The website is running! You should see this message in the developer console of the preview window.");

document.getElementById("y").textContent = new Date().getFullYear();

const toggle = document.getElementById('dark-mode-toggle');

// Default is dark. 'light' class = light mode
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light');
  toggle.textContent = '🌙 Dark';
}

toggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  toggle.textContent = isLight ? '🌙 Dark' : '☀️ Light';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});
