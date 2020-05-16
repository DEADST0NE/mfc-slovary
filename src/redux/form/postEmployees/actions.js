import axios from '../../../api';
import { formRequested, formSuccess, formError } from '../actions';

//Запрос на добавление сотрудника
const postEmployeesRequest = async (object) => {
    return await axios.post(`Employees`, object) 
};

export const postEmployees = (object) => (dispatch) => {
    dispatch( formRequested() );
    postEmployeesRequest(object)
        .then(() => dispatch(formSuccess()))
        .catch(() => dispatch(formError()))
};
//--