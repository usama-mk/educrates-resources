const selectedTabMusicReducer= (state=false, action)=>{
    switch(action.type){
        case 'TOGGLE_MUSIC_TEACHER':
            return action.payload;
        default:
            return state;
    }
}

export default selectedTabMusicReducer;