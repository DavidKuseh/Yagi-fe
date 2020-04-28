import * as types from "../actions/actionTypes";

const initialState = {
    user: null,
    register_error: false,
    register_success: false,
    login_error: false,
    login_success: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.REGISTER_REQUEST:
            return { ...state };
        case types.REGISTER_SUCCESS:
            return { ...state, register_success: true};
        case types.REGISTER_FAILURE:
            return { ...state, register_success: false};
        case types.LOGIN_START:
            return {
                ...state
            }
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                login_success: true,
                user: action.user
            }
        case types.LOGIN_FAILURE:
            return {
                ...state,
                login_success: false
            }
        default:
            return state;
    }
}

export default authReducer;