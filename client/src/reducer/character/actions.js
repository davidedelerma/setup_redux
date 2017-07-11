import { API_URL } from '../../constants/constants';

export const SET_CURRENT_CHARACTER = 'SET_CURRENT_CHARACTER';

export function setCurrentCharacter(id) {
  return {
    type: SET_CURRENT_CHARACTER,
    id,
  };
}

export function getCharacterProfile(id) {
  return dispatch =>
    fetch(`${API_URL}/people/${id}`)
      .then(res => res.json())
      .then(profile => {
        dispatch(setCharacterProfile(profile));
      });
}

export const SET_CHARACTER_PROFILE = 'SET_CHARACTER_PROFILE';

export function setCharacterProfile(profile) {
  return {
    type: SET_CHARACTER_PROFILE,
    profile,
  };
}

//the action dispached, will be listened by the reducer that will set the profile correctly in our state. The reducer are id.js and profile.js