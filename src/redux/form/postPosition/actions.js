import axios from '../../../api';
import { formRequested, formSuccess, formError } from '../actions';
import {formDataAppend} from '../../../utils/formDataAppend';
import { getJobPosition } from '../../getPosition/actions'

//Запрос на добавление должности 
    const postJobPositionRequest = async (object) => {
        return await axios.post(`jobPosition`, object) 
    };

    export const postPosition = (object) => (dispatch) => {  
        setTimeout( () => { dispatch( getJobPosition() )}, 5000 );
        let formdata = new FormData();  
        formDataAppend(formdata, object); 
        dispatch( formRequested() );
        postJobPositionRequest(formdata)
            .then( () => dispatch( formSuccess() ))
            .catch( () => dispatch( formError() ))
    };
//--