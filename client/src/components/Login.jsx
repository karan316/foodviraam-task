import React from 'react';
import { useHistory } from "react-router-dom";
import Button from './common/Button';
import Input from './common/Input';
import FormContainer from "./common/FormContainer";
import * as yup from "yup";
import { Formik, ErrorMessage } from "formik";

const validationSchema = yup.object({
  email: yup.string().email().required("Email is required."),
  password: yup.string().required("Password is required.").min(5, "Password should be minimum 5 characters.").max(30, "Password should be maximum 50 characters."),
});

const Login = () => {
  const history = useHistory();
    return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Form submitted: ",values);
        history.push("/profile");
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
