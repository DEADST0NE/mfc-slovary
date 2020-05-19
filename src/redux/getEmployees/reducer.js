import {
    GET_EMPLOYEES_REQUEST,
    GET_EMPLOYEES_SUCCESS,
    GET_EMPLOYEES_ERROR
} from '../constActions';

const initialState = {
    data: [
        {
            "employeeId": "f01c225d-8187-4dea-acc8-057a05809735",
            "officeName": "Махачкала",
            "employeeName": "Магомедов Магомед Магомедович",
            "employeeJobPositionName": "Специалист",
            "employeeStatusId": 2,
            "employeeStatusName": "Работает",
            "employeeIsActiv": true
        },
        {
            "employeeId": "3ed47bae-5fa8-42ee-9655-f97217ea62eb",
            "officeName": "Махачкала",
            "employeeName": "Мурадов Мурад Мурадович",
            "employeeJobPositionName": "Специалист",
            "employeeStatusId": 2,
            "employeeStatusName": "Работает",
            "employeeIsActiv": true
        },
        {
            "employeeId": "a4e80330-538f-4185-8855-46e4631e95b7",
            "officeName": "Махачкала",
            "employeeName": "Арсланов Арслан Арсланович",
            "employeeJobPositionName": "Специалист",
            "employeeStatusId": 2,
            "employeeStatusName": "Работает",
            "employeeIsActiv": true
        },
        {
            "employeeId": "657b7431-9361-47b4-b9ee-95fc53bf0ad3",
            "officeName": "Махачкала",
            "employeeName": "Максимов Максим Максимович",
            "employeeJobPositionName": "Курьер",
            "employeeStatusId": 2,
            "employeeStatusName": "Работает",
            "employeeIsActiv": true
        },
        {
            "employeeId": "a42262f4-b447-4c88-928d-023108e0f724",
            "officeName": "Махачкала",
            "employeeName": "Денисов Денис Денисович",
            "employeeJobPositionName": "Курьер",
            "employeeStatusId": 2,
            "employeeStatusName": "Работает",
            "employeeIsActiv": true
        },
        {
            "employeeId": "d93002c3-8010-45cb-81c4-7d6bdf72c352",
            "officeName": "Махачкала",
            "employeeName": "Кадыров Кадыр Кадырович",
            "employeeJobPositionName": "Курьер",
            "employeeStatusId": 2,
            "employeeStatusName": "Работает",
            "employeeIsActiv": true
        },
        {
            "employeeId": "71686c1f-433a-43b4-843c-5d67c09fe9a5",
            "officeName": "Махачкала",
            "employeeName": "Магомедова Заира Магомедовна",
            "employeeJobPositionName": "Администратор",
            "employeeStatusId": 2,
            "employeeStatusName": "Работает",
            "employeeIsActiv": true
        }
    ],
    loading: true,
    error: false
}

const reducerGetEmployees = (state = initialState, action) => {
    switch(action.type){
        case GET_EMPLOYEES_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            }
        case GET_EMPLOYEES_SUCCESS: 
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: false
            }

        case GET_EMPLOYEES_ERROR: 
            return {
                ...state,
                loading: false,
                error: action.payload,
            } 
        default: 
            return state;
    }
}

export default reducerGetEmployees;

