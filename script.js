// Función para iniciar el contador
function startCountdown() {
    // Fecha de destino para el contador
    var countDownDate = new Date("Aug 1, 2024 00:00:00").getTime();
    
    // Actualizar el contador cada 1 segundo
    var x = setInterval(function() {
        // Obtener la fecha y hora actual
        var now = new Date().getTime();

        // Calcular la diferencia entre ahora y la fecha de destino
        var distance = countDownDate - now;

        // Calcular el tiempo restante en días, horas, minutos y segundos
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Formatear con ceros iniciales si es necesario
        hours = ("0" + hours).slice(-2);
        minutes = ("0" + minutes).slice(-2);
        seconds = ("0" + seconds).slice(-2);

        // Mostrar el resultado en el elemento con id="countdown"
        document.getElementById("countdown").innerHTML = days + " DAYS " + hours + ":" + minutes + ":" + seconds;

        // Si la cuenta atrás ha terminado, mostrar un mensaje
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
    }, 1000);
}

// Iniciar el contador al cargar la página
window.onload = startCountdown;