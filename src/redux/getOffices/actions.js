import axios from '../../api';

import {
    GET_OFFICES_REQUEST,
    GET_OFFICES_SUCCESS,
    GET_OFFICES_ERROR
} from '../constActions';

const getOfficesRequested = () => ({
    type: GET_OFFICES_REQUEST
});
const getOfficesSuccess = (item) => ({
    type: GET_OFFICES_SUCCESS,
    payload: item
});
const getOfficesError = (error) => ({
    type: GET_OFFICES_ERROR,
    payload: error
}); 

//Запрос на добавление филиала
const getOfficesRequest = async () => {
    return await axios.get(`Offices`)
    .then(response => response.data);
};
export const getOffices = () => (dispatch) => {
    dispatch(getOfficesRequested());
    getOfficesRequest()
        .then((data) => {
            data.forEach( (item) => { Object.keys(item).forEach(i => {if( item[i]===null ) { item[i] = '' }} ) } )//Переводим все поля объекта null в '' по тому что input.value в formik не может быть null !!!
            dispatch(getOfficesSuccess(data))
        })
        .catch((err) => dispatch(getOfficesError(err)));
};
//--