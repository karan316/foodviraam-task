import React from 'react';
import {useHistory} from "react-router-dom";
import Button from './common/Button';
import Input from './common/Input';
import FormContainer from "./common/FormContainer";
import * as yup from "yup";
import { Formik, ErrorMessage } from "formik";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required."),
  password: yup.string().required("Password is required.").min(5, "Password should be minimum 5 characters.").max(30, "Password should be maximum 50 characters."),
});

const Register = () => {
  const history = useHistory();
    return (
        <Formik
      initialValues={{
        name: "",
        age: "",
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
      <FormContainer title="REGISTER" alternateText="Login" alternateLink="/login" onSubmit={handleSubmit}>
          <Input
          onChange={handleChange}  onBlur={handleBlur} id="name" label="Name" name="name" placeholder="Tell me your name"type="text"/>
          <ErrorMessage name="name"/>
          <Input
          onChange={handleChange}  onBlur={handleBlur} id="age" label="Age" name="age" placeholder="How old are you?" type="text"/>
          <ErrorMessage name="age"/>
        <Input
          onChange={handleChange}  onBlur={handleBlur} autoComplete="username" id="email" label="Email" name="email" placeholder="Email"type="email"/>
          <ErrorMessage name="email"/>
        <Input onChange={handleChange} onBlur={handleBlur} autoComplete="current-password" placeholder="Hope you remember your password :)" label="Password" type="password" name="password" />
          <ErrorMessage name="password"/>
        <Button buttonText="REGISTER" type="submit" disabled={isSubmitting} />
      </FormContainer>
    )}
    </Formik>
    )
}

export default Register
