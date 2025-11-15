Ejercicio individual: Modo claro y oscuro
Página Personal con Modo Claro/Oscuro
Materia: Diseño y Desarrollo Web
 Estudiante: Eugenia Ojeda
 Legajo: 1119659
Link a la página web:https://euge-90.github.io/Ejercicio-individual-Modo-claro-y-oscuro-/
Link al proyecto: https://github.com/euge-90/Ejercicio-individual-Modo-claro-y-oscuro-
 
📋 DESCRIPCIÓN DEL PROYECTO
Portfolio personal de desarrolladora .NET que incluye presentación profesional, habilidades técnicas, proyectos destacados y formulario de contacto. El sitio implementa cambio de tema entre modo claro y oscuro mediante jQuery.

📁 ESTRUCTURA DE ARCHIVOS
proyecto-portfolio/
│
├── index.html          # Estructura HTML del sitio
├── style.css           # Estilos CSS personalizados
└── script.js           # Funcionalidad con jQuery

🛠️ TECNOLOGÍAS UTILIZADAS
Tecnología
Versión
Uso
HTML5
-
Estructura semántica
CSS3
-
Estilos y diseño responsive
Bootstrap
5.3.0
Framework CSS
Bootstrap Icons
1.11.0
Iconografía
jQuery
3.6.0
Manipulación del DOM


🎨 PALETA DE COLORES
Modo Claro
Fondo: Degradado morado/azul (#667eea → #764ba2)
Navbar: Azul translúcido (rgba(102, 126, 234, 0.95))
Tarjetas: Blanco con transparencia (rgba(255, 255, 255, 0.95))
Acentos: Dorado (#ffd700)
Modo Oscuro
Fondo: Degradado oscuro (#1a1a2e → #16213e)
Navbar: Negro translúcido (rgba(26, 26, 46, 0.95))
Tarjetas: Gris oscuro (rgba(40, 40, 60, 0.9))
Texto: Blanco (#f0f0f0)

📄 SECCIONES DEL SITIO
1. Hero / Presentación
Título con nombre y profesión
Imagen de perfil circular
Descripción breve
Botones de acción (Ver Proyectos, Contactar)
2. Sobre Mí
Información educativa (UADE 2025)
Especialización (.NET)
Ubicación
Descripción profesional
3. Habilidades Técnicas (Tabla)
Tabla con 10 tecnologías:
C# (Intermedio - 2 años)
ASP.NET Core (Intermedio - 1.5 años)
SQL Server (Intermedio - 2 años)
HTML5/CSS3 (Avanzado - 3 años)
JavaScript/jQuery (Intermedio - 2 años)
Bootstrap (Avanzado - 2 años)
Git/GitHub (Intermedio - 2 años)
Entity Framework (Básico - 1 año)
REST APIs (Intermedio - 1.5 años)
Arquitectura MVC (Intermedio - 1.5 años)
4. Proyectos
6 proyectos destacados:
Sistema de E-commerce
Gestión de Personal
Aplicación de Tareas
Portfolio Personal
Blog Técnico
Sistema de Archivos Cloud
5. Contacto
Formulario con validación
Enlaces a redes sociales
GitHub, LinkedIn, Email

💻 FUNCIONALIDAD JQUERY
Cambio de Tema
Modo Claro:
javascript
$('#btn-claro').click(function() {
    $('body').removeClass('dark-mode');
    localStorage.setItem('theme', 'light');
});
Modo Oscuro:
javascript
$('#btn-oscuro').click(function() {
    $('body').addClass('dark-mode');
    localStorage.setItem('theme', 'dark');
});
Características Adicionales
Scroll suave entre secciones
Navbar cambiante al hacer scroll
Validación de formulario
Persistencia de preferencia (localStorage)
Animaciones hover en elementos
Detección automática de tema del sistema

🎨 CARACTERÍSTICAS DE DISEÑO
Bootstrap Utilizado
Grid System: Organización responsive de contenido
Navbar: Menú de navegación fixed-top
Cards: Tarjetas para proyectos e información
Table: Tabla responsive de habilidades
Forms: Formulario de contacto estilizado
Buttons: Botones con variantes y tamaños
Utilities: Clases de espaciado y alineación
CSS Personalizado
Transiciones suaves: 0.5s para cambio de tema
Degradados: Fondos atractivos con gradients
Efectos hover: Transform y box-shadow
Animaciones: Fade-in para tarjetas
Responsive: Media queries para móviles

📱 RESPONSIVE DESIGN
Breakpoints
Desktop: > 768px (diseño completo)
Mobile: ≤ 768px (adaptaciones)
Adaptaciones Móviles
Menú hamburguesa colapsable
Imagen de perfil reducida (300px)
Padding reducido en secciones
Títulos más pequeños
Tabla con scroll horizontal

✨ FUNCIONALIDADES DESTACADAS
1. Cambio de Tema
Dos botones en navbar (sol/luna)
Transiciones CSS suaves
Cambio de colores de todos los elementos
Persistencia en localStorage
2. Navegación Inteligente
Scroll suave con jQuery
Cierre automático de menú móvil
Navbar que cambia al hacer scroll
3. Interactividad
Efectos hover en todas las tarjetas
Validación de formulario
Animaciones de entrada
Feedback visual en botones
4. Persistencia
Guarda preferencia de tema
Recuerda al recargar página
Contador de visitas (localStorage)

🔧 CÓMO FUNCIONA
1. Estructura HTML
html
<nav> → Menú con botones de tema
<section id="inicio"> → Hero con imagen
<section id="sobre-mi"> → Información personal
<section id="habilidades"> → Tabla de skills
<section id="proyectos"> → Cards de proyectos
<section id="contacto"> → Formulario
<footer> → Información de copyright
2. Estilos CSS
Estilos base para modo claro
Clase .dark-mode para modo oscuro
Transiciones en body y elementos
Media queries para responsive
3. JavaScript/jQuery
Event listeners en botones de tema
Agregar/quitar clase dark-mode
Guardar preferencia en localStorage
Validación de formulario
Scroll suave

📊 MÉTRICAS DEL PROYECTO
Líneas de HTML: ~450
Líneas de CSS: ~500
Líneas de JavaScript: ~150
Secciones: 5
Proyectos mostrados: 6
Tecnologías en tabla: 10
Tiempo de desarrollo: ~6 horas

✅ VALIDACIONES
HTML
✅ Semántico (header, nav, section, footer)
✅ Atributos alt en imágenes
✅ Labels en formulario
✅ IDs únicos
CSS
✅ Separado en archivo externo
✅ Bien comentado
✅ Sin !important innecesarios
✅ Responsive design
JavaScript
✅ Separado en archivo externo
✅ jQuery correctamente implementado
✅ Console.log para debugging
✅ Código comentado

📎 ANEXOS
Enlaces de Referencia
Bootstrap 5: https://getbootstrap.com/
jQuery: https://jquery.com/
Bootstrap Icons: https://icons.getbootstrap.com/
Recursos Utilizados
Google Fonts (Poppins)
Unsplash (imagen de ejemplo)
Bootstrap CDN
jQuery CDN
 
Desarrollado con ❤️ por Eugenia Ojeda
2025

Trabajo Práctico - Diseño y Desarrollo Web
