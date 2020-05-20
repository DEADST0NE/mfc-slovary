import axios from '../../../api';
import { formRequested, formSuccess, formError } from '../actions';
import { getEmployees } from '../../getEmployees/actions';
import {objectDateString} from '../../../utils/objectDateString';
import {formDataAppend} from '../../../utils/formDataAppend';

//Запрос на добавление сотрудника
const postEmployeesRequest = async (object) => {
    return await axios.post(`Employees`, object) 
};

export const postEmployees = (object) => (dispatch) => {
    setTimeout( () => { dispatch( getEmployees() )}, 5000 );//Обновляем список филиалов 
    objectDateString(object);
    let formdata = new FormData();  
    formDataAppend(formdata, object); 
    dispatch( formRequested() );
    postEmployeesRequest(formdata)
        .then(() => dispatch(formSuccess()))
        .catch(() => dispatch(formError()))
};
//--