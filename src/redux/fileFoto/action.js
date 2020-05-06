import {
    FILE_FORM_FOTO_UPLOADED,
    FILE_FORM_FOTO_CLEAR
} from '../constActions';

export const fileFormUploaded = (file) => ({
    type: FILE_FORM_FOTO_UPLOADED,
    payload: file
});

export const fileFormClear = () => ({
    type: FILE_FORM_FOTO_CLEAR
});