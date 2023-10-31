import { FETCH } from "../actions/actionTypes"

const initialState = []

const loremReducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCH: return [...action.payload]
        default: return state;
    }

}

export default loremReducer;