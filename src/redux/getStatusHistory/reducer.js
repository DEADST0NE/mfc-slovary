import {
    GET_STATUS_HISTORY_REQUEST,
    GET_STATUS_HISTORY_SUCCESS,
    GET_STATUS_HISTORY_ERROR
} from '../constActions';

const initialState = {
    data: [
        {
            "statusName": "Работает",
            "dateStart": "2020-04-01T00:00:00",
            "dateStop": null,
            "dateAdd": "2020-04-17T11:11:08.469724",
            "employeeNameAdd": null
        }
    ],
    loading: false,
    error: false
} 
const reducerGetStatusHistory = (state = initialState, action) => {
    switch(action.type){
        case GET_STATUS_HISTORY_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            }
        case GET_STATUS_HISTORY_SUCCESS: 
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: false
            }

        case GET_STATUS_HISTORY_ERROR: 
            return {
                ...state,
                loading: false,
                error: true
            } 
        default: 
            return state;
    }
}

export default reducerGetStatusHistory;

