// TODO: add and export your own actions
import cities from './../db/cities.js';

export function setCities() {
  // API CALL

  return {
     type: 'SET_CITIES',
     payload: cities
  }
}

export function setActiveCity(city) {
  return {
    type: 'SET_ACTIVE_CITY',
    payload: city
  }
}
