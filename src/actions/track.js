import * as actionTypes from '../constants/actionTypes';

// This is an action creator
// Returns an object with a type and a payload
// The payload will be used to change the global state
export function setTracks(tracks) {
  return {
    type: actionTypes.TRACKS_SET,
    tracks
  }
}