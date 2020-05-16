import axios from '../../api';

import {
    GET_POSITION_HISTORY_REQUEST,
    GET_POSITION_HISTORY_SUCCESS,
    GET_POSITION_HISTORY_ERROR
} from '../constActions';

const getPositionHistoryRequested = () => ({
    type: GET_POSITION_HISTORY_REQUEST
});
const getPositionHistorySuccess = (item) => ({
    type: GET_POSITION_HISTORY_SUCCESS,
    payload: item
});
const getPositionHistoryError = (error) => ({
    type: GET_POSITION_HISTORY_ERROR,
    payload: error
});

//Запрос история должности
const getPositionHistoryRequest = async (id) => {
    return await axios.get(`${id}/jobPositionHistory`)
    .then(response => response.data);
};
export const getPositionHistory = (id) => (dispatch) => {
    dispatch(getPositionHistoryRequested());
    getPositionHistoryRequest(id)
        .then((data) => dispatch(getPositionHistorySuccess(data)))
        .catch((err) => dispatch(getPositionHistoryError(err)));
};
//--
