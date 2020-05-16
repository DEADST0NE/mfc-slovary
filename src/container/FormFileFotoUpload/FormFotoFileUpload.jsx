import React, { useEffect } from 'react'; 
import {connect} from 'react-redux'; 
import { fileFormUploaded, fileFormClear } from '../../redux/fileFoto/action';

const FormFotoFileUpload = ({fileFormClear, fileFormUploaded}) => {

    useEffect(() => { fileFormClear() },[fileFormClear]);

    const uploaderFile = (event) => {
        event.persist(); //Для того чтобы событие не обновилось и поля обьекта не обнулились
        let file = event.target.files[0]; //Получаем первый файл
        var reader = new FileReader(); //Создаем экземпляр
        reader.readAsArrayBuffer(file); //Передаем файл для получаение в бинарном виде
        reader.onload = function() { //Результат перевода в бинарный вид
            let view1 = new DataView(reader.result); //Создаем экземпляр для работы с данымми в буфере 'Просто так к даннм не подобраться'
            let massByte = []; //Обьявляем массив
            for(let i=0; i < view1.buffer.byteLength; i++){ //Проходимся по байтам типа Int8 и сохраняем каждый байт в массив
                massByte.push(view1.getInt8(i))
            }
            fileFormUploaded(massByte);//Диспатчим готовый массив байтов
        };
    } 

    return <input type='file' accept="image/*" onChange={ (event)=>{ uploaderFile(event) } } />
}

const mapStateToProps = (state) => ({ 
    file: state.fotoFile.file,
})  
    
const mapDispatchToProps = { 
    fileFormUploaded,
    fileFormClear,
}

export default connect(mapStateToProps, mapDispatchToProps)(FormFotoFileUpload);