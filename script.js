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

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll); // Para cargar las que están en pantalla al inicio

// Modal para ampliar imágenes
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');

document.querySelectorAll('.carousel-image').forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = img.src;
    });
});

function closeModal() {
    modal.style.display = 'none';
}

// Cerrar el modal al hacer clic fuera de la imagen
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});
