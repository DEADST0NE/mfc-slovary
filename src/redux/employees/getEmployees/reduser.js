import {
    GET_EMPLOYEES_REQUEST,
    GET_EMPLOYEES_SUCCESS,
    GET_EMPLOYEES_ERROR
} from '../../constActions';

const initialState = {
    employees: null,
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
                error: true
            } 
        default: 
            return state;
    }
}

export default reducerGetEmployees;

