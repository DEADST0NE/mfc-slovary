import axios from '../../../api';
import { formRequested, formSuccess, formError } from '../actions';
import {formDataAppend} from '../../../utils/formDataAppend';
import {getOffices} from '../../getOffices/actions';

//Запрос на изменения филиала
    const putOfficesRequest = async ( id, object ) => {
        return await axios.put(`Offices/${id}`, object) 
    };

    export const putOffices = (id, object) => (dispatch) => {
        setTimeout( () => { dispatch( getOffices() )}, 5000 );//Обновляем список филиалов 
        let formdata = new FormData(); 
        formDataAppend(formdata, object); 
        dispatch( formRequested() );
        putOfficesRequest(id, formdata)
            .then(() => dispatch( formSuccess() ))
            .catch(() => dispatch( formError() ))
    };
//--