const selectedTabScienceReducer= (state=false, action)=>{
    switch(action.type){
        case 'TOGGLE_SCIENCE_TEACHER':
            return action.payload;
        default:
            return state;
    }
}

export default selectedTabScienceReducer;