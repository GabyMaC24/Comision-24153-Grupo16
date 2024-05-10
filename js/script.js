// Obtener referencias a los elementos
let dialogContainer = document.getElementById("dialogContainer");
let closeButton = document.getElementsByClassName("close-button")[0];
let submitButton = document.getElementById("submitButton");
let form = document.getElementById("contactForm");

  // Mostrar la ventana de diálogo al enviar el formulario si los campos son válidos
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario

let campoOculto = document.getElementsByClassName("campoObligatorio");
let names = document.getElementById("nombre").value;
let tel = document.getElementById("telefono").value;
let email = document.getElementById("email").value;
let message = document.getElementById("mensaje").value;
let valid = true;

    if(!names || !email || !tel || !message) {
        alert("Por favor complete los campos requeridos"+" el tel es: "+tel);
        valid = false;
    } else {
        if(message.length < 50) {
            alert("Por favor escriba un mensaje de al menos 50 caracteres");
            valid = false;
        } else {
            if (!validateEmail(email)) {
                alert('Por favor, ingrese un correo electrónico válido.');
                valid = false;
            } else {
                valid = true;
            }
        }
    }
    if (!valid) {

        const esperarEfecto = () => {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve();
              }, 2500);
            });
          };
      
          // Esperar el efecto y luego ocultar el div
          esperarEfecto().then(() => {
            setTimeout(() => {
                for (let i = 0; i < campoOculto.length; i++) {
                    campoOculto[i].style.display = "inline";
                }
            }, 2500); // Añade un pequeño retraso antes de ocultar completamente el div
          });
    }

    function validateEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }










    // Verificar que todos los campos sean válidos
 //   if (form.checkValidity()) {
 //       alert("Todo normal");
 //       dialogContainer.style.display = "block";
 //   } else {
      // Si algún campo no es válido, enviar el formulario normalmente
 //     alert("Todo NO normal");
 //     dialogContainer.style.display = "block";
      //form.submit();
 //   }
 });


// Cerrar la ventana de diálogo al hacer clic en el botón de cierre
closeButton.onclick = function() {
  dialogContainer.style.display = "none";
}

// Cerrar la ventana de diálogo al hacer clic fuera de ella
window.onclick = function(event) {
  if (event.target == dialogContainer) {
    dialogContainer.style.display = "none";
  }
}
