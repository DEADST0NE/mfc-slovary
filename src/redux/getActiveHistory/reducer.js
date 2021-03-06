import {
    GET_ACTIVE_HISTORY_REQUEST,
    GET_ACTIVE_HISTORY_SUCCESS,
    GET_ACTIVE_HISTORY_ERROR
} from '../constActions';

const initialState = {
    data: [
        {
            "isActive": true,
            "dateStart": "2020-04-01T00:00:00",
            "dateStop": null,
            "dateAdd": "2020-04-17T11:19:16.853177",
            "employeeNameAdd": null
        }
    ],
    loading: false,
    error: false
} 
const reducerGetActiveHistory = (state = initialState, action) => {
    switch(action.type){
        case GET_ACTIVE_HISTORY_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            }
        case GET_ACTIVE_HISTORY_SUCCESS: 
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: false
            }

        case GET_ACTIVE_HISTORY_ERROR: 
            return {
                ...state,
                loading: false,
                error: true
            } 
        default: 
            return state;
    }
}

export default reducerGetActiveHistory;

