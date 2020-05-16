import axios from '../../api';

import {
    GET_STATUS_HISTORY_REQUEST,
    GET_STATUS_HISTORY_SUCCESS,
    GET_STATUS_HISTORY_ERROR
} from '../constActions';

const getStatusHistoryRequested = () => ({
    type: GET_STATUS_HISTORY_REQUEST
});
const getStatusHistorySuccess = (item) => ({
    type: GET_STATUS_HISTORY_SUCCESS,
    payload: item
});
const getStatusHistoryError = (error) => ({
    type: GET_STATUS_HISTORY_ERROR,
    payload: error
});

//Запрос все история статуса
const getStatusHistoryRequest = async (id) => {
    return await axios.get(`${id}/pa/statusHistory`)
    .then(response => response.data);
};
export const getStatusHistory = (id) => (dispatch) => {
    dispatch(getStatusHistoryRequested());
    getStatusHistoryRequest(id)
        .then((data) => dispatch(getStatusHistorySuccess(data)))
        .catch((err) => dispatch(getStatusHistoryError(err)));
};
//--
