import axios from '../../../api';
import { formRequested, formSuccess, formError } from '../actions';

//Запрос на добавление оклада 
    const postSalariesRequest = async (object) => {
        return await axios.post(`JobSalaries`, object) 
    };

    export const postSalaries = (object) => (dispatch) => {
        dispatch(formRequested());
        postSalariesRequest(object)
            .then(() => dispatch( formSuccess() ))
            .catch(() => dispatch( formError() ))
    };
//--