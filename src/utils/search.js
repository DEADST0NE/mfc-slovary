export const searchItem = (string, mass, setHuk) =>{  
    if(string.trim() !==  ''){ 
        let found = [];
        let regexp = RegExp(string, 'ig');
        console.log(mass)
        for (let val of mass){
            for (let key in val) {
                if( regexp.test(val[key]) ){
                    if(found.length){
                        if( !(JSON.stringify(found[0]) === JSON.stringify(val)) ){
                            found.unshift(val);
                        }
                    }
                    else{
                        found.unshift(val);
                    } 
                }
            }
        } 
        setHuk(found); 
    }
} 

export const changeSetSearchText = (event, setSearchText, setSearchOn, setSearch) => {
    setSearchText(event.target.value);
    if(!event.target.value){
        setSearchOn(false);
        setSearch([]);
    };
}