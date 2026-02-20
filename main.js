console.log("김광섭 포트폴리오 사이트가 실행 중입니다.");

document.getElementById("y").textContent = new Date().getFullYear();

const toggle = document.getElementById('dark-mode-toggle');

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
