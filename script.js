const headerLinks = document.querySelectorAll('.nav-links a');

headerLinks.forEach((link) => {
  link.addEventListener('click', () => {
    headerLinks.forEach((item) => item.classList.remove('active'));
    link.classList.add('active');
  });
});
