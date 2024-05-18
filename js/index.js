document.addEventListener('DOMContentLoaded', function() {
    // Seleccionamos todos los botones con la clase 'btnPedido'
    const botonesPedido = document.querySelectorAll('button');

    // Iteramos sobre cada botón y le agregamos un listener para el evento click
    botonesPedido.forEach((boton, indice) => {
        boton.addEventListener('click', () => {
            // Simplemente imprimimos en consola un mensaje para demostrar que se ha hecho clic en un botón
            console.log(`Se ha hecho clic en el botón de la promoción ${indice + 1}`);
            // Aquí puedes agregar la lógica necesaria para cada botón, como enviar una solicitud al servidor
        });
    });
}); 



