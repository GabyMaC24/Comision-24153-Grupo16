// Obtener referencias a los elementos
let dialogContainer = document.getElementById("dialogContainer");
let closeButton = document.getElementsByClassName("close-button")[0];
let submitButton = document.getElementById("submitButton");
let form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let campoOculto = document.getElementsByClassName("campoObligatorio");
    let valid = true;

    let names = document.getElementById("nombre").value;
    let tel = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("mensaje").value;


    if (!names || !email || !tel || !message) {
        valid = false;
    } else {
        if (message.length < 50) {
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
             submitButton.classList.add("button-container-moved"); //

        for (let i = 0; i < campoOculto.length; i++) {
            //submitButton.classList.add("button-container-moved"); //
            campoOculto[i].classList.add("visible");
            campoOculto[i].style.display ="inline";
        }
        setTimeout(function() {
            for (let i = 0; i < campoOculto.length; i++) {
                campoOculto[i].classList.remove("visible");
                campoOculto[i].style.display ="none";
                submitButton.classList.remove("button-container-moved"); //
            }
        }, 3000);

    } else {
        //alert('envio formulario');
        //form.submit();
        dialogContainer.style.display = "block";
    }

    function validateEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});

// Cerrar la ventana de diálogo al hacer clic en el botón de cierre
closeButton.onclick = function () {
    dialogContainer.style.display = "none";
}

// Cerrar la ventana de diálogo al hacer clic fuera de ella
// window.onclick = function (event) {
//     if (event.target == dialogContainer) {
//         dialogContainer.style.display = "none";
//     }
// }
