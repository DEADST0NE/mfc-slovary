import {
    GET_POSITION_HISTORY_REQUEST,
    GET_POSITION_HISTORY_SUCCESS,
    GET_POSITION_HISTORY_ERROR
} from '../constActions';

const initialState = {
    data: [
        {
            "officeName": "Домашний филиал",
            "jobPositionName": "Курьер",
            "salary": [
                {
                    "salary": 5000,
                    "costMinute": 100,
                    "dateStart": "2020-04-01T00:00:00",
                    "dateStop": "2020-04-30T00:00:00"
                }
            ],
            "rate": 0.3,
            "intensity": 0.3,
            "dateStart": "2020-04-01T00:00:00",
            "dateStop": "2020-05-31T00:00:00",
            "dateAdd": "2020-04-17T10:57:09.954025",
            "employeeNameAdd": null
        }
    ],
    loading: false,
    error: false
} 
const reducerGetPositionHistory = (state = initialState, action) => {
    switch(action.type){
        case GET_POSITION_HISTORY_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            }
        case GET_POSITION_HISTORY_SUCCESS: 
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: false
            }

        case GET_POSITION_HISTORY_ERROR: 
            return {
                ...state,
                loading: false,
                error: true
            } 
        default: 
            return state;
    }
}

export default reducerGetPositionHistory;

