import {
    GET_EMPLOYEES_ACCOUNT_REQUEST,
    GET_EMPLOYEES_ACCOUNT_SUCCESS,
    GET_EMPLOYEES_ACCOUNT_ERROR
} from '../constActions';

const initialState = {
    data: {
        "fio": {
            "lastName": "lastName",
            "name": "name",
            "middleName": "middleName",
            "fio": "middleName middleName middleName"
        },
        "login": "login",
        "password": "password",
        "passwordHelp": "passwordHelp",
        "phoneNumber": "+79640070198",
        "email": "test@test.ru",
        "foto": "",
        "personalNumber": "123456789",
        "certificateNumber": "123456789",
        "passport": {
            "birthDate": "01.01.2001",
            "birthPlace": "birthPlace",
            "serial": "1111",
            "number": "11111",
            "issueDate": "01.01.2001",
            "issuePlace": "issuePlace",
            "code": "111111"
        },
        "snils": "11111111111",
        "inn": "111111111111",
        "officeName": "officeName",
        "jobPositionName": "jobPositionName",
        "isActive": true,
        "statusName": "statusName"
    },
    loading: false,
    error: false
}

const reducerGetEmployeesAccount = (state = initialState, action) => {
    switch(action.type){
        case GET_EMPLOYEES_ACCOUNT_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            }
        case GET_EMPLOYEES_ACCOUNT_SUCCESS: 
            return {
                ...state,
                data:  action.payload,
                loading: false,
                error: false
            } 
        case GET_EMPLOYEES_ACCOUNT_ERROR: 
            return {
                ...state,
                loading: false,
                error: true
            } 
        default: 
            return state;
    }
}

export default reducerGetEmployeesAccount;