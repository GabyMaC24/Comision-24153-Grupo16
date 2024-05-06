// Obtener referencias a los elementos
let dialogContainer = document.getElementById("dialogContainer");
let closeButton = document.getElementsByClassName("close-button")[0];
let submitButton = document.getElementById("submitButton");
let form = document.getElementById("contactForm");

// Mostrar la ventana de diálogo al hacer clic en el botón "Enviar"
// submitButton.addEventListener("click", function() {
//   dialogContainer.style.display = "block";
// });

  // Mostrar la ventana de diálogo al enviar el formulario si los campos son válidos
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario

    // Verificar que todos los campos sean válidos
    if (form.checkValidity()) {
        alert("Todo normal");
        dialogContainer.style.display = "block";
    } else {
      // Si algún campo no es válido, enviar el formulario normalmente
      alert("Todo NO normal");
      dialogContainer.style.display = "block";
      //form.submit();
    }
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
