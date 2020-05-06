import {
    PUT_JOB_POSITION_REQUEST,
    PUT_JOB_POSITION_SUCCESS,
    PUT_JOB_POSITION_ERROR
} from '../../constActions';

const initialState = {
    success: false,
    loading: false,
    error: false
} 
const reducerPutPosition = (state = initialState, action) => {
    switch(action.type){
        case PUT_JOB_POSITION_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            }
        case PUT_JOB_POSITION_SUCCESS: 
            return {
                ...state,
                success: true,
                loading: false,
                error: false
            }

        case PUT_JOB_POSITION_ERROR: 
            return {
                ...state,
                loading: false,
                error: true
            } 
        default: 
            return state;
    }
}

export default reducerPutPosition;