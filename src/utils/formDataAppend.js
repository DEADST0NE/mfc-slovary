export const formDataAppend = (formdata, object) =>{
    Object.keys(object).forEach(
        item1 => { typeof(object[item1]) === 'object' ? 
        Object.keys(object[item1]).forEach(//Для вложености буду надеяться что не появится 3 вложеность ))
            item2 => formdata.append(`${item1}.${item2}`, object[item1][item2])
        ) : 
            formdata.append(item1, object[item1]
        )}); // Переводим объект в форм дату
    
} 