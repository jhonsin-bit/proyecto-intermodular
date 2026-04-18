// ARCHIVO JAVASCRIPT GLOBAL DE TRADUCCIÓN BILINGÜE EN TIEMPO REAL (Lado Cliente)
// Puesto que es una simulación para Grado Medio, no usaremos complejos frameworks i18n como i18next ni recargaremos la web con PHP. Usamos lógica pura de DOM.

// FASE 1: BUSCANDO Y CAPTURANDO ELEMENTOS DEL HTML A VARIABLES CLÁSICAS (var)
// Capturamos el botón desencadenante (El que dice "Translate to English" arriba a la derecha).
var btnTranslate = document.getElementById('btn-translate');

// Capturamos los titulares base de la estructura Empresa/Valores.
var title = document.getElementById('page-title'); 
var misionTitle = document.getElementById('mision-title'); 
var misionText = document.getElementById('mision-text'); 
var visionTitle = document.getElementById('vision-title'); 
var visionText = document.getElementById('vision-text'); 

// Capturamos el listado de nuestros Valores (Eficiencia, etc).
var valoresTitle = document.getElementById('valores-title'); 
var valoresList = document.getElementById('valores-list'); 

// Capturamos la zona interactiva del perfíl del Alumno/CEO Emprendedor (IPE)
var equipoTitle = document.getElementById('equipo-title');
var equipoNombre = document.getElementById('equipo-nombre');
var equipoRol = document.getElementById('equipo-rol');
var equipoDesc = document.getElementById('equipo-desc');

// Capturamos los BLOQUES EDUCATIVOS AGILE (Scrum y Kanban) Recién incorporados al final del proyecto 
var agileTitle = document.getElementById('agile-title');
var scrumTitle = document.getElementById('scrum-title');
var scrumText = document.getElementById('scrum-text');
var kanbanTitle = document.getElementById('kanban-title');
var kanbanText = document.getElementById('kanban-text');

// FASE 2: DEFINIR EL ESTADO CERO
// Inicializamos una máquina de estados básica. El predeterminado es siempre 'es' (Español Castellano).
var idiomaActual = 'es';

// FASE 3: EL CEREBRO DEL CAMBIO (EVENT LISTENER)
// Si el botón de traducir existe en esta página en concreto donde se ejecuta el archivo...
if (btnTranslate != null) {
    // Escuchador onclick clásico inyectado directamente en el evento del Mouse.
    btnTranslate.onclick = function() {
        
        // CONDICIONAL 1: ¿Estamos en Español? Entonces el usuario quiere pasarlo a Inglés.
        if (idiomaActual === 'es') { 
            idiomaActual = 'en'; // Registramos que YA estamos en Inglés para el futuro clic inverso
            btnTranslate.textContent = 'Traducir al Español'; // Cambiamos el texto del botón al inverso.
            
            // Re-escribimos todas las cajas base (.textContent sobre-escribe letras puras, ignorando etiquetas ocultas html).
            title.textContent = 'Our Company';
            misionTitle.textContent = 'Mission';
            misionText.textContent = 'Our mission is to guide small and medium-sized enterprises in their digital transformation process, ensuring that every technological step is taken with strong environmental awareness. We audit existing processes and propose agile and sustainable solutions.';
            
            visionTitle.textContent = 'Vision';
            visionText.textContent = 'To become the benchmark firm in Green IT solutions, where technology not only optimizes businesses but also regenerates the natural environment. We aspire to a corporate future that is 100% digitized and zero emissions.';
            
            valoresTitle.textContent = 'Values';
            
            // Usamos '.innerHTML' aquí en vez de textContent, por qué en la caja Valores_list hay etiquetas HTML dentro como Negritas <strong> o Viñetas <li>. InnerHTML inyecta código que se renderizará como verdadero HTML.
            valoresList.innerHTML = `
                <li><strong>Sustainability:</strong> Environmentally conscious decisions.</li>
                <li><strong>Innovation:</strong> Use of agile methodologies (Scrum, Kanban) and cutting-edge tools.</li>
                <li><strong>Transparency:</strong> Clear and honest communication with our clients.</li>
                <li><strong>Efficiency:</strong> Optimization of technological and human resources.</li>
            `;
            
            // VALIDACIÓN CRÍTICA DE NULOS
            // Como este archivo traduccion.js es cargado, preguntamos SI existe el bloque antes de actuar con el traductor por si han borrado la caja de nuestro perfil en el backend o en el html.
            if (equipoTitle != null) {
                equipoTitle.textContent = 'Our Personal Brand & Founder';
                if (equipoNombre != null) equipoNombre.textContent = 'Jhon Jessie';
                if (equipoRol != null) equipoRol.textContent = 'Microcomputing Consultant, Networks and Eco-CEO';
                if (equipoDesc != null) equipoDesc.innerHTML = 'Leading promoter of the <strong>EcoDigital Audit</strong> platform. My core professional objective within this immense tech ecosystem is to simplify large scale cloud networks into localized tools to empower SMEs. My personal brand fiercely advocates that multiplying network efficiency and saving the planet always go hand in hand under the audacious <em>Green IT</em> banner.';
            }
            
            // Hacemos lo mismo con el Bloque gigante de metodologías Ágiles!
            if (agileTitle != null) {
                agileTitle.textContent = 'Our Agile Working Methodology (Scrum & Kanban)';
                if (scrumTitle != null) scrumTitle.textContent = 'Scrum (Development Sprints)';
                if (scrumText != null) scrumText.innerHTML = 'Both for coding this Web for the Degree and for SME-level audits, the team fragments effort into temporal <em>Sprints</em> (2-week loops). We demand a <strong>Daily Standup</strong> 15-minute briefing to expose: what we solved yesterday, what we do today, and what fatal hurdles lock the code. This injects hyper-adaptability against server downtimes.';
                if (kanbanTitle != null) kanbanTitle.textContent = 'Kanban (Visual System Flow)';
                if (kanbanText != null) kanbanText.innerHTML = 'We govern everything on a huge visual board subdivided by hierarchy (<em>To Do</em>, <em>In Progress</em>, <em>Testing</em> and <em>Done</em>). By dragging "Tickets", the management team spots bottlenecks immediately and strictly bypasses mental overload syndromes by prohibiting dozens of pieces at once (applying a fierce <em>WIP: Work in Progress</em> limit).';
            }
            
        } else {
            // CONDICIONAL INVERSO: Si estábamos en Inglés, la máquina virtual te devuelve tu web base Española nativa.
            idiomaActual = 'es';
            btnTranslate.textContent = 'Translate to English';
            
            // Reset manual de textos
            title.textContent = 'Nuestra Empresa';
            misionTitle.textContent = 'Misión';
            misionText.textContent = 'Nuestra misión es guiar a las pequeñas y medianas empresas en su proceso de transformación digital, asegurando que cada paso tecnológico se dé con una fuerte conciencia medioambiental. Auditamos los procesos existentes y proponemos soluciones ágiles y sostenibles.';
            
            visionTitle.textContent = 'Visión';
            visionText.textContent = 'Convertirnos en la firma de referencia en soluciones de Green IT, donde la tecnología no solo optimice los negocios sino que también regenere el entorno natural. Aspiramos a un futuro corporativo 100% digitalizado y cero emisiones.';
            
            valoresTitle.textContent = 'Valores';
            
            valoresList.innerHTML = `
                <li><strong>Sostenibilidad:</strong> Decisiones conscientes con el medio ambiente.</li>
                <li><strong>Innovación:</strong> Uso de metodologías ágiles (Scrum, Kanban) y herramientas de última generación.</li>
                <li><strong>Transparencia:</strong> Comunicación clara y honesta con nuestros clientes.</li>
                <li><strong>Eficiencia:</strong> Optimización de recursos tecnológicos y humanos.</li>
            `;
            
            if (equipoTitle != null) {
                equipoTitle.textContent = 'Nuestra Marca Personal y Equipo';
                if (equipoNombre != null) equipoNombre.textContent = 'Jhon Jessie';
                if (equipoRol != null) equipoRol.textContent = 'Consultor de Microinformática, Redes y CEO / Director Sostenible';
                if (equipoDesc != null) equipoDesc.innerHTML = 'Impulsor líder de la plataforma <strong>EcoDigital Audit</strong>. Mi objetivo profesional clave dentro de este inmenso ecosistema de tecnología es simplificar macro red de servidores cloud a pequeña escala para dotar a las PYMES de gran poder. Mi marca personal defiende con uñas y dientes que multiplicar los beneficios de red y salvar el planeta siempre marchan ligados de la mano si actúas bajo la etiqueta auditable <em>Green IT</em>.';
            }
            
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
