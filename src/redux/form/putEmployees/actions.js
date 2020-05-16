import axios from '../../../api';
import { formRequested, formSuccess, formError } from '../actions';

//Запрос на изменения данных сотрудника
const putEmployeesRequest = async (object, id) => {
    return await axios.put(`Employees/${id}`, object) 
};

export const putEmployees = (object, id) => (dispatch) => {
    dispatch( formRequested() );
    putEmployeesRequest(object, id)
        .then( () => dispatch( formSuccess() ) )
        .catch( () => dispatch( formError() ) )
};
//--