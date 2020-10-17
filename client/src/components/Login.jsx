import React from 'react'
import Button from './common/Button';
import Input from './common/Input';
import * as yup from "yup";
import FormContainer from "./common/FormContainer";
import { Formik, Form, Field, ErrorMessage } from "formik";
const validationSchema = yup.object({
  email: yup.string().email().required("Email is required."),
  password: yup.string().required("Password is required.").min(5).max(30),
});

const Login = () => {
    return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values) => {
        console.log("Form submitted: ",values);
      }}
    >
    {({isSubmitting, handleSubmit, handleBlur, handleChange, values}) => (
      <FormContainer title="LOGIN" alternateText="Register" alternateLink="/register" onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}  onBlur={handleBlur} id="email" label="Email" name="email" placeholder="Email"type="email"/>
        <Input onChange={handleChange} onBlur={handleBlur} autoComplete="current-password" placeholder="Hope you remember your password :)" label="Password" type="password" name="password" />
        <Button buttonText="LOGIN" type="submit" disabled={isSubmitting} />
        <pre>{JSON.stringify(values, null, 2)}</pre>
      </FormContainer>
    )}
    </Formik>

    )
}

export default Login
