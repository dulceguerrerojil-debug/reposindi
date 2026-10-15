
  const aa1 = document.getElementById('aa1');
  const errorCorreo = document.getElementById('error-correo');
  const aa2 = document.getElementById('aa2');
  const PIN = document.getElementById('PIN');
  const btn = document.getElementById('btn');
  const form = document.getElementById('form');


 function validaraa1(email) {
  // Regex estándar para aceptar cualquier dominio de correo
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/i;
  return regex.test(email);
}


  function validarPIN(pin) {
    return /^[0-9]{6}$/.test(pin);
  }


  function validar() {
    const esValido = (
      validaraa1(aa1.value.trim()) && 
      aa2.value.trim().length > 0 && 
      validarPIN(PIN.value.trim())
    );
    btn.disabled = !esValido;
  }


  aa1.addEventListener('blur', () => {
 
    if (aa1.value.trim() && !validaraa1(aa1.value.trim())) {
      errorCorreo.style.display = 'block';
    } else {
      errorCorreo.style.display = 'none';
    }
    validar();
  });

  aa1.addEventListener('input', () => {
 
    errorCorreo.style.display = 'none';
    validar();
  });

  aa2.addEventListener('input', validar);

  PIN.addEventListener('input', (e) => {

    e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 6);
    validar();
  });

