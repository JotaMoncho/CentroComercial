document.addEventListener('DOMContentLoaded', function () {
    let form = document.querySelector('form');
    let email = document.getElementById('email');
    let emailConfirm = document.getElementById('emailConfirm');

    form.addEventListener('submit', function (e) {

        if (email.value !== emailConfirm.value) {
            alert('Los correos electrónicos no coinciden.');
            e.preventDefault();
            return;
        }

        let confirmar = confirm('¿Estás seguro de que quieres enviar el formulario?');
        
        if (!confirmar) {
            e.preventDefault();
        }
    });
});


/*
// Ejemplo de abrir modal con JS puro
document.querySelectorAll('.logo-container a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetModal = document.querySelector(this.getAttribute('data-bs-target'));
    if (targetModal) new bootstrap.Modal(targetModal).show();
  }
  );
});

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    if (carousel && prevButton && nextButton) {
        fetch('json.json')
            .then(response => response.json())
            .then(data => {
                let currentIndex = 0;

                function renderCarousel() {
                    carousel.innerHTML = '';
                    data.forEach((movie, index) => {
                        const div = document.createElement('div');
                        div.className = 'carousel-item';
                        if (index === currentIndex) {
                            div.classList.add('active');
                        }

                        const img = document.createElement('img');
                        img.src = `imagenes/pelis/${index + 1}.jpg`;
                        img.alt = movie.title;
                        img.className = 'carousel-poster';

                        const title = document.createElement('h3');
                        title.textContent = movie.title;
                        title.className = 'carousel-title';

                        div.appendChild(img);
                        div.appendChild(title);
                        carousel.appendChild(div);
                    });
                }

                function moveCarousel(direction) {
                    currentIndex = (currentIndex + direction + data.length) % data.length;
                    renderCarousel();
                }

                prevButton.addEventListener('click', () => moveCarousel(-1));
                nextButton.addEventListener('click', () => moveCarousel(1));

                renderCarousel();
            })
            .catch(error => console.error('Error loading JSON:', error));
    }
}); */