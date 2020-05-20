import axios from '../../../api';
import { formRequested, formSuccess, formError } from '../actions';
import {getOffices} from '../../getOffices/actions'; 
import {formDataAppend} from '../../../utils/formDataAppend';
import {objectDateString} from '../../../utils/objectDateString';

//Запрос на добавление оклада 
    const postSalariesRequest = async (object) => {
        return await axios.post(`JobSalaries`, object) 
    };

    export const postSalaries = (object) => (dispatch) => {
        setTimeout( () => { dispatch( getOffices() )}, 5000 );//Обновляем список филиалов   
        objectDateString(object);
        let formdata = new FormData();  
        formDataAppend(formdata, object); 
        dispatch( formRequested() );
        postSalariesRequest(formdata)
            .then(() => dispatch( formSuccess() ))
            .catch(() => dispatch( formError() ))
    };
//--