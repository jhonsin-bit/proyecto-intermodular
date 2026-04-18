// Archivo Javascript Controlador Maestro Global de Sesiones del usuario en activo local (Mantiene la puerta cerrada para los humanos ajenos al CEO).

// Regla cardinal 1: Jamás leas un átomo de documento (DOM) si no ha terminado la página web de 'nacer' primero. AddEventListener del estado de carga nos defiende frente a errores de lectura o lag en internet de cables coaxiales del jurásico donde el javascript va primero antes del diseño final visual html real bruto.
document.addEventListener('DOMContentLoaded', function() {
    
    // Escaneamos la Memoria Ram Oculta del navegador Web (Ej: Tu Edge/Safari de Windows) a ver si hay algún archivo chiquitito o variable permanente incauta llamada "usuario_logueado" (Que solo la crea nuestro script de login.js cuando la gente acierta '123456' y 'jhon...'). Guardamos la respuesta del navegador en una variable nuestra 'sessionCheck'.
    var sessionCheck = localStorage.getItem('usuario_logueado');
    
    // Capturamos la caja del enchufe derecho del Navegador del Header, esa caja o div agrupadora bautizada como "nav-actions", donde de normal ponía un triste botón solitario verde de 'Acceder'
    var navActions = document.querySelector('.nav-actions');

    // EXIGIMOS SEGURIDAD:
    // ¿Me ha devuelto la máquina un 'true' (Verdadero, JhonJessie ha validado pase por Login) Y el botoncito de Log in no ha saltado errores por no existir en la página? ((!= null))
    if (sessionCheck === 'true' && navActions != null) {
        
        // ¡Magia Pura Invasiva! 
        // Usamos '.innerHTML' para dinamitar atómicamente todo lo que hubiese escrito en el HTML entre medias de <div class="nav-actions"> ... </div>, e inyectar de golpe a portagayola y a la fuerza todo este código falso de saludo corporativo por pantalla, pisando letalmente al Botón anterior antiguo.
        navActions.innerHTML = `
            <div class="flex-center-gap align-center">
                <span class="greeting-text">Hola, Jhon</span>
                <!-- Le ponemos ahora aquí a cambio un mini botoncito maleducado para sacarte del servicio local host -->
                <button id="logout-btn" class="btn btn-secondary btn-sm-padding">Cerrar Sesión</button>
            </div>
        `;

        // Ahora que nos hemos inventado inyectando en vivo este html mágico desde nuestro JS con el botón, capturamos ese puto botón nuevo recién nacido ('logout-btn') usando el comando var clásico y el cazador puro GetElement.
        var logoutBtn = document.getElementById('logout-btn');
        
        // Si no dio errores fantasma... 
        if (logoutBtn != null) {
            
            // Programamos el Evento al vuelo ('onclick')! Cuando Jhon pulse sobre el maleducado boton de Salida Corporativa..
            logoutBtn.onclick = function() {
                // Sacamos la goma de borrar industrial pesada, y fulminamos del Navegador la cookie estancada en ram que dectaba a Jhon en todo el ordenador bloqueandolo... 
                localStorage.removeItem('usuario_logueado');
                // Al hacerlo inmortal de nuevo (no-logueado), le echamos brutalmente de cabeza contra el escaparate index.html principal de invitados pobres, forzando un refresco total de la pagina purgado absoluto con el local href de windows browser interface básico local universal en web de JS puro antiguo sin framework ni rollos posmodernos absurdos react
                window.location.href = 'index.html';
            };
        }
    }
});
