import {
    POST_OFFICES_REQUEST,
    POST_OFFICES_SUCCESS,
    POST_OFFICES_ERROR
} from '../../constActions';

const initialState = {
    success: false, 
    loading: false,
    error: false
} 
const reducerPostOffices = (state = initialState, action) => {
    switch(action.type){ 
        case POST_OFFICES_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            }
        case POST_OFFICES_SUCCESS: 
            return {
                ...state,
                success: true,
                loading: false,
                error: false
            }

        case POST_OFFICES_ERROR: 
            return {
                ...state,
                loading: false,
                error: true
            } 
        default: 
            return state;
    }
}

export default reducerPostOffices;

