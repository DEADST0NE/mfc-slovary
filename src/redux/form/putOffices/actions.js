import axios from '../../../api';
import { formRequested, formSuccess, formError } from '../actions';
import {getOffices} from '../../getOffices/actions';

//Запрос на изменения филиала
    const putOfficesRequest = async ( id, object ) => {
        return await axios.put(`Offices/${id}`, object) 
    };

    export const putOffices = (id, object) => (dispatch) => {
        setTimeout( () => { dispatch( getOffices() )}, 5000 );//Обновляем список филиалов 
        let formdata = new FormData(); 
        Object.keys(object).forEach(item => formdata.append(item, object[item])); // Переводим объект в форм дату
        dispatch( formRequested() );
        putOfficesRequest(id, formdata)
            .then(() => dispatch( formSuccess() ))
            .catch(() => dispatch( formError() ))
    };
//--