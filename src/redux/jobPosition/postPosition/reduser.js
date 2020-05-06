import {
    POST_JOB_POSITION_REQUEST,
    POST_JOB_POSITION_SUCCESS,
    POST_JOB_POSITION_ERROR
} from '../../constActions';

const initialState = {
    success: false,
    loading: false,
    error: false
} 
const reducerPostPosition = (state = initialState, action) => {
    switch(action.type){
        case POST_JOB_POSITION_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            }
        case POST_JOB_POSITION_SUCCESS: 
            return {
                ...state,
                success: true,
                loading: false,
                error: false
            }

        case POST_JOB_POSITION_ERROR: 
            return {
                ...state,
                loading: false,
                error: true
            } 
        default: 
            return state;
    }
}

export default reducerPostPosition;