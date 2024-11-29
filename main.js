const expresion = {
  password: /^.{4,12}$/ //contraseña de 4 a 12 caracteres.
}


const form = document.querySelector('form');
const pwd = document.getElementById('password');
const pwdConfirm = document.getElementById('password-confirm');
const mensaje = document.querySelector('.error-message');
const btn = document.querySelector('button');



btn.addEventListener('click', function(e) {
  e.preventDefault();
  if(!expresion.password.test(pwd.value)){
    mensaje.textContent = 'La contraseña debe tener entre 4 y 12 caracteres';
    pwd.classList.add('input-error');
    pwdConfirm.classList.add('input-error');
  }

  if(pwd.value !== pwdConfirm.value) {
    pwdConfirm.classList.add('input-error');
    pwd.classList.add('input-error');
    mensaje.textContent = 'Las contraseñas no coinciden.';
  }

  console.log('Formulario enviado.')
})