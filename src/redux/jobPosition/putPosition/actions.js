import axios from '../../../api';

import {
    PUT_JOB_POSITION_REQUEST,
    PUT_JOB_POSITION_SUCCESS,
    PUT_JOB_POSITION_ERROR
} from '../../constActions';

const putJobPositionRequested = () => ({
    type: PUT_JOB_POSITION_REQUEST
});
const putJobPositionSuccess = (item) => ({
    type: PUT_JOB_POSITION_SUCCESS,
    payload: item
});
const putJobPositionError = (error) => ({
    type: PUT_JOB_POSITION_ERROR,
    payload: error
});

//Запрос на изменение должности
const putJobPositionRequest = async ( id, object ) => {
    return await axios.put(`jobPosition/${id}`, object) 
};

export const putJobPosition = (object, id) => (dispatch) => { 
    dispatch(putJobPositionRequested());
    putJobPositionRequest(id, object)
        .then((data) => dispatch(putJobPositionSuccess(data)))
        .catch((err) => dispatch(putJobPositionError(err)));
};
//--