import * as types from "./actionTypes";
import { axiosWithAuth } from "../../Utilities/axiosWithAuth";

// User profile
export const getUserProfile = () => dispatch => {
  dispatch({ type: types.GET_PROFILE_REQUEST });
  axiosWithAuth()
    .get(`${process.env.REACT_APP_API_BASE_URL}/api/profile`)
    .then(res => {
      const profileData = { ...res.data }
        dispatch({ type: types.FETCH_PROFILE_SUCCESS, payload: profileData })
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: types.FETCH_PROFILE_FAILURE, payload: error.message });
  });
}