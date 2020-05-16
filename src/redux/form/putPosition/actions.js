import axios from '../../../api';
import { formRequested, formSuccess, formError } from '../actions';

//Запрос на изменение должности
    const putJobPositionRequest = async ( id, object ) => {
        return await axios.put(`jobPosition/${id}`, object) 
    };

    export const putPosition = (object, id) => (dispatch) => { 
        dispatch( formRequested() );
        putJobPositionRequest(id, object)
            .then( () => dispatch( formSuccess() ))
            .catch( () => dispatch( formError() ))
    };
//--