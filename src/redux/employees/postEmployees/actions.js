import axios from '../../../api';

import {
    POST_EMPLOYEES_REQUEST,
    POST_EMPLOYEES_SUCCESS,
    POST_EMPLOYEES_ERROR
} from '../../constActions';

const postEmployeesRequested = () => ({
    type: POST_EMPLOYEES_REQUEST
});
const postEmployeesSuccess = () => ({
    type: POST_EMPLOYEES_SUCCESS
});
const postEmployeesError = (error) => ({
    type: POST_EMPLOYEES_ERROR,
    payload: error
});

//Запрос на добавление сотрудника
const postEmployeesRequest = async (object) => {
    return await axios.post(`Employees`, object) 
};

export const postEmployee = (object) => (dispatch) => {
    dispatch(postEmployeesRequested());
    postEmployeesRequest(object)
        .then((data) => dispatch(postEmployeesSuccess(data)))
        .catch((err) => dispatch(postEmployeesError(err)));
};
//--

