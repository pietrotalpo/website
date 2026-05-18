// ===== Burger menu =====
function toggleMenu(burger) {
  burger.classList.toggle('open');
  burger.parentElement.querySelector('.main-nav').classList.toggle('open');
}

// ===== Servizi accordion (mobile only) =====
function toggleCard(card) {
  if (window.innerWidth <= 980) {
    card.classList.toggle('open');
  }
}

// ===== Form submit handler (Netlify-aware) =====
function handleFormSubmit(e, form) {
  e.preventDefault();
  var formData = new FormData(form);
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData).toString()
  }).then(function() {
    var btn = form.querySelector('button[type="submit"]');
    var msg = document.createElement('p');
    msg.className = 'form-thanks';
    msg.textContent = 'Grazie. Vi risponderò al più presto.';
    btn.parentElement.replaceChild(msg, btn);
    form.querySelectorAll('input, textarea').forEach(function(el) { el.disabled = true; });
  }).catch(function() {
    alert('Si è verificato un errore. Riprovate o scrivete a info@tdsrl.it');
  });
}

// ===== Slide-in animations on scroll =====
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.slide-in-left, .slide-in-right, .slide-in-up').forEach(function(el) {
  observer.observe(el);
});

// ===== Parallax (hero only) =====
document.addEventListener('scroll', function() {
  document.documentElement.style.setProperty('--parallax-y', (window.scrollY * 0.25) + 'px');
});

// ===== Initialize Lucide icons =====
if (typeof lucide !== 'undefined') {
  lucide.createIcons();
} else {
  document.addEventListener('DOMContentLoaded', function() {
    if (typeof lucide !== 'undefined') lucide.createIcons();
  });
}
