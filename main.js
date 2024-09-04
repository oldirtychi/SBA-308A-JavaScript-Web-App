import { fetchMovies, addFavorite, updateFavorite, deleteFavorite } from './api.js';
import { renderMovies, setupEventListeners } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
});
