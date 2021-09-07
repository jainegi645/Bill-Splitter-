
//for  bill input field 
export const billAction = (bill) =>{
    return{
        type:"billAction",
        payload: bill
    };
}

//for slect discount button
export const tipAction = (tip) =>{
    return{
        type:"tipAction",
        payload:tip
    };
}


//for number of person input field 
export const personAction = (person) =>{
    return{
        type:'personAction',
        payload:person
    }
}