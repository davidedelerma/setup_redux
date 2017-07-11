import { API_URL } from '../../constants/constants';

export const SET_CURRENT_CHARACTER = 'SET_CURRENT_CHARACTER';
export const SET_CHARACTER_PROFILE = 'SET_CHARACTER_PROFILE';
export const SET_CHARACTER_WORLD = 'SET_CHARACTER_WORLD';

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
        dispatch(getCharacterWorld(profile.homeworld));
      });
}


export function setCharacterProfile(profile) {
  return {
    type: SET_CHARACTER_PROFILE,
    profile,
  };
}

//the action dispached, will be listened by the reducer that will set the profile correctly in our state. The reducer are id.js and profile.js

// let's add the ability to see the character's world when a character is clicked on. This should be pretty simple. 
// Add an action to get the data and set the data. Add a reducer to put it into state. 
// Lastly, create view that gets the data from state and displays it on screen.

// Let's create an action that will take in a URL that is an endpoint to get the world's data, hits that endpoint, 
// and then dispatches a new action to set the data.

export function getCharacterWorld(url) {
  return dispatch =>
    fetch(url)
      .then(res => res.json())
      .then(world =>
        dispatch(setCharacterWorld(world))
      );
}
// We are returning a thunk that hits the endpoint we pass in, gets the world data from the response, 
// and then dispatches a new action created using a new action creator when passed the world data.


export function setCharacterWorld(world) {
  return {
    type: SET_CHARACTER_WORLD,
    world,
  };
}

//Let's create a reducer to put this world data into state. 