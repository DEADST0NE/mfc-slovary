import axios from '../../api';

import {
    GET_ACTIVE_HISTORY_REQUEST,
    GET_ACTIVE_HISTORY_SUCCESS,
    GET_ACTIVE_HISTORY_ERROR
} from '../constActions';

const getActiveHistoryRequested = () => ({
    type: GET_ACTIVE_HISTORY_REQUEST
});
const getActiveHistorySuccess = (item) => ({
    type: GET_ACTIVE_HISTORY_SUCCESS,
    payload: item
});
const getActiveHistoryError = (error) => ({
    type: GET_ACTIVE_HISTORY_ERROR,
    payload: error
});

//Запрос история исполнения
const getActiveHistoryRequest = async (id) => {
    return await axios.get(`${id}/pa/activeHistory`)
    .then(response => response.data);
};
export const getActiveHistory = (id) => (dispatch) => {
    dispatch(getActiveHistoryRequested());
    getActiveHistoryRequest(id)
        .then((data) => dispatch(getActiveHistorySuccess(data)))
        .catch((err) => dispatch(getActiveHistoryError(err)));
};
//--
