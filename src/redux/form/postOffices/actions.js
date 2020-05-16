import axios from '../../../api';
import { formRequested, formSuccess, formError } from '../actions';

//Запрос на добавление филиала
    const postOfficesRequest = async ( object ) => {
        return await axios.post(`Offices`, object) 
    };

    export const postOffices = () => (dispatch) => {
        dispatch( formRequested() );
        postOfficesRequest()
            .then( () => dispatch( formSuccess() ))
            .catch( () => dispatch( formError() ))
    };
//--