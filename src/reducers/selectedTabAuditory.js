const selectedTabAuditoryReducer= (state=false, action)=>{
    switch(action.type){
        case 'TOGGLEAUDITORY':
            return (action.payload);

        default:
            return state;
    }
}

export default selectedTabAuditoryReducer