import {
    PUT_OFFICES_REQUEST,
    PUT_OFFICES_SUCCESS,
    PUT_OFFICES_ERROR
} from '../../constActions';

const initialState = {
    success: false, 
    loading: false,
    error: false
} 
const reducerPutOffices = (state = initialState, action) => {
    switch(action.type){ 
        case PUT_OFFICES_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            }
        case PUT_OFFICES_SUCCESS: 
            return {
                ...state,
                success: true,
                loading: false,
                error: false
            }

        case PUT_OFFICES_ERROR: 
            return {
                ...state,
                loading: false,
                error: true
            } 
        default: 
            return state;
    }
}

export default reducerPutOffices;

