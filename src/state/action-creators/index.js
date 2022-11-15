import * as actionTypes from "../actionTypes"
export const noteAdded = (note) => ({
    type: actionTypes.NOTE_ADDED,
    payload: {
        note
    }
})
export const noteRemoved = (id) => ({
    type: actionTypes.NOTE_REMOVED,
    payload: {
        id
    }
})
export const noteDone = (id) => ({
    type: actionTypes.NOTE_DONE,
    payload: {
        id
    }
})
