const tombolMenu = document.getElementById('menuToggle');
const menu = document.getElementById('mainNav');
const header = document.querySelector('.site-header');

function bukaTutupMenu() {
  const menuTerbuka = menu.classList.contains('open');

  if (menuTerbuka) {
    menu.classList.remove('open');
    tombolMenu.classList.remove('active');
    tombolMenu.setAttribute('aria-expanded', 'false');
  } else {
    menu.classList.add('open');
    tombolMenu.classList.add('active');
    tombolMenu.setAttribute('aria-expanded', 'true');
  }
}

function tutupMenu() {
  menu.classList.remove('open');
  tombolMenu.classList.remove('active');
  tombolMenu.setAttribute('aria-expanded', 'false');
}

function tampilkanBayanganHeader() {
  if (window.scrollY > 8) {
    header.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.35)';
  } else {
    header.style.boxShadow = 'none';
  }
}

tombolMenu.addEventListener('click', bukaTutupMenu);

const semuaLinkMenu = menu.querySelectorAll('a');
semuaLinkMenu.forEach(function (link) {
  link.addEventListener('click', tutupMenu);
});

window.addEventListener('scroll', tampilkanBayanganHeader);
