import * as ActionType from "../ActionTypes";

export const fetchCVReducer = ( state = [], action) => {
    switch (action.type) {

        case ActionType.CV_GET:
            return action.payload

        default:
            return state
    }
}