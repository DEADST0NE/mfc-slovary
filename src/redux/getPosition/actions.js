import axios from '../../api';

import {
    GET_POSITION_REQUEST,
    GET_POSITION_SUCCESS,
    GET_POSITION_ERROR
} from '../constActions';

const getJobPositionRequested = () => ({
    type: GET_POSITION_REQUEST
});
const getJobPositionSuccess = (item) => ({
    type: GET_POSITION_SUCCESS,
    payload: item
});
const getJobPositionError = (error) => ({
    type: GET_POSITION_ERROR,
    payload: error
});

//Запрос все должности
const getJobPositionRequest = async () => {
    return await axios.get(`jobPosition`)
    .then(response => response.data);
};
export const getJobPosition = () => (dispatch) => {
    dispatch(getJobPositionRequested());
    getJobPositionRequest()
        .then((data) => dispatch(getJobPositionSuccess(data)))
        .catch((err) => dispatch(getJobPositionError(err)));
};
//--
