import axios from '../../api';

import {
    GET_EMPLOYEES_ACCOUNT_REQUEST,
    GET_EMPLOYEES_ACCOUNT_SUCCESS,
    GET_EMPLOYEES_ACCOUNT_ERROR
} from '../constActions';

const getEmployeesAccountRequested = () => ({
    type: GET_EMPLOYEES_ACCOUNT_REQUEST
});
const getEmployeesAccountSuccess = (item) => ({
    type: GET_EMPLOYEES_ACCOUNT_SUCCESS,
    payload: item
});
const getEmployeesAccountError = (error) => ({
    type: GET_EMPLOYEES_ACCOUNT_ERROR,
    payload: error
});

//Запрос на добавление сотрудника
const getEmployeesAccountRequest = async (object, id) => {
    return await axios.put(`Employees/${id}`, object) 
};

export const getEmployeesAccount = (object, id) => (dispatch) => {
    dispatch(getEmployeesAccountRequested());
    getEmployeesAccountRequest(object, id)
        .then((data) => dispatch(getEmployeesAccountSuccess(data)))
        .catch((err) => dispatch(getEmployeesAccountError(err)));
};
//--

