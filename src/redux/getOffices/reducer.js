import {
    GET_OFFICES_REQUEST,
    GET_OFFICES_SUCCESS,
    GET_OFFICES_ERROR
} from '../constActions';

const initialState = {
    data: [
        {
            "id": 1,
            "name": "ФГАУ РД \"МФЦ в РД\" по г. Махачкала (Кировский район)",
            "smallName": "ФГАУ РД \"МФЦ в РД\" по г. Махачкала (Кировский район)",
            "number": null,
            "mnemo": "MAHK",
            "phoneNumber": null,
            "schedule": null,
            "website": null,
            "skype": null,
            "email": null,
            "emailLogin": null,
            "emailPassword": null,
            "emailServer": null,
            "emailPort": null,
            "callCenterServer": null,
            "quantityWindows": null,
            "isHeadOperatorHall": null,
            "inn": null,
            "ogrn": null,
            "oktmo": null,
            "okato": null,
            "kpp": null,
            "vendorId": null,
            "esiaCenttId": null,
            "mdmUid": null,
            "convenience": null,
            "cikId": null,
            "officeCikName": null,
            "minTrudRequestNumber": 13543,
            "esiaOperatorSnils": null,
            "geographicCoordination": null,
            "isStructuralSubdivision": false,
            "tosp": null,
            "countPopulation": null
        },
        {
            "id": 2,
            "name": "ФГАУ РД \"МФЦ в РД\" по г. Махачкала (Советский район)",
            "smallName": "ФГАУ РД \"МФЦ в РД\" по г. Махачкала (Советский район)",
            "number": null,
            "mnemo": "MHSO",
            "phoneNumber": null,
            "schedule": null,
            "website": null,
            "skype": null,
            "email": null,
            "emailLogin": null,
            "emailPassword": null,
            "emailServer": null,
            "emailPort": null,
            "callCenterServer": null,
            "quantityWindows": null,
            "isHeadOperatorHall": null,
            "inn": null,
            "ogrn": null,
            "oktmo": null,
            "okato": null,
            "kpp": null,
            "vendorId": null,
            "esiaCenttId": null,
            "mdmUid": null,
            "convenience": null,
            "cikId": null,
            "officeCikName": null,
            "minTrudRequestNumber": 30150,
            "esiaOperatorSnils": null,
            "geographicCoordination": null,
            "isStructuralSubdivision": false,
            "tosp": null,
            "countPopulation": null
        },
        {
            "id": 3,
            "name": "Новое наименование филиала",
            "smallName": "Новое краткое наименование филиала",
            "number": null,
            "mnemo": "Нмнемоника",
            "phoneNumber": null,
            "schedule": null,
            "website": null,
            "skype": null,
            "email": null,
            "emailLogin": null,
            "emailPassword": null,
            "emailServer": null,
            "emailPort": null,
            "callCenterServer": null,
            "quantityWindows": null,
            "isHeadOperatorHall": null,
            "inn": null,
            "ogrn": null,
            "oktmo": null,
            "okato": null,
            "kpp": null,
            "vendorId": null,
            "esiaCenttId": null,
            "mdmUid": null,
            "convenience": null,
            "cikId": null,
            "officeCikName": null,
            "minTrudRequestNumber": 0,
            "esiaOperatorSnils": null,
            "geographicCoordination": null,
            "isStructuralSubdivision": null,
            "tosp": null,
            "countPopulation": null
        }
    ], 
    loading: true,
    error: false
} 
const reducerGetOffices = (state = initialState, action) => {
    switch(action.type){ 
        case GET_OFFICES_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            }
        case GET_OFFICES_SUCCESS: 
            return {
                ...state,
                offices: action.payload,
                loading: false,
                error: false
            }

        case GET_OFFICES_ERROR: 
            return {
                ...state,
                loading: false,
                error: true
            } 
        default: 
            return state;
    }
}

export default reducerGetOffices;

