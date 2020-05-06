import {
    GET_JOB_SALARIES_REQUEST,
    GET_JOB_SALARIES_SUCCESS,
    GET_JOB_SALARIES_ERROR
} from '../../constActions';

const initialState = {
    data: null,
    loading: true,
    error: false
} 
const reducerGetSalaries = (state = initialState, action) => {
    switch(action.type){
        case GET_JOB_SALARIES_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            }
        case GET_JOB_SALARIES_SUCCESS: 
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: false
            }

        case GET_JOB_SALARIES_ERROR: 
            return {
                ...state,
                loading: false,
                error: true
            } 
        default: 
            return state;
    }
}

export default reducerGetSalaries;

