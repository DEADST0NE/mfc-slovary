import {
    GET_SALARIES_REQUEST,
    GET_SALARIES_SUCCESS,
    GET_SALARIES_ERROR
} from '../constActions';

const initialState = {
    data: [
        {
            "id": 1,
            "jobPositionId": 7,
            "jobPositionName": "Тестовая должность",
            "salary": 100,
            "costMinute": 10,
            "coefficient": null,
            "costNormal": null,
            "coefficientJobPosition": null,
            "dateStart": "2020-03-30T00:00:00",
            "dateStop": null,
            "comment": null
        },
        {
            "id": 2,
            "jobPositionId": 2,
            "jobPositionName": "Тестовая должность",
            "salary": 100,
            "costMinute": 10,
            "coefficient": null,
            "costNormal": null,
            "coefficientJobPosition": null,
            "dateStart": "2020-03-30T00:00:00",
            "dateStop": null,
            "comment": null
        },
        {
            "id": 3,
            "jobPositionId": 2,
            "jobPositionName": "Должность",
            "salary": 100,
            "costMinute": 18,
            "coefficient": null,
            "costNormal": null,
            "coefficientJobPosition": null,
            "dateStart": "2020-03-31T00:00:00",
            "dateStop": null,
            "comment": null
        }
    ],
    loading: true,
    error: false
} 
const reducerGetSalaries = (state = initialState, action) => {
    switch(action.type){
        case GET_SALARIES_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            }
        case GET_SALARIES_SUCCESS: 
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: false
            }

        case GET_SALARIES_ERROR: 
            return {
                ...state,
                loading: false,
                error: true
            } 
        default: 
            return state;
    }
}

export default reducerGetSalaries;

