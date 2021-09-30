import * as ActionTypes from '../ActionTypes';
import {baseUrl} from "../../url/baseUrl";

export const addCVData = (data) => {
    return {
        type: ActionTypes.CV_ADDED,
        payload: data
    }
}

export const processingCVData = () => {
    return {
        type: ActionTypes.CV_PROCESSING
    }
}

export const failedCVData = (errMsg) => {
    return{
        type: ActionTypes.CV_FAILED,
        payload: errMsg
    }
}

export const postData = (values) => (dispatch) => {

    dispatch(processingCVData());

    const newUserData = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        city: values.city,
        address: values.address,
        projectTitle: values.projectTitle,
        projectDescription: values.projectDescription,
        projectStartDate: values.projectStartDate,
        projectEndDate: values.projectEndDate,
        degreeName: values.degreeName,
        uniName: values.uniName,
        uniStartYear: values.uniStartYear,
        uniEndYear: values.uniEndYear,
        jobTitle: values.jobTitle,
        companyName: values.companyName,
        companyLocation: values.companyLocation,
        yearOfExperience: values.yearOfExperience,
        promotions: values.promotions
    }

    return fetch(baseUrl + 'user_data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUserData),
    })
        .then(response => response.json())
        .then(data => dispatch(addCVData(data)))
        .catch((errMsg) => dispatch(failedCVData(errMsg)))
}