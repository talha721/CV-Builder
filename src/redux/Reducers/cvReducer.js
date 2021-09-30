import * as ActionTypes from "../ActionTypes";

export const cvReducer = ( state = {
    isProcessing: false,
    errMsg: null,
    success_message: ''
}, action) => {
    switch (action.type) {

        case ActionTypes.CV_ADDED:
            return { ...state, isProcessing: false, errMsg: null, success_message: action.payload }

        case ActionTypes.CV_PROCESSING:
            return { ...state, isProcessing: true, errMsg: null, success_message: '' }

        case ActionTypes.CV_FAILED:
            return { ...state, isProcessing: false, errMsg: action.payload, success_message: '' }

        default:
            return state;
    }
}