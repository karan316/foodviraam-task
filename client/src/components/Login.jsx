import React from 'react';
import Button from './common/Button';
import Input from './common/Input';
import FormContainer from "./common/FormContainer";
import * as yup from "yup";
import { Formik, ErrorMessage } from "formik";
import auth from "../services/authService";

const validationSchema = yup.object({
  email: yup.string().email().required("Email is required."),
  password: yup.string().required("Password is required.").min(5, "Password should be minimum 5 characters.").max(30, "Password should be maximum 50 characters."),
});

const Login = () => {
    return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        try {
          console.log("Form submitted: ",values);
          await auth.login(values.email, values.password);
          window.location = "/profile";
        } catch (error) {
          console.error(error);
        }
      }}
    >
    {({isSubmitting, handleSubmit, handleBlur, handleChange}) => (
      <FormContainer title="LOGIN" alternateText="Register" alternateLink="/register" onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}  onBlur={handleBlur} autoComplete="username" id="email" label="Email" name="email" placeholder="Email"type="email"/>
          <ErrorMessage name="email"/>
        <Input onChange={handleChange} onBlur={handleBlur} autoComplete="current-password" placeholder="Hope you remember your password :)" label="Password" type="password" name="password" />
          <ErrorMessage name="password"/>
        <Button buttonText="LOGIN" type="submit" disabled={isSubmitting} />
      </FormContainer>
    )}
    </Formik>

    )
}

export default Login
