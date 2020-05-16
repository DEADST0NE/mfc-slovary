import axios from '../../api';

import {
    GET_COMBINATION_HISTORY_REQUEST,
    GET_COMBINATION_HISTORY_SUCCESS,
    GET_COMBINATION_HISTORY_ERROR
} from '../constActions';

const getCombinationHistoryRequested = () => ({
    type: GET_COMBINATION_HISTORY_REQUEST
});
const getCombinationHistorySuccess = (item) => ({
    type: GET_COMBINATION_HISTORY_SUCCESS,
    payload: item
});
const getCombinationHistoryError = (error) => ({
    type: GET_COMBINATION_HISTORY_ERROR,
    payload: error
});

//Запрос история исполнения
const getCombinationHistoryRequest = async (id) => {
    return await axios.get(`${id}/pa/activeHistory`)
    .then(response => response.data);
};
export const getCombinationHistory = (id) => (dispatch) => {
    dispatch(getCombinationHistoryRequested());
    getCombinationHistoryRequest(id)
        .then((data) => dispatch(getCombinationHistorySuccess(data)))
        .catch((err) => dispatch(getCombinationHistoryError(err)));
};
//--
