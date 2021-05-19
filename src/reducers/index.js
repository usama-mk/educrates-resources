import { combineReducers } from "redux";
import selectedTabAuditoryReducer from "./selectedTabAuditory";
import selectedTabKinestheticReducer from "./selectedTabKinesthetic";
import selectedTabReflectiveReducer from "./selectedTabReflective";
import selectedTabVisualReducer from "./selectedTabVisual";

const allReducers= combineReducers({
    selectedTabAuditory: selectedTabAuditoryReducer,
    selectedTabReflective: selectedTabReflectiveReducer,
    selectedTabKinesthetic: selectedTabKinestheticReducer,
    selectedTabVisual: selectedTabVisualReducer
});

export default allReducers;