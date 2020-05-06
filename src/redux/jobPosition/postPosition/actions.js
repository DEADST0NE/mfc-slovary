import axios from '../../../api';

import {
    POST_JOB_POSITION_REQUEST,
    POST_JOB_POSITION_SUCCESS,
    POST_JOB_POSITION_ERROR
} from '../../constActions';

const postJobPositionRequested = () => ({
    type: POST_JOB_POSITION_REQUEST
});
const postJobPositionSuccess = (item) => ({
    type: POST_JOB_POSITION_SUCCESS,
    payload: item
});
const postJobPositionError = (error) => ({
    type: POST_JOB_POSITION_ERROR,
    payload: error
});

//Запрос на добавление должности 
const postJobPositionRequest = async (object) => {
    return await axios.post(`jobPosition`, object) 
};

export const postJobPosition = (object) => (dispatch) => { 
    dispatch(postJobPositionRequested());
    postJobPositionRequest(object)
        .then((data) => dispatch(postJobPositionSuccess(data)))
        .catch((err) => dispatch(postJobPositionError(err)));
};
//--