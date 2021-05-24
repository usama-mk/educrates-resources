import { combineReducers } from "redux";
import selectedTabAuditoryReducer from "./selectedTabAuditory";
import selectedTabEnglishReducer from "./selectedTabEnglish";
import selectedTabKinestheticReducer from "./selectedTabKinesthetic";
import selectedTabMathsReducer from "./selectedTabMaths";
import selectedTabMusicReducer from "./selectedTabMusic";
import selectedTabReflectiveReducer from "./selectedTabReflective";
import selectedTabScienceReducer from "./selectedTabScience";
import selectedTabVisualReducer from "./selectedTabVisual";
import teachersPageStateReducer from "./teachersPageState";

const allReducers= combineReducers({
    selectedTabAuditory: selectedTabAuditoryReducer,
    selectedTabReflective: selectedTabReflectiveReducer,
    selectedTabKinesthetic: selectedTabKinestheticReducer,
    selectedTabVisual: selectedTabVisualReducer,
    selectedTabMaths: selectedTabMathsReducer,
    selectedTabMusic: selectedTabMusicReducer,
    selectedTabScience: selectedTabScienceReducer,
    selectedTabEnglish: selectedTabEnglishReducer,
    teachersPage: teachersPageStateReducer
});

export default allReducers;