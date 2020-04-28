import React from "react";
import { connect } from 'react-redux';
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

const Register = ( success ) => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email:"",
            password:""
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
            .max(25, "Must be 25 characters or less")
            .required("Required"),
            lastName: Yup.string()
            .max(25, "Must be 25 characters or less")
            .required("Required"),
            email: Yup.string()
            .email("Invalid email address")
            .required(),
            password: Yup.string()
            .required("required")
        }),
        onSubmit: values => {
            axios
            .post("http://localhost:5000/api/auth/register", values)
            .then(res => console.log(res))
            .catch(error => console.log(error))
        }
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input 
                id ="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
                <div>{formik.errors.lastName}</div>
            ) : null}
            <label htmlFor="lastName">Last Name</label>
            <input 
                id ="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
                <div>{formik.errors.lastName}</div>
            ) : null}
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
        success : store.auth.register_success
    };
};

export default connect(mapStateToProps)(Register);