import {
    POST_JOB_SALARIES_REQUEST,
    POST_JOB_SALARIES_SUCCESS,
    POST_JOB_SALARIES_ERROR
} from '../../constActions';

const initialState = {
    success: false,
    loading: false,
    error: false
} 
const reducerPostSalaries = (state = initialState, action) => {
    switch(action.type){
        case POST_JOB_SALARIES_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            }
        case POST_JOB_SALARIES_SUCCESS: 
            return {
                ...state,
                data: true,
                loading: false,
                error: false
            }

        case POST_JOB_SALARIES_ERROR: 
            return {
                ...state,
                loading: false,
                error: true
            } 
        default: 
            return state;
    }
}

export default reducerPostSalaries;

