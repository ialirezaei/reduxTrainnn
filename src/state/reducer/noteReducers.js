import * as actionTypes from "./../actionTypes"
let id = 0

const reducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.NOTE_ADDED:
            return [
                ...state,
                {
                    note: action.payload.note,
                    id: id++,
                    done: false
                }
            ]
        case actionTypes.NOTE_REMOVED:
            return state.filter(note => note.id !== action.payload.id);
        case actionTypes.NOTE_DONE:
            return state.map((note) => {
                if (note.id === action.payload.id) {
                    return {
                        ...note,
                        done: !note.done
                    };
                }
            })
        default:
            return state
    }

}

export default reducer