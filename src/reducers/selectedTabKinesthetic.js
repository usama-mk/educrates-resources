const selectedTabKinestheticReducer= (state=false, action)=>{
    switch(action.type){
        case 'TOGGLEKINESTHETIC':
            return action.payload;
        default:
            return state;
    }
}

export default selectedTabKinestheticReducer;