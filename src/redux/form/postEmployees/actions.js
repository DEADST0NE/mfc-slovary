import axios from '../../../api';
import { formRequested, formSuccess, formError } from '../actions';
import { getEmployees } from '../../getEmployees/actions';

//Запрос на добавление сотрудника
const postEmployeesRequest = async (object) => {
    return await axios.post(`Employees`, object) 
};

export const postEmployees = (object) => (dispatch) => {
    setTimeout( () => { dispatch( getEmployees() )}, 5000 );//Обновляем список филиалов 
    let formdata = new FormData(); 
    Object.keys(object).forEach(item => formdata.append(item, object[item])); // Переводим объект в форм дату
    dispatch( formRequested() );
    postEmployeesRequest(formdata)
        .then(() => dispatch(formSuccess()))
        .catch(() => dispatch(formError()))
};
//--