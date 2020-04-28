import * as types from "./actionTypes";
import axios from "axios";

export const register = user => dispatch => {
    dispatch({ type: types.REGISTER_REQUEST});
    axios
      .post("http://localhost:5000/api/auth/register", user)
      .then(res => {
          dispatch({ type: types.REGISTER_SUCCESS, user: res.data });
      })
      .catch(error => {
          console.log(error);
          dispatch({ type: types.REGISTER_FAILURE });
      });
};

export const login = user => dispatch => {
    dispatch({ type: types.LOGIN_START});
    axios
      .post("http://localhost:5000/api/auth/login", user)
      .then(res => {
          dispatch({ type: types.LOGIN_SUCCESS, user: res.data });
      })
      .catch(error => {
          console.log(error);
          dispatch({ type: types.LOGIN_FAILURE });
      });
};