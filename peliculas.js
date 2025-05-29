
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
