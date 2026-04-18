// Vale, aquí empezamos el archivo de traducción, el que cambia la web a inglés cuando le das al botón superior.
// No usamos nada raro ni moderno (así cumplimos para el de Grado Medio), todo puro Javascript y cambiar textito a textito a fuego en html de base total

// PASO 1: Atrapar las cosas de la pantalla
// Pillo el botón de traducir buscando la ID que le pusimos en el HTML y lo meto al cajón (variable) 'btnTranslate'
var btnTranslate = document.getElementById('btn-translate');

// Voy pillando toda la columna vertebral de textos de Mision y Vision uno a uno
var title = document.getElementById('page-title'); 
var misionTitle = document.getElementById('mision-title'); 
var misionText = document.getElementById('mision-text'); 
var visionTitle = document.getElementById('vision-title'); 
var visionText = document.getElementById('vision-text'); 

// De Valores pesco tanto el título como la caja donde está la lista entera (porque la vamos a borrar e inyectar de cero)
var valoresTitle = document.getElementById('valores-title'); 
var valoresList = document.getElementById('valores-list'); 

// Lo mísmo para el bloque de mi marca personal IPE
var equipoTitle = document.getElementById('equipo-title');
var equipoNombre = document.getElementById('equipo-nombre');
var equipoRol = document.getElementById('equipo-rol');
var equipoDesc = document.getElementById('equipo-desc');

// Aquí pesco toda la parte de los tochos de temario Ágil de metodologías (que me pediste que añadiese al final de tu proyecto base)
var agileTitle = document.getElementById('agile-title');
var scrumTitle = document.getElementById('scrum-title');
var scrumText = document.getElementById('scrum-text');
var kanbanTitle = document.getElementById('kanban-title');
var kanbanText = document.getElementById('kanban-text');

// PASO 2: Variables predeterminadas
// Partimos del hecho de que cuando la gente abre la página, la web está en Español natural.
var idiomaActual = 'es';

// PASO 3: Darle vida al botón
// Ojito: "Si este botón realmente existe en la página donde estoy..." (evita que javascript cruja si el HTML no tiene el botón o no ha cargado bien el visual puro)
if (btnTranslate != null) {
    
    // Le digo "Oye botón, cuando yo te haga un clic exacto encima, arranca esta función"
    btnTranslate.onclick = function() {
        
        // EL CRUCE DE IDIOMA
        // Si el idioma actual de mi variable resulta que está seteada de antes en Español ('es')...
        if (idiomaActual === 'es') { 
            idiomaActual = 'en'; // Pues chiquillo cámbiame el estado a Inglés
            btnTranslate.textContent = 'Traducir al Español'; // Y por favor, cambia también las letras de dentro del botón para que yo sepa volver!
            
            // Re-escribiendo todo con textContent, que borra el texto de turno visual y pisa uno nuevo a saco
            title.textContent = 'Our Company';
            misionTitle.textContent = 'Mission';
            misionText.textContent = 'Our mission is to guide small and medium-sized enterprises in their digital transformation process, ensuring that every technological step is taken with strong environmental awareness. We audit existing processes and propose agile and sustainable solutions.';
            
            visionTitle.textContent = 'Vision';
            visionText.textContent = 'To become the benchmark firm in Green IT solutions, where technology not only optimizes businesses but also regenerates the natural environment. We aspire to a corporate future that is 100% digitized and zero emissions.';
            
            valoresTitle.textContent = 'Values';
            
            // Fíjate, aquí uso ".innerHTML" en vez de textContent. 
            // Por qué? Porque mi lista original de HTML tiene cositas como <strong> (Para hacer letras gordas) y <li>. Si uso textContent esto lo imprimiría literalmente como texto en pantalla en vez de ponerte una lista real, quedaría chapucero total en tu vista.
            valoresList.innerHTML = `
                <li><strong>Sustainability:</strong> Environmentally conscious decisions.</li>
                <li><strong>Innovation:</strong> Use of agile methodologies (Scrum, Kanban) and cutting-edge tools.</li>
                <li><strong>Transparency:</strong> Clear and honest communication with our clients.</li>
                <li><strong>Efficiency:</strong> Optimization of technological and human resources.</li>
            `;
            
            // IMPORTANTE, le clavo condicionales "!= null" a todo por separado antes de traducirlo. 
            // Por si el día de mañana los profes borran el bloque IPE en HTML probando a romper mi código... 
            // no me saltarán fallos mortales del traductor y seguirá yendo.
            if (equipoTitle != null) {
                equipoTitle.textContent = 'Our Personal Brand & Founder';
                if (equipoNombre != null) equipoNombre.textContent = 'Jhon Jessie';
                // Si existe el Rol, lo cambia, etc.
                if (equipoRol != null) equipoRol.textContent = 'Microcomputing Consultant, Networks and Eco-CEO';
                if (equipoDesc != null) equipoDesc.innerHTML = 'Leading promoter of the <strong>EcoDigital Audit</strong> platform. My core professional objective within this immense tech ecosystem is to simplify large scale cloud networks into localized tools to empower SMEs. My personal brand fiercely advocates that multiplying network efficiency and saving the planet always go hand in hand under the audacious <em>Green IT</em> banner.';
            }
            
            // Protegiendo y traduciendo la Caja inferior metodológica de Agile total
            if (agileTitle != null) {
                agileTitle.textContent = 'Our Agile Working Methodology (Scrum & Kanban)';
                if (scrumTitle != null) scrumTitle.textContent = 'Scrum (Development Sprints)';
                if (scrumText != null) scrumText.innerHTML = 'Both for coding this Web for the Degree and for SME-level audits, the team fragments effort into temporal <em>Sprints</em> (2-week loops). We demand a <strong>Daily Standup</strong> 15-minute briefing to expose: what we solved yesterday, what we do today, and what fatal hurdles lock the code. This injects hyper-adaptability against server downtimes.';
                if (kanbanTitle != null) kanbanTitle.textContent = 'Kanban (Visual System Flow)';
                if (kanbanText != null) kanbanText.innerHTML = 'We govern everything on a huge visual board subdivided by hierarchy (<em>To Do</em>, <em>In Progress</em>, <em>Testing</em> and <em>Done</em>). By dragging "Tickets", the management team spots bottlenecks immediately and strictly bypasses mental overload syndromes by prohibiting dozens of pieces at once (applying a fierce <em>WIP: Work in Progress</em> limit).';
            }
            
        } else {
            // EL CRUCE DE VUELTA DE CHIP INTERNACIONAL BASE
            // Bueno, y si el idioma que he leído resulta que no era Español sino Inglés?
            // Pues la operación que tengo que hacer te la devuelvo al Español y pongo el botón a "Translate..."
            idiomaActual = 'es';
            btnTranslate.textContent = 'Translate to English';
            
            // Volvemos a pisar todas las variables html de pantalla con la verborrea original visual esmeralda
            title.textContent = 'Nuestra Empresa';
            misionTitle.textContent = 'Misión';
            misionText.textContent = 'Nuestra misión es guiar a las pequeñas y medianas empresas en su proceso de transformación digital, asegurando que cada paso tecnológico se dé con una fuerte conciencia medioambiental. Auditamos los procesos existentes y proponemos soluciones ágiles y sostenibles.';
            
            visionTitle.textContent = 'Visión';
            visionText.textContent = 'Convertirnos en la firma de referencia en soluciones de Green IT, donde la tecnología no solo optimice los negocios sino que también regenere el entorno natural. Aspiramos a un futuro corporativo 100% digitalizado y cero emisiones.';
            
            valoresTitle.textContent = 'Valores';
            
            // De nuevo respetamos la maquetación HTML base pura usando innerHTML bruto
            valoresList.innerHTML = `
                <li><strong>Sostenibilidad:</strong> Decisiones conscientes con el medio ambiente.</li>
                <li><strong>Innovación:</strong> Uso de metodologías ágiles (Scrum, Kanban) y herramientas de última generación.</li>
                <li><strong>Transparencia:</strong> Comunicación clara y honesta con nuestros clientes.</li>
                <li><strong>Eficiencia:</strong> Optimización de recursos tecnológicos y humanos.</li>
            `;
            
            // Revertimos el bloque de tu IPE marca corporativa
            if (equipoTitle != null) {
                equipoTitle.textContent = 'Nuestra Marca Personal y Equipo';
                if (equipoNombre != null) equipoNombre.textContent = 'Jhon Jessie';
                if (equipoRol != null) equipoRol.textContent = 'Consultor de Microinformática, Redes y CEO / Director Sostenible';
                if (equipoDesc != null) equipoDesc.innerHTML = 'Impulsor líder de la plataforma <strong>EcoDigital Audit</strong>. Mi objetivo profesional clave dentro de este inmenso ecosistema de tecnología es simplificar macro red de servidores cloud a pequeña escala para dotar a las PYMES de gran poder. Mi marca personal defiende con uñas y dientes que multiplicar los beneficios de red y salvar el planeta siempre marchan ligados de la mano si actúas bajo la etiqueta auditable <em>Green IT</em>.';
            }
            
            // Y de vuelta el texto de metolología base agil
            if (agileTitle != null) {
                agileTitle.textContent = 'Nuestra Metodología Ágil (Scrum & Kanban)';
                if (scrumTitle != null) scrumTitle.textContent = 'Scrum (Sprints de Desarrollo)';
                if (scrumText != null) scrumText.innerHTML = 'Tanto a la hora de codificar esta web para el Grado como para las auditorías a nivel PYME, el equipo fragmenta el esfuerzo en <em>Sprints</em> temporales (ciclos de trabajo de 2 semanas). Exigimos una <strong>Daily Standup</strong> o reunión matinal diaria breve de 15 minutos exactos para exponer: qué resolvimos ayer, qué tocaremos hoy y qué obstáculos fatales bloquean el código. Esto nos inyecta una hiper-adaptabilidad frente a las caídas del servidor.';
                if (kanbanTitle != null) kanbanTitle.textContent = 'Kanban (Flujo de Sistema Visual)';
                if (kanbanText != null) kanbanText.innerHTML = 'Gobernamos todo en un gran tablero visual subdividido por jerarquía (<em>To Do</em>, <em>In Progress</em>, <em>Testing</em> y <em>Done</em>). Gracias a arrastrar post-its o "Tickets" el equipo directivo localiza cuellos de botella inmediatamente y elude de forma estricta los síndromes por sobrecarga mental prohibiendo tener docenas de piezas a la vez (lo que llamamos fijar un límite férreo de <em>WIP: Work in Progress</em>).';
            }
        } 
    };
}
