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
});*/


// Carrusel Peliculas

fetch('peliculas.json')
  .then(response => response.json())
  .then(peliculas => {
    const indicators = document.getElementById('carousel-indicators');
    const inner = document.getElementById('carousel-inner');

    const chunkSize = 3;
    const totalSlides = Math.ceil(peliculas.length / chunkSize);

    for (let i = 0; i < totalSlides; i++) {
      // botones
      const indicator = document.createElement('button');
      indicator.type = 'button';
      indicator.setAttribute('data-bs-target', '#galeriaCarouselPortada');
      indicator.setAttribute('data-bs-slide-to', i);
      if (i === 0) indicator.classList.add('active');
      indicators.appendChild(indicator);

      // 3 pelis
      const slide = document.createElement('div');
      slide.className = 'carousel-item' + (i === 0 ? ' active' : '');

      const row = document.createElement('div');
      row.className = 'row justify-content-center';

      const chunk = peliculas.slice(i * chunkSize, i * chunkSize + chunkSize);
      chunk.forEach(pelicula => {
        const col = document.createElement('div');
        col.className = 'col-md-4';
        col.innerHTML = `
          <div class="card mb-4">
            <img src="${pelicula.poster}" class="card-img-top" alt="${pelicula.titulo}">
            <div class="card-body text-center">
              <h5 class="card-title">${pelicula.titulo} (${pelicula.año})</h5>
              <p class="card-text">${pelicula.director}</p>
            </div>
          </div>
        `;
        row.appendChild(col);
      });

      slide.appendChild(row);
      inner.appendChild(slide);
    }
  })
  .catch(error => console.error('Error al cargar el JSON:', error));