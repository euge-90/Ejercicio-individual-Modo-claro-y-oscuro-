// ================================================
// ESPERAR A QUE EL DOCUMENTO ESTÉ COMPLETAMENTE CARGADO
// ================================================

$(document).ready(function() {
    
    console.log('Portfolio de Desarrolladora .NET - JavaScript cargado correctamente');
    
    
    // ================================================
    // CAMBIO DE TEMA: MODO CLARO
    // ================================================
    
    $('#btn-claro').click(function() {
        // Quita la clase dark-mode del body
        $('body').removeClass('dark-mode');
        
        // Mensaje en consola para verificar
        console.log('✓ Modo claro activado');
        
        // Efecto visual en el botón
        $(this).addClass('pulse-animation');
        setTimeout(() => {
            $(this).removeClass('pulse-animation');
        }, 300);
        
        // Guardar preferencia en localStorage
        localStorage.setItem('theme', 'light');
    });
    
    
    // ================================================
    // CAMBIO DE TEMA: MODO OSCURO
    // ================================================
    
    $('#btn-oscuro').click(function() {
        // Agrega la clase dark-mode al body
        $('body').addClass('dark-mode');
        
        // Mensaje en consola
        console.log('✓ Modo oscuro activado');
        
        // Efecto visual en el botón
        $(this).addClass('pulse-animation');
        setTimeout(() => {
            $(this).removeClass('pulse-animation');
        }, 300);
        
        // Guardar preferencia en localStorage
        localStorage.setItem('theme', 'dark');
    });
    
    
    // ================================================
    // RECORDAR PREFERENCIA DE TEMA
    // ================================================
    
    // Al cargar la página, verificar si hay una preferencia guardada
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        $('body').addClass('dark-mode');
        console.log('✓ Tema oscuro cargado desde preferencias');
    } else {
        console.log('✓ Tema claro cargado (predeterminado)');
    }
    
    
    // ================================================
    // SCROLL SUAVE AL HACER CLIC EN ENLACES DEL MENÚ
    // ================================================
    
    $('.nav-link').click(function(e) {
        // Solo aplicar a enlaces que empiezan con #
        const href = $(this).attr('href');
        
        if (href.startsWith('#')) {
            e.preventDefault();
            
            const target = $(href);
            
            if (target.length) {
                // Scroll suave hacia la sección
                $('html, body').animate({
                    scrollTop: target.offset().top - 80 // 80px para compensar navbar fijo
                }, 800);
                
                // Cerrar el menú móvil si está abierto
                $('.navbar-collapse').collapse('hide');
            }
        }
    });
    
    
    // ================================================
    // CAMBIAR NAVBAR AL HACER SCROLL
    // ================================================
    
    $(window).scroll(function() {
        const scroll = $(window).scrollTop();
        
        if (scroll > 100) {
            $('.navbar').css('background-color', 'rgba(102, 126, 234, 1)');
            $('.navbar').css('box-shadow', '0 4px 20px rgba(0, 0, 0, 0.2)');
        } else {
            if (!$('body').hasClass('dark-mode')) {
                $('.navbar').css('background-color', 'rgba(102, 126, 234, 0.95)');
            }
            $('.navbar').css('box-shadow', '0 2px 10px rgba(0, 0, 0, 0.1)');
        }
    });
    
    
    // ================================================
    // ANIMACIÓN EN TARJETAS AL HACER HOVER
    // ================================================
    
    $('.project-card').hover(
        // Cuando entra el mouse
        function() {
            $(this).find('.project-icon').css('transform', 'scale(1.1) rotate(5deg)');
        },
        // Cuando sale el mouse
        function() {
            $(this).find('.project-icon').css('transform', 'scale(1) rotate(0deg)');
        }
    );
    
    
    // ================================================
    // VALIDACIÓN Y ENVÍO DEL FORMULARIO
    // ================================================
    
    $('#contact-form').submit(function(e) {
        // Prevenir envío normal del formulario
        e.preventDefault();
        
        // Obtener valores del formulario
        const nombre = $('#nombre').val();
        const email = $('#email').val();
        const asunto = $('#asunto').val();
        const mensaje = $('#mensaje').val();
        
        // Validación básica
        if (nombre && email && asunto && mensaje) {
            // Mostrar mensaje de éxito
            alert(`¡Gracias ${nombre}! Tu mensaje ha sido enviado correctamente.\n\nNos pondremos en contacto contigo pronto.`);
            
            // Limpiar formulario
            this.reset();
            
            // Log en consola (en producción aquí iría la llamada AJAX al servidor)
            console.log('Formulario enviado:', {
                nombre: nombre,
                email: email,
                asunto: asunto,
                mensaje: mensaje
            });
        } else {
            alert('Por favor, completa todos los campos del formulario.');
        }
    });
    
    
    // ================================================
    // ANIMACIÓN DE ENTRADA PARA ELEMENTOS
    // ================================================
    
    // Fade in de tarjetas al hacer scroll
    $(window).scroll(function() {
        $('.card').each(function() {
            const elementTop = $(this).offset().top;
            const elementBottom = elementTop + $(this).outerHeight();
            const viewportTop = $(window).scrollTop();
            const viewportBottom = viewportTop + $(window).height();
            
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('fade-in-visible');
            }
        });
    });
    
    
    // ================================================
    // EFECTO TYPEWRITER EN EL TÍTULO (OPCIONAL)
    // ================================================
    
    // Efecto de escritura
    
    const textoOriginal = $('h1 .text-accent').text();
    $('h1 .text-accent').text('');
    
    let i = 0;
    function typeWriter() {
        if (i < textoOriginal.length) {
            $('h1 .text-accent').text($('h1 .text-accent').text() + textoOriginal.charAt(i));
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    setTimeout(typeWriter, 500);
    
    
    
    // ================================================
    // CONTADOR DE VISITANTES (SIMULADO)
    // ================================================
    
    // Incrementar contador de visitas en localStorage
    let visitas = localStorage.getItem('visitas') || 0;
    visitas++;
    localStorage.setItem('visitas', visitas);
    console.log(`📊 Número de visitas: ${visitas}`);
    
    
    // ================================================
    // DETECTAR MODO OSCURO DEL SISTEMA (OPCIONAL)
    // ================================================
    
    // Si el usuario no tiene preferencia guardada, usar la del sistema
    if (!localStorage.getItem('theme')) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            $('body').addClass('dark-mode');
            console.log('✓ Modo oscuro detectado del sistema');
        }
    }
    
    
}); // Fin de document.ready


// ================================================
// FUNCIONES GLOBALES (fuera de document.ready)
// ================================================

// Función para copiar email al portapapeles
function copiarEmail() {
    const email = 'tu@email.com';
    navigator.clipboard.writeText(email).then(function() {
        alert('Email copiado al portapapeles: ' + email);
    });
}

// Función para compartir en redes sociales
function compartirEnLinkedIn() {
    const url = window.location.href;
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedinUrl, '_blank');
}