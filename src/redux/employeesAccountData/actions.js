import axios from '../../api';
import {
    EMPLOYEES_ACCOUNT_DATA_REQUEST,
    EMPLOYEES_ACCOUNT_DATA_SUCCESS,
    EMPLOYEES_ACCOUNT_DATA_ERROR
} from '../constActions';

const getEmployeeAccountDataRequested = () => ({
    type: EMPLOYEES_ACCOUNT_DATA_REQUEST
});
const getEmployeeAccountDataSuccess = (item) => ({
    type: EMPLOYEES_ACCOUNT_DATA_SUCCESS,
    payload: item
});
const getEmployeeAccountDataError = (error) => ({
    type: EMPLOYEES_ACCOUNT_DATA_ERROR,
    payload: error
});

//Запрос данных о сотруднике 
const getEmployeeAccountDataRequest = async (id) => {
    return await axios.get(`Employees/${id}`)
    .then(response => response.data);
};
export const getEmployeeAccountData = (id) => (dispatch) => {
    dispatch(getEmployeeAccountDataRequested());
    getEmployeeAccountDataRequest(id)
        .then((data) => dispatch(getEmployeeAccountDataSuccess(data)))
        .catch((err) => dispatch(getEmployeeAccountDataError(err)));
};
//--

//Запрос на изменение даных сотрудника
const putEmployeeAccountDataRequest = async (object, id) => {
    return await axios.post(`Employees/${id}`, object) 
};

export const putEmployeeAccountData = (object, id) => (dispatch) => {
    putEmployeeAccountDataRequest(object, id); 
};
//--