const selectedTabEnglishReducer= (state=false, action)=>{
    switch(action.type){
        case 'TOGGLE_ENGLISH_TEACHER':
            return action.payload;
        default:
            return state;
    }
}

export default selectedTabEnglishReducer;