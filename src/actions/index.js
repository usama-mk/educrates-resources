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

export const toggleEnglishTeacher=(pay)=>{
    return{
        type: 'TOGGLE_ENGLISH_TEACHER',
        payload: pay
    };
}

export const toggleMathsTeacher=(pay)=>{
    return{
        type: 'TOGGLE_MATHS_TEACHER',
        payload: pay
    };
}

export const toggleMusicTeacher=(pay)=>{
    return{
        type: 'TOGGLE_MUSIC_TEACHER',
        payload: pay
    };
}

export const toggleScienceTeacher=(pay)=>{
    return{
        type: 'TOGGLE_SCIENCE_TEACHER',
        payload: pay
    };
}

export const toggleTeachersPage=(pay)=>{
    return{
        type: 'TOGGLE_TEACHERS_PAGE',
        payload: pay
    };
}

export const setUser=(pay)=>{
    return{
        type: 'SET_USER',
        payload: pay
    };
}