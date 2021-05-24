const teachersPageStateReducer= (state=false, action)=>{
    switch(action.type){
        case 'TOGGLE_TEACHERS_PAGE':
            return action.payload;
        default:
            return state;
    }
}

export default teachersPageStateReducer