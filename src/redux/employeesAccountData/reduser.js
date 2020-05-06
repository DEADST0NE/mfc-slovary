import {
    EMPLOYEES_ACCOUNT_DATA_REQUEST,
    EMPLOYEES_ACCOUNT_DATA_SUCCESS,
    EMPLOYEES_ACCOUNT_DATA_ERROR
} from '../constActions';

const initialState = {
    data: null,
    loading: true,
    error: false
} 
const reducerEmployeeAccountData = (state = initialState, action) => {
    switch(action.type){
        case EMPLOYEES_ACCOUNT_DATA_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            }
        case EMPLOYEES_ACCOUNT_DATA_SUCCESS: 
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: false
            } 
        case EMPLOYEES_ACCOUNT_DATA_ERROR: 
            return {
                ...state,
                loading: false,
                error: true
            } 
        default: 
            return state;
    }
}

export default reducerEmployeeAccountData;

