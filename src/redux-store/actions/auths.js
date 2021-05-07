import * as types from "./actionTypes";
import { Axios } from "../../Utilities/axiosWithAuth";

export const register = (credentials, history) => dispatch => {
    dispatch({ type: types.REGISTER_REQUEST});
    Axios()
      .post(`${process.env.REACT_APP_API_BASE_URL}/api/auth/register`, credentials)
      .then(res => {
          console.log(res.data)
          localStorage.setItem("firstname", res.data.user.firstName);
          localStorage.setItem("lastname", res.data.user.lastName);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userID", res.data.user.id);
          dispatch({ type: types.REGISTER_SUCCESS, payload: res.data });
          history.push("/login");
      })
      .catch(error => {
          console.log(error);
          console.log(process.env.REACT_APP_API_BASE_URL);
          dispatch({ type: types.REGISTER_FAILURE, payload: error.message });
      });
};

export const login = (credentials, history) => dispatch => {
    dispatch({ type: types.LOGIN_START});
    Axios()
      .post(`${process.env.REACT_APP_API_BASE_URL}/api/auth/login`, credentials)
      .then(res => {
        localStorage.setItem("firstname", res.data.firstName);
        localStorage.setItem("lastname", res.data.lastName);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userID", res.data.id);
        dispatch({ type: types.LOGIN_SUCCESS, payload: res.data });
        history.push("/");
      })
      .catch(error => {
          console.log(error);
          dispatch({ type: types.LOGIN_FAILURE, payload: error.message });
      });
};

