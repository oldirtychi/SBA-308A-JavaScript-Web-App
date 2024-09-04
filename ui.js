import { fetchMovies, addFavorite } from './api.js';

export function renderMovies(movies) {
  const gallery = document.getElementById('movie-gallery');
  gallery.innerHTML = movies.map(movie => `
    <div class="movie">
      <h3>${movie.Title}</h3>
      <p>${movie.Year}</p>
      <button data-id="${movie.imdbID}" class="add-favorite">Add to Favorites</button>
    </div>
  `).join('');
}

export function setupEventListeners() {
  document.getElementById('search-form').addEventListener('submit', handleSearch);
  document.getElementById('movie-gallery').addEventListener('click', handleAddFavorite);
}

async function handleSearch(event) {
  event.preventDefault();
  const query = document.getElementById('search-input').value;
  console.log('Searching for:', query); // Debugging
  const movies = await fetchMovies(query);
  if (movies && movies.Search) {
    renderMovies(movies.Search);
  } else {
    console.error('No movies found or error in fetching movies');
  }
}

async function handleAddFavorite(event) {
  if (event.target.classList.contains('add-favorite')) {
    const movieId = event.target.dataset.id;
    console.log('Adding favorite movie ID:', movieId); // Debugging
    const movie = await fetchMovies(movieId);
    if (movie) {
      await addFavorite(movie);
    } else {
      console.error('Error in fetching movie details');
    }
  }
}
