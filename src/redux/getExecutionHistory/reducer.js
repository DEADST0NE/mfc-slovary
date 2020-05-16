import {
    GET_EXECUTION_HISTORY_REQUEST,
    GET_EXECUTION_HISTORY_SUCCESS,
    GET_EXECUTION_HISTORY_ERROR
} from '../constActions';

const initialState = {
    data: [
        {
            "isExecution": true,
            "dateStart": "2020-05-15T12:39:50",
            "dateStop": "2020-05-15T12:39:50",
            "dateAdd": "2020-05-15T12:39:50",
            "employeeNameAdd": "qweqwe"
        }
    ],
    loading: false,
    error: false
} 
const reducerGetExecutionHistory = (state = initialState, action) => {
    switch(action.type){
        case GET_EXECUTION_HISTORY_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            }
        case GET_EXECUTION_HISTORY_SUCCESS: 
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: false
            }

        case GET_EXECUTION_HISTORY_ERROR: 
            return {
                ...state,
                loading: false,
                error: true
            } 
        default: 
            return state;
    }
}

export default reducerGetExecutionHistory;

