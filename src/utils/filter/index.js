export const filter = (mass, nameObject, boolSort, setBoolSort) =>{//сортировка по возростанию или убыванию 
    mass.sort((a, b) => {
        let oneItem = a[nameObject]; 
        let twoItem = b[nameObject];
        console.log(oneItem, twoItem)
        console.log(oneItem < twoItem)
        if (oneItem < twoItem) 
            return boolSort ? 1 : -1
        else 
            return boolSort ? -1 : 1
    })
    setBoolSort(!boolSort);
    console.log(mass)
}