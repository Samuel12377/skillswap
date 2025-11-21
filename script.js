// Navegación móvil y validación básica de formulario
document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('main-nav');

  navToggle.addEventListener('click', function(){
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    mainNav.classList.toggle('open');
  });

  // Cerrar menú al clicar un enlace (útil en móvil)
  mainNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Formulario: validación mínima y demostración (no envía a servidor)
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if(!name || !email || !message){
      alert('Por favor completa todos los campos requeridos.');
      return;
    }

    // Aquí podrías enviar a Formspree, Netlify o tu endpoint con fetch()
    alert('Mensaje preparado. Integra un backend para recibirlo (Formspree/Netlify).');
    form.reset();
  });

  // Actualizar año en el footer
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();
});
