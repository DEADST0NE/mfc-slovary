import axios from '../../../api';
import { formRequested, formSuccess, formError } from '../actions';
import {formDataAppend} from '../../../utils/formDataAppend';
import { getJobPosition } from '../../getPosition/actions';

//Запрос на изменение должности
    const putJobPositionRequest = async ( id, object ) => {
        return await axios.put(`jobPosition/${id}`, object) 
    };

    export const putPosition = (object, id) => (dispatch) => { 
        setTimeout( () => { dispatch( getJobPosition() )}, 5000 );
        let formdata = new FormData();  
        formDataAppend(formdata, object); 
        dispatch( formRequested() );
        putJobPositionRequest(id, object)
            .then( () => dispatch( formSuccess() ))
            .catch( () => dispatch( formError() ))
    };
//--