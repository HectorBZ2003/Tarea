// Funcionalidades comunes para todas las páginas

// Función para mostrar la fecha actual
function mostrarFecha() {
    const fecha = new Date();
    const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return fecha.toLocaleDateString('es-ES', opciones);
}

// Función para inicializar elementos comunes
document.addEventListener('DOMContentLoaded', function() {
    // Agregar fecha actual al footer si existe
    const footer = document.querySelector('footer');
    if (footer) {
        const fechaElement = document.createElement('div');
        fechaElement.textContent = `Hoy es ${mostrarFecha()}`;
        fechaElement.style.textAlign = 'center';
        fechaElement.style.marginTop = '20px';
        fechaElement.style.padding = '10px';
        fechaElement.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        fechaElement.style.borderRadius = '5px';
        footer.appendChild(fechaElement);
    }
    
    // Efecto de escritura para títulos principales
    const titulos = document.querySelectorAll('h1');
    titulos.forEach(titulo => {
        const textoOriginal = titulo.textContent;
        titulo.textContent = '';
        
        let i = 0;
        const escribir = () => {
            if (i < textoOriginal.length) {
                titulo.textContent += textoOriginal.charAt(i);
                i++;
                setTimeout(escribir, 100);
            }
        };
        
        escribir();
    });
});

// Función para validar números
function esNumeroValido(valor) {
    return !isNaN(valor) && valor !== null && valor !== '';
}

// Función para formatear números
function formatearNumero(numero) {
    return Number(numero).toLocaleString('es-ES');
}
