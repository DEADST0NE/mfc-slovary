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

//Запрос на основныйх данных сотрудника
const getEmployeesAccountRequest = async (id) => {
    return await axios.get(`Employees/${id}`) 
};

export const getEmployeesAccount = (id) => (dispatch) => {
    console.log(id);
    dispatch(getEmployeesAccountRequested());
    getEmployeesAccountRequest(id)
        .then((data) => { 
            data.data.passport.birthDate ? 
                data.data.passport.birthDate = new Date(Date.parse(data.data.passport.birthDate)).toLocaleDateString() : void 0; //Переводит дату в читаймую
            data.data.passport.birthDate ? 
                data.data.passport.birthPlace = new Date(Date.parse(data.data.passport.birthPlace)).toLocaleDateString() : void 0; //Переводит дату в читаймую
            dispatch(getEmployeesAccountSuccess(data.data))
        })
        .catch((err) => {console.log(2); dispatch(getEmployeesAccountError(err))});
};
//--

