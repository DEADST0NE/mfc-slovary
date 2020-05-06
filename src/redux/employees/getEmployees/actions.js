import axios from '../../../api';

import {
    GET_EMPLOYEES_REQUEST,
    GET_EMPLOYEES_SUCCESS,
    GET_EMPLOYEES_ERROR
} from '../../constActions';

const getEmployeesRequested = () => ({
    type: GET_EMPLOYEES_REQUEST
});
const getEmployeesSuccess = (item) => ({
    type: GET_EMPLOYEES_SUCCESS,
    payload: item
});
const getEmployeesError = (error) => ({
    type: GET_EMPLOYEES_ERROR,
    payload: error
});

//Запрос всех сотрудников
const getEmployeesRequest = async () => {
    return await axios.get(`Employees`)
    .then(response => response.data);
};
export const getEmployees = () => (dispatch) => {
    dispatch(getEmployeesRequested());
    getEmployeesRequest()
        .then((data) => dispatch(getEmployeesSuccess(data)))
        .catch((err) => dispatch(getEmployeesError(err)));
};
//--

//Запрос на добавление сотрудника
const postEmployeesRequest = async (object) => {
    return await axios.post(`Employees`, object) 
};

export const postEmployee = (object) => (dispatch) => {
    postEmployeesRequest(object);
    dispatch(getEmployees());
};
//--

