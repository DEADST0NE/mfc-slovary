import axios from '../../../api';
import { formRequested, formSuccess, formError } from '../actions';

//Запрос на добавление должности 
    const postJobPositionRequest = async (object) => {
        return await axios.post(`jobPosition`, object) 
    };

    export const postPosition = (object) => (dispatch) => { 
        dispatch( formRequested() );
        postJobPositionRequest(object)
            .then( () => dispatch( formSuccess() ))
            .catch( () => dispatch( formError() ))
    };
//--