import axios from '../../api';

import {
    GET_EMPLOYEES_REQUEST,
    GET_EMPLOYEES_SUCCESS,
    GET_EMPLOYEES_ERROR
} from '../constActions';

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
        .then((data) => { 
            data.passport.birthDate ? data.passport.birthDate = new Date(Date.parse(data.passport.birthDate)).toLocaleDateString() : void 0; //Переводит дату в читаймую
            data.passport.birthDate ? data.passport.birthPlace = new Date(Date.parse(data.passport.birthPlace)).toLocaleDateString() : void 0; //Переводит дату в читаймую
            dispatch(getEmployeesSuccess(data))
        })
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

