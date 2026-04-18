// Este archivo es el cerebrito global que hace que la web reaccione cuando te paseas por ella (comprobaciones de sesión de header).

// Como siempre, bloqueamos cualquier intento de JS de arrancar hasta que toda la interfaz base (HTML) esté operativa en pantalla al completo.
document.addEventListener('DOMContentLoaded', function() {
    
    // Abrimos el maletero del navegador del tipo que ha entrado, el Storage local, y comprobamos
    // si ese chivato llamado "usuario_logueado" (que pusimos en login.js) existe y es True. Nos da su estado para seguir currando.
    var sessionCheck = localStorage.getItem('usuario_logueado');
    
    // Identificamos el rincón de la derecha de nuestra franjita de menú superior donde van siempre nuestros botoncitos verdes "Acceder"
    var navActions = document.querySelector('.nav-actions');

    // SI Y SOLO SI, el colega tiene el pase activo (true en sessioncheck localStorage chivato true bool condition base local false falso)... Y SI POR SUPUESTO existe la esquina derecha superior de botones de la pagina 
    if (sessionCheck === 'true' && navActions != null) {
        
        // Cogemos el interior .innerHTML de nuestra esquina derecha, borramos ese botón verde que decía "Acceder" (porque ya estás, carajito) y clavamos sin compasión todo este bloque falso de "Hola, Jhon".
        navActions.innerHTML = `
            <div class="flex-center-gap align-center">
                <span class="greeting-text">Hola, Jhon</span>
                <!-- Te clavo ahora un botoncejo auxiliar secundario solo para sacarte de aquí luego -->
                <button id="logout-btn" class="btn btn-secondary btn-sm-padding">Cerrar Sesión</button>
            </div>
        `;

        // Enganchamos a la memoria justo ese botón nuevecito recién cocinado que hace su primera aparición ("Cerrar Sesión") 
        var logoutBtn = document.getElementById('logout-btn');
        
        // Validación obligatorial, si el botón de ahí arriba funciona de verdad en el pantallazo visual..
        if (logoutBtn != null) {
            
            // ¿Qué pasa cuando Jhon pulse sobre Salida ("Click")?
            logoutBtn.onclick = function() {
                // Sencillo, barremos con lejía industrial desde localStorage del disco eliminando a la variable local de true pase...
                localStorage.removeItem('usuario_logueado');
                // Al quedarte sin pase VIP (logueo caído), forzamos reinicio hacia nuestra home web (index base), que leerá que no lo tienes y te dejará de invitado de nuevo visual sin pase base..
                window.location.href = 'index.html';
            };
        }
    }
});
