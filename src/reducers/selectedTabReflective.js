const selectedTabReflectiveReducer=(state=false, action)=>{
    switch(action.type){
        case 'TOGGLEREFLECTIVE':
            return action.payload;

        default:
            return state;
    }
}

export default selectedTabReflectiveReducer;