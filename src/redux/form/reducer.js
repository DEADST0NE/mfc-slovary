import {
    FORM_STATUS_REQUEST,
    FORM_STATUS_SUCCESS,
    FORM_STATUS_ERROR,
    FORM_STATUS_CLEAR
} from '../constActions';

const initialState = {
    success: false,
    loading: false,
    error: false
}

const reducerFormStatus = (state = initialState, action) => {
    switch(action.type){
        case FORM_STATUS_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            }
        case FORM_STATUS_SUCCESS: 
            return {
                ...state,
                success: true,
                loading: false,
                error: false
            } 
        case FORM_STATUS_ERROR: 
            return {
                ...state,
                loading: false,
                error: true
            } 
        case FORM_STATUS_CLEAR:
            return {
                ...state,
                success: false,
                loading: false,
                error: false
            }
        default: 
            return state;
    }
}

export default reducerFormStatus;