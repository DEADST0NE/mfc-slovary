import axios from '../../../api';

import {
    POST_OFFICES_REQUEST,
    POST_OFFICES_SUCCESS,
    POST_OFFICES_ERROR
} from '../../constActions';

const postOfficesRequested = () => ({
    type: POST_OFFICES_REQUEST
});
const postOfficesSuccess = () => ({
    type: POST_OFFICES_SUCCESS
});
const postOfficesError = () => ({
    type: POST_OFFICES_ERROR
}); 

//Запрос на добавление филиала
const postOfficesRequest = async ( object ) => {
    return await axios.post(`Offices`, object) 
};

export const postOffices = () => (dispatch) => {
    dispatch(postOfficesRequested());
    postOfficesRequest()
        .then( () => dispatch(postOfficesSuccess()) )
        .catch( () => dispatch(postOfficesError()) );
};
//--