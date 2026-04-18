// Aquí empezamos la lógica detrás del login de prueba que nos montamos para el Grado.

// ¿Qué hace esto? document.addEventListener('DOMContentLoaded', ...) le dice al archivo:
// "Ey, no corras ninguna línea hasta que toda la página web (el HTML) esté 100% cargada y lista".
// Así evitamos fallos donde nuestro código intenta atrapar cajas del html que todavía no nacieron en la pantalla.
document.addEventListener('DOMContentLoaded', function() {
    
    // Primero, me guardo en la variable loginForm nuestro formulario entero que hay en el HTML.
    var loginForm = document.getElementById('login-form');
    
    // Comprobamos siempre si esa caja existe (si no es 'null').
    // Esto es un salvavidas: si un profesor está viendo index.html e importa por error este archivo, no pegará crasheos.
    if (loginForm != null) {
        
        // Cazo el momento exacto donde el humano pulsa "Enviar" en el logueo
        loginForm.addEventListener('submit', function(event) {
            
            // SUPER IMPORTANTE: event.preventDefault(). El formulario de html cuando das a enter quiere forzar 
            // a que la web salte o recargue como posesa. Poniendo esto evitamos esa recarga y retenemos nosotros el control puro con javascript.
            event.preventDefault(); 

            // Cazo las dos cajas donde el que usa mi app acaba de meter algo picando a mano en su teclado.
            var emailInput = document.getElementById('email');
            var passwordInput = document.getElementById('password');
            // Y atascamos el pequeño texto oculto del mensajillo rojo que asustaría si el user se equivoca de letritas.
            var errorMsg = document.getElementById('error-msg');

            // Sacamos un extracto directo real de "qué palabras introdujo el tío"
            var valMail = emailInput.value;
            var valPass = passwordInput.value;

            // EL GRAN ACIERTO: Nuestra barrera de seguridad de chicha y nabo js base falsa :)
            // Validamos a mano con "===" si el email introducido es idéntico a jhon, y si la contraseña es literalmente 123456
            if (valMail === 'jhon@aurumdux.com' && valPass === '123456') {
                
                // localStorage es brutal. Sirve para incrustarle a las entrañas del Google Chrome del que nos visita,
                // un guardado interno o "chivato", dictaminando en true que JhonJessie ha validado pase VIP por el login
                localStorage.setItem('usuario_logueado', 'true');
                
                // Mando a nuestro recién bautizado rey de vuelta al índice saltando al inicio con redirect front-end manual js .href web location local
                window.location.href = 'index.html'; 
                
            } else {
                
                // Oye, que fallaron, el mail o pasword no coincide, pues cambiamos el CSS block display ocultable feo y lo mostramos como amenaza!
                errorMsg.style.display = 'block'; 
            }
        });
    }
});
