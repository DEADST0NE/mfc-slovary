import axios from '../../../api';

import {
    POST_JOB_SALARIES_REQUEST,
    POST_JOB_SALARIES_SUCCESS,
    POST_JOB_SALARIES_ERROR
} from '../../constActions';

const postJobSalariesRequested = () => ({
    type: POST_JOB_SALARIES_REQUEST
});
const postJobSalariesSuccess = (item) => ({
    type: POST_JOB_SALARIES_SUCCESS,
    payload: item
});
const postJobSalariesError = (error) => ({
    type: POST_JOB_SALARIES_ERROR,
    payload: error
});

//Запрос на добавление оклада 
const postAddJobSalariesRequest = async (object) => {
    return await axios.post(`JobSalaries`, object) 
};

export const postAddJobSalaries = (object) => (dispatch) => {
    dispatch(postJobSalariesRequested());
    postAddJobSalariesRequest(object)
        .then((data) => dispatch(postJobSalariesSuccess(data)))
        .catch((err) => dispatch(postJobSalariesError(err)));
    //dispatch(getJobSalaries());
};
//--
