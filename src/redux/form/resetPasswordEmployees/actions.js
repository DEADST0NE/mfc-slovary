import axios from '../../../api';
import { formRequested, formSuccess, formError } from '../actions';

//Запрос на изменения филиала
    const resetPasswordEmployeesRequest = async ( id ) => {
        return await axios.put(`${id}/resetPassword`) 
    };

    export const resetPasswordEmployees = (id) => (dispatch) => {
        dispatch( formRequested() );
        resetPasswordEmployeesRequest(id)
            .then(() => dispatch( formSuccess() ))
            .catch(() => dispatch( formError() ))
    };
//--