import {
    GET_POSITION_REQUEST,
    GET_POSITION_SUCCESS,
    GET_POSITION_ERROR
} from '../constActions';

const initialState = {
    data: [
        {
            "id": 1,
            "name": "Оператор",
            "comment": ''
        },
        {
            "id": 2,
            "name": "Курьер",
            "comment": ''
        },
        {
            "id": 7,
            "name": "Редактирование должности",
            "comment": "Редактирование комментария к новой тестовой должности"
        }
    ],
    loading: true,
    error: false
} 
const reducerGetPosition = (state = initialState, action) => {
    switch(action.type){
        case GET_POSITION_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            }
        case GET_POSITION_SUCCESS: 
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: false
            }

        case GET_POSITION_ERROR: 
            return {
                ...state,
                loading: false,
                error: true
            } 
        default: 
            return state;
    }
}

export default reducerGetPosition;

