document.addEventListener('DOMContentLoaded', function() {
    const btnSi = document.getElementById('btnSi');
    const btnNo = document.getElementById('btnNo');
    const carta = document.getElementById('carta');
    const header = document.querySelector('header');
    const pregunta = document.getElementById("pregunta");
    const botonSiguiente = document.getElementById("boton-siguiente");
    const mensajeFinal = document.getElementById("mensajeFinal");

    // Mostrar la carta al presionar "Sí" desde el encabezado
    btnSi.addEventListener('click', function() {
        // Ocultar el encabezado y mostrar la carta
        header.style.display = 'none';
        carta.style.display = 'block';
        
        // Mostrar el botón "Seguir descubriendo" después de un breve retardo (para dar tiempo a que se vea la carta)
        setTimeout(function() {
            botonSiguiente.style.display = 'block';
        }, 500); // Aparece después de medio segundo
    });

    // Lógica para el botón "No" en el encabezado
    btnNo.addEventListener('mouseenter', function() {
        btnNo.style.position = 'absolute';
        btnNo.style.top = Math.random() * 80 + '%';
        btnNo.style.left = Math.random() * 80 + '%';
    });
    btnNo.addEventListener('click', function() {
        alert('Entiendo, ¡gracias por tu honestidad!');
    });

    // Mostrar pregunta final al hacer clic en el botón "Seguir descubriendo"
    botonSiguiente.addEventListener("click", function() {
        carta.style.display = 'none';
        pregunta.style.display = 'block';
    });

    // Botón "No" que no funcionará
    document.getElementById("btnNoFake").addEventListener("click", function(event) {
        event.preventDefault();
        alert("No hay otra opción para mí más que tú."); // Mensaje al intentar presionar "No"
    });

    // Al presionar el "Sí" de la pregunta final, se muestra el mensaje final
    document.getElementById("btnYes").addEventListener("click", function() {
        // Ocultar la pregunta final y mostrar la última sección
        pregunta.style.display = 'none';
        mensajeFinal.style.display = 'block';
    });
});
