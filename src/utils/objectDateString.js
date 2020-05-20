export const objectDateString  = (object) => {
    let regexp = new RegExp('date','gi')
    Object.keys(object).forEach(item => { 
        if(object[item]){
            if( Object.keys(object[item]).length === 0 && regexp.test(item) ){
                object[item] = object[item].toISOString();
            }  
            else{
                Object.keys(object[item]).forEach(item2 => { 
                    if(regexp.test(item2) && object[item][item2]){
                        object[item][item2]=object[item][item2].toISOString();
                    }
                })
            }
        }
    })
} 