export const toggleVisual=(pay)=>{
    return{
        type: 'TOGGLEVISUAL',
        payload: pay
    };
}

export const toggleAuditory=(pay)=>{
    return{
        type: 'TOGGLEAUDITORY',
        payload: pay
    };
}

export const toggleKinesthetic=(pay)=>{
    return{
        type: 'TOGGLEKINESTHETIC',
        payload: pay
    };
}

export const toggleReflective=(pay)=>{
    return{
        type: 'TOGGLEREFLECTIVE',
        payload: pay
    };
}