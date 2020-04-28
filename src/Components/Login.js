import React from "react";
import { connect } from 'react-redux';
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

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
        onSubmit: values => {
            axios
            .post("http://localhost:5000/api/auth/login", values)
            .then(res => console.log(res))
            .catch(error => console.log(error))
        }
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email</label>
            <input 
                id ="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
            ) : null}
            <label htmlFor="password">Password</label>
            <input 
                id ="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
            ) : null}
            <button type="submit">Submit</button>
        </form>
    )
}

const mapStateToProps = store => {
    return {
        success : store.auth.login_success
    };
};

export default connect(mapStateToProps)(Login);