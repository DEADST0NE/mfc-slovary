import {
    POST_EMPLOYEES_REQUEST,
    POST_EMPLOYEES_SUCCESS,
    POST_EMPLOYEES_ERROR
} from '../../constActions';

const initialState = {
    success: null,
    loading: false,
    error: false
}

const reducerPostEmployees = (state = initialState, action) => {
    switch(action.type){
        case POST_EMPLOYEES_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            }
        case POST_EMPLOYEES_SUCCESS: 
            return {
                ...state,
                success: true,
                loading: false,
                error: false
            } 
        case POST_EMPLOYEES_ERROR: 
            return {
                ...state,
                loading: false,
                error: true
            } 
        default: 
            return state;
    }
}

export default reducerPostEmployees;