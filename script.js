// script.js

// Efecto de aparición de las tarjetas al hacer scroll
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

// Event listeners para cargar el efecto de aparición
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll); // Para cargar las tarjetas visibles al inicio

// Funcionalidad del modal para ampliar imágenes en 'Teaching & Outreach'
const imageModal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');

// Verificar si el modal existe en la página actual
if (imageModal) {
    // Agregar eventos a las imágenes del carrusel
    document.querySelectorAll('.carousel-image').forEach(img => {
        img.addEventListener('click', () => {
            imageModal.style.display = 'block';
            modalImg.src = img.src;
        });
    });

    // Función para cerrar el modal
    function closeModal() {
        imageModal.style.display = 'none';
    }

    // Agregar evento al botón de cerrar
    const closeBtn = document.querySelector('.modal .close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Cerrar el modal al hacer clic fuera de la imagen
    window.addEventListener('click', (e) => {
        if (e.target === imageModal) {
            closeModal();
        }
    });
}

// Funcionalidad para 'Personal Notes' (opcional)
// Si deseas agregar efectos de animación o interactividad en 'Personal Notes', puedes incluir el siguiente código:

document.addEventListener('DOMContentLoaded', function () {
    const noteCards = document.querySelectorAll('.note-card');

    // Animación de aparición de las tarjetas
    noteCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('show');
        }, index * 100);
    });

    // Si implementas alguna funcionalidad adicional, agrégala aquí
});
