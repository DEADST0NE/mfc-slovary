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
            data.forEach( (item) => { Object.keys(item).forEach(i => {if( item[i]===null ) { item[i] = '' }} ) } )//Переводим все поля объекта null в '' по тому что input.value в formik не может быть null !!!
            dispatch(getEmployeesSuccess(data))
        })
        .catch((err) => {console.log(err); dispatch(getEmployeesError(err))});
};
//-- 

