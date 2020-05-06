import axios from '../../../api';

import {
    PUT_OFFICES_REQUEST,
    PUT_OFFICES_SUCCESS,
    PUT_OFFICES_ERROR
} from '../../constActions';

const putOfficesRequested = () => ({
    type: PUT_OFFICES_REQUEST
});
const putOfficesSuccess = () => ({
    type: PUT_OFFICES_SUCCESS
});
const putOfficesError = () => ({
    type: PUT_OFFICES_ERROR
}); 

//Запрос на добавление филиала
const putOfficesRequest = async ( id, object ) => {
    return await axios.put(`Offices/${id}`, object) 
};

export const putOffices = () => (dispatch) => {
    dispatch(putOfficesRequested());
    putOfficesRequest()
        .then(() => dispatch(putOfficesSuccess()))
        .catch(() => dispatch(putOfficesError()));
};
//--