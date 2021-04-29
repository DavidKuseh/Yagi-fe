import React from "react";
import { Link } from 'react-router-dom';
import { login } from "../redux-store/actions/auths";
import { connect } from 'react-redux';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";


const LoginStyle = styled.div`
    form {
        background: #59E087;
        width: 34%;
        margin: 20vh auto;
        display: flex;
        flex-direction: column;
        
        input {
            width: 65%;
            border: 3px solid #000000;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            margin: 1rem auto;
            padding: 0.2rem;
        }

        button {
            border: 1px solid #000000;
            box-sizing: border-box;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            width: 25%;
            margin: 1rem auto;
        }
    }
`

const Login = ({touched, errors}) => {
    
    return (
        <LoginStyle>
        <h3>Sign in</h3>
        <Form>
            <div className="input">
                {touched.email && errors.email}
                <Field 
                    name="email"
                    type="email"
                    placeholder="Email"
                />
            </div>
            <div className="input">
                {touched.password && touched.password}
                <Field
                    name="password"
                    type="password"
                    placeholder="Password"
                />
            </div>
            <button type="submit">Submit</button>
            <p>Don't have an account? Join <Link to= '/register'>here</Link></p>
        </Form>
        </LoginStyle>
    )
}

const FormikForm = withFormik({
    mapPropsToValues({ email, password }) {
        return {
            email:email || "",
            password: password || ""
        }
    },
    validationSchema: Yup.object({
        email: Yup.string()
        .email("Invalid email address")
        .required(),
        password: Yup.string()
        .required("required")
    }),
    handleSubmit(values, { props }) {
        props.login(values, props.history)
      }
})(Login);

export default connect(state => state, { login })(FormikForm);