import * as ActionTypes from '../ActionTypes';
import {baseUrl} from "../../url/baseUrl";


const cvSuccess = (data) => {
    return{
        type: ActionTypes.CV_GET,
        payload: data
    }
}

export const fetchCVInfo = () => (dispatch) => {

    return fetch(baseUrl + 'user_data', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(data => dispatch(cvSuccess(data)));
}