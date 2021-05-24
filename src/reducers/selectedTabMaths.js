const selectedTabMathsReducer= (state=false, action)=>{
    switch(action.type){
        case 'TOGGLE_MATHS_TEACHER':
            return action.payload;
        default:
            return state;
    }
}

export default selectedTabMathsReducer;