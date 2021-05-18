import * as types from "../actions/actionTypes";

const initialProfile = {
    profileInfo: {},
    profile_success: false,
    profile_error: false
}

const profileReducer = (state = initialProfile, action) => {
    switch (action.type){
        case types.GET_PROFILE_REQUEST:
            return { ...state };
        case types.FETCH_PROFILE_SUCCESS:
                return { ...state, profile_success: true, profileInfo: action.payload};
        case types.FETCH_PROFILE_FAILURE:
                return { ...state, profile_success: false};
        default:
            return state;
    }
}

export default profileReducer;