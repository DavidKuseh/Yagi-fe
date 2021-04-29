import React from "react";
import { Link } from 'react-router-dom';
import { register } from "../redux-store/actions/auths";
import { connect } from 'react-redux';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

const RegisterStyle = styled.div`
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

const Register = ({ touched, errors }) => {
  return (
    <RegisterStyle>
      <h3>Sign Up</h3>
      <Form>
          <div className="input">
            {touched.firstName && errors.firstName}
            <Field
              name="firstName"
              type="text"
              placeholder="First name"
            />
          </div>
          <div className="input">
            {touched.lastName && errors.lastName}
            <Field
              name="lastName"
              type="text"
              placeholder="Last name"
            />
          </div>
          <div className="input">
            {touched.email && errors.email}
            <Field
              name="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="input">
            {touched.password && errors.password}
            <Field
              name="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <button type="submit">Submit</button>

          <p>Already have an account? Sign in <Link to='/login'>here</Link></p>
      </Form>
    </RegisterStyle>
  )
}


const FormikForm = withFormik({
  mapPropsToValues({ firstName, lastName, email, password }) {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      email: email || "",
      password: password || ""
    };
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
  handleSubmit(values, { props }) {
    props.register(values, props.history)
  }
})(Register);


export default connect(state => state, { register })(FormikForm);

