import {
    CHANGE_BANNERS,
    CHANGE_RECOMMEND
} from "./constants.js";

const defaultState={
    banners: [],
    recommends: []
}


function reducer(state=defaultState,action){
    switch (action.type) {
        case CHANGE_BANNERS:
            return { ...state, banners: action.banners };
        case CHANGE_RECOMMEND:
            return { ...state, recommends: action.recommends };
        default:
            return state
    }
}


export default reducer;