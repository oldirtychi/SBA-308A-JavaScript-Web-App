const API_KEY = 'dead992e';
const BASE_URL = 'http://www.omdbapi.com/';

export async function fetchMovies(query, page = 1) {
  try {
    const response = await fetch(`${BASE_URL}?s=${query}&page=${page}&apikey=${API_KEY}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
}

export async function addFavorite(movie) {
  try {
    const response = await fetch('/favorites', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(movie),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error('Error adding favorite:', error);
  }
}

export async function updateFavorite(movieId, updatedData) {
  try {
    const response = await fetch(`/favorites/${movieId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error('Error updating favorite:', error);
  }
}

export async function deleteFavorite(movieId) {
  try {
    const response = await fetch(`/favorites/${movieId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error('Error deleting favorite:', error);
  }
}
