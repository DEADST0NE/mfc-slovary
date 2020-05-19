import {
    GET_POSITION_REQUEST,
    GET_POSITION_SUCCESS,
    GET_POSITION_ERROR
} from '../constActions';

const initialState = {
data: [
        {
            "id": 16,
            "name": "Тестировщик",
            "comment": "тестирует ПО"
        },
        {
            "id": 12,
            "name": "Дизайнер",
            "comment": "рисует макеты"
        },
        {
            "id": 15,
            "name": "Программист",
            "comment": "разрабатывает ПО"
        },
        {
            "id": 14,
            "name": "Системный администратор",
            "comment": "настраивает сети"
        },
        {
            "id": 9,
            "name": "Специалист",
            "comment": "разбирается в узкой области"
        },
        {
            "id": 18,
            "name": "Маркетолог",
            "comment": "продает продукт"
        },
        {
            "id": 19,
            "name": "Верстальщик",
            "comment": "верстает страницы"
        },
        {
            "id": 20,
            "name": "Контент-менеджер",
            "comment": "добавляет контент"
        },
        {
            "id": 13,
            "name": "Сеньор-помидор",
            "comment": "руководит процессом разработки ПО"
        },
        {
            "id": 11,
            "name": "Администратор",
            "comment": "администрирует"
        },
        {
            "id": 10,
            "name": "Курьер",
            "comment": "доставляет посылки"
        },
        {
            "id": 21,
            "name": "tesst",
            "comment": null
        },
        {
            "id": 17,
            "name": "Директор",
            "comment": "руководит сотрудниками"
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
                error: true,
            } 
        default: 
            return state;
    }
}

export default reducerGetPosition;

