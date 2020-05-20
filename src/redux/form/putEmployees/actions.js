import axios from '../../../api';
import { formRequested, formSuccess, formError } from '../actions';
import { getEmployees } from '../../getEmployees/actions';
import {objectDateString} from '../../../utils/objectDateString';
import {formDataAppend} from '../../../utils/formDataAppend';

//Запрос на изменения данных сотрудника
const putEmployeesRequest = async (object, id) => {
    return await axios.put(`Employees/${id}`, object) 
};

export const putEmployees = (object, id) => (dispatch) => {
    setTimeout( () => { dispatch( getEmployees() )}, 5000 );//Обновляем список филиалов 
    objectDateString(object);
    let formdata = new FormData();  
    formDataAppend(formdata, object); 
    dispatch( formRequested() );
    putEmployeesRequest(object, id)
        .then( () => dispatch( formSuccess() ) )
        .catch( () => dispatch( formError() ) )
};
//--