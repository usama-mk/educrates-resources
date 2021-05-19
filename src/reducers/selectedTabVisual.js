const selectedTabVisualReducer= (state=false, action)=>{
    switch(action.type){
        case 'TOGGLEVISUAL':
            return action.payload;
        
        default:
            return state;
    }
};

export default selectedTabVisualReducer