import { PRINT_VALUE, EDIT_VALUE, DELETE_VALUE } from "../Constent";

const initialState = {
    states: []
}
export const printvaluereducer = (state = initialState, action) => {
    switch (action.type) {
        case PRINT_VALUE: {
            return {
                ...state,
                states: [...state.states, action.payload]
            }

        }

        case EDIT_VALUE: {
            const data = state.states.filter((element) => element.id === action.payload)
            return {
                ...state,
                states: data
          }
        }
        case DELETE_VALUE: {
            const data = state.states.filter((element) => element.id !== action.payload)
            return {
                ...state,
                states: data
             }
        }

        default: {
            return state
        }
    }
}   