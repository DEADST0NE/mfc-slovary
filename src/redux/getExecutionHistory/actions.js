import axios from '../../api';

import {
    GET_EXECUTION_HISTORY_REQUEST,
    GET_EXECUTION_HISTORY_SUCCESS,
    GET_EXECUTION_HISTORY_ERROR
} from '../constActions';

const getExecutionHistoryRequested = () => ({
    type: GET_EXECUTION_HISTORY_REQUEST
});
const getExecutionHistorySuccess = (item) => ({
    type: GET_EXECUTION_HISTORY_SUCCESS,
    payload: item
});
const getExecutionHistoryError = (error) => ({
    type: GET_EXECUTION_HISTORY_ERROR,
    payload: error
});

//Запрос история исполнения
const getExecutionHistoryRequest = async (id) => {
    return await axios.get(`${id}/pa/executionHistory`)
    .then(response => response.data);
};
export const getExecutionHistory = (id) => (dispatch) => {
    dispatch(getExecutionHistoryRequested());
    getExecutionHistoryRequest(id)
        .then((data) => dispatch(getExecutionHistorySuccess(data)))
        .catch((err) => dispatch(getExecutionHistoryError(err)));
};
//--
