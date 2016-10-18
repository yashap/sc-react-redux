import * as actionTypes from '../constants/actionTypes';

const initialState = [];

function setTracks(state, action) {
  return [ ...state, ...action.tracks ];
}

// This function is a reducer
// It takes some state, and an action, and uses that action to update the state
// In this case the state is simply an array of tracks, and it adds the array action.tracks to the initial state
export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.TRACKS_SET:
      return setTracks(state, action);
  }
  return state;
}