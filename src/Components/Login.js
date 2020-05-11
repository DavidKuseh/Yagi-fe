import React from "react";
import { connect } from 'react-redux';
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

const LoginStyle = styled.div`
    form {
        background: #59E087;
        width: 34%;
        margin: auto;
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

const Login = ( success ) => {
    const formik = useFormik({
        initialValues: {
            email:"",
            password:""
        },
        validationSchema: Yup.object({
            email: Yup.string()
            .email("Invalid email address")
            .required(),
            password: Yup.string()
            .required("required")
        }),
        onSubmit: () => {
            console.log("Login successful")
        }
    });
    return (
        <LoginStyle>
        <form onSubmit={formik.handleSubmit}>
            <h3>Sign in</h3>
            <input 
                id ="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="Email"
            />
            {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
            ) : null}
            <input 
                id ="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder="Password"
            />
            {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
            ) : null}
            <button type="submit">Submit</button>
            <p>Don't have an account? Join <a href="http://www.google.com" target="_blank" rel="noopener noreferrer">here</a> </p>
        </form>
        </LoginStyle>
    )
}

const mapStateToProps = store => {
    return {
        success : store.auth.login_success
    };
};

export default connect(mapStateToProps)(Login);