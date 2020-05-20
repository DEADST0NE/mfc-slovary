import axios from '../../../api';
import { formRequested, formSuccess, formError } from '../actions';
import {getOffices} from '../../getOffices/actions';
import {formDataAppend} from '../../../utils/formDataAppend';

//Запрос на добавление филиала
    const postOfficesRequest = async ( object ) => {
        return await axios.post(`Offices`, object) 
    };

    export const postOffices = (object) => (dispatch) => { 
        setTimeout( () => { dispatch( getOffices() )}, 5000 );//Обновляем список филиалов 
        let formdata = new FormData(); 
        formDataAppend(formdata, object); 
        dispatch( formRequested() );
        postOfficesRequest(formdata)
            .then( () => dispatch( formSuccess() ))
            .catch( () => dispatch( formError() ))
    };
//--