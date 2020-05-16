import axios from '../../../api';
import { formRequested, formSuccess, formError } from '../actions';

//Запрос на изменения филиала
    const putOfficesRequest = async ( id, object ) => {
        return await axios.put(`Offices/${id}`, object) 
    };

    export const putOffices = () => (dispatch) => {
        dispatch( formRequested() );
        putOfficesRequest()
            .then(() => dispatch( formSuccess() ))
            .catch(() => dispatch( formError() ))
    };
//--