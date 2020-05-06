import axios from '../../../api';

import {
    GET_JOB_SALARIES_REQUEST,
    GET_JOB_SALARIES_SUCCESS,
    GET_JOB_SALARIES_ERROR
} from '../../constActions';

const getJobSalariesRequested = () => ({
    type: GET_JOB_SALARIES_REQUEST
});
const getJobSalariesSuccess = (item) => ({
    type: GET_JOB_SALARIES_SUCCESS,
    payload: item
});
const getJobSalariesError = (error) => ({
    type: GET_JOB_SALARIES_ERROR,
    payload: error
});

//Запрос все оклады
const getJobSalariesRequest = async () => {
    return await axios.get(`JobSalaries`)
    .then(response => response.data);
};

export const getJobSalaries = () => (dispatch) => {
    dispatch(getJobSalariesRequested());
    getJobSalariesRequest()
        .then((data) => dispatch(getJobSalariesSuccess(data)))
        .catch((err) => dispatch(getJobSalariesError(err)));
};
//--

