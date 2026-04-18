// Archivo de Javascript Básico: Lógica estricta de validación del formulario de Login local (Falso backend para Grado Medio).

// 'document.addEventListener' le dice al navegador: "Espera a que todo el código HTML de la página haya sido descargado e interpretado ('DOMContentLoaded'), antes de enchufar mi código de programación, así no se romperá porque algo no esté cargado aún".
document.addEventListener('DOMContentLoaded', function() {
    
    // Declaración Clásica de Variables 'var': Capturamos el formulario entero en memoria RAM buscando en el HTML algo que tenga el ID igual a 'login-form'.
    var loginForm = document.getElementById('login-form');
    
    // Siempre usamos un detector 'IF' prevencional de seguridad. Si loginForm es distito a NULO (!= null), es decir, ESTOY en la página correcta que tiene formulario, entonces haz la magia. Si estoy en otra página, descansa.
    if (loginForm != null) {
        
        // Le atamos un 'escuchador de eventos' (addEventListener) al formulario. Le decimos: "Quédate esperando eternamente hasta que alguien haga CLICK en el botón de Enviar ('submit')" de ese formulario.
        loginForm.addEventListener('submit', function(event) {
            
            // LA LÍNEA MÁS VITAL FRONT-END: 'event.preventDefault()' cancela el recargo de Chrome que te sube arriba de la página, perdiendo el estado local. Paramos el tiempo y el envío HTTP a internet nativo, y controlamos el destino de forma manual nosotros con Código JS en frío puro.
            event.preventDefault(); 

            // Una vez cazado el Entero del envío, sacamos la Lupa. Capturamos en memoría física el bloque de Email y el de clave password buscando sus Identificadores desde el texto puro del HTML base nativo.
            var emailInput = document.getElementById('email');
            var passwordInput = document.getElementById('password');
            // Y capturamos el párrafo de mensaje rojo feo de error criminal del inicio.
            var errorMsg = document.getElementById('error-msg');

            // Limpiamos los bloques. No nos interesa el bloque o caja de HTML, lo que nos interesa es LO QUE EL CRÁNEO DEL HUMANO ha picado con teclado en el input. Extraemos ese texto sagrado con ".value" al final.
            var valMail = emailInput.value;
            var valPass = passwordInput.value;

            // EL MOTOR DE DEFENSA CENTRAL CIBERNÉTICA
            // "Si el mail introducido es exactamente (===) 'jhon@aurumdux.com' Y (&&) si la clave picada es exactamente (===) la sagrada clave '123456'"
            if (valMail === 'jhon@aurumdux.com' && valPass === '123456') {
                
                // Si tienes suerte y has tecleado tú: Inyectamos en la Memoria Dura del Navegador Local de la Máquina del usuario (localStorage), incrustando una cookie permanente 'usuario_logueado' con bandera luz verde ('true').
                localStorage.setItem('usuario_logueado', 'true');
                
                // Teletransportación por Javascript forzando al navegador a ir corriendo a Index (Redirección nativa front)
                window.location.href = 'index.html'; 
                
            } else {
                
                // SI HAS FALLADO, castigado. Cogemos el Párrafito rojo de Letras y encriptamos la etiqueta display a 'block' para desdibujarlo de las sombras CSS, haciéndolo visible al 100% sobre el usuario infame en pantalla asustándolo de por vida.
                errorMsg.style.display = 'block'; 
            }
        });
    }
});
