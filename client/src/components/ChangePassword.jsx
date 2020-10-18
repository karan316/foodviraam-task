import React from 'react'
import Button from './common/Button';
import Input from './common/Input';
import FormContainer from "./common/FormContainer";
import * as yup from "yup";
import * as userService from "../services/userService";
import { Formik, ErrorMessage } from "formik";
import auth from "../services/authService";

const validationSchema = yup.object({
    newPassword: yup.string().required("Password is required.").min(5, "Password should be minimum 5 characters.").max(30, "Password should be maximum 50 characters.").label("New Password"),
    confirmPassword: yup
    .string()
    .required()
    .label("Confirm Password")
    .test('passwords-match', 'Passwords must match ya fool', function(value) {
      return this.parent.newPassword === value;
    }),
  });

const ChangePassword = ({user}) => {
    return (
        <div>
            <Formik
      initialValues={{
        newPassword: '',
        confirmPassword: '',
      }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
          console.log("Changed password: ",values);
          console.log("Changing password user: ", user);
          const response = await userService.changePassword(user, values.confirmPassword);
          console.log("Password change response: ", response);
          auth.logout();
          window.location = "/login";
      }}
    >
    {({isSubmitting, handleSubmit, handleBlur, handleChange, values}) => (
      <FormContainer title="CHANGE PASSWORD" onSubmit={handleSubmit} alternateText="" alternateLink="">
        <Input onChange={handleChange} onBlur={handleBlur} autoComplete="new-password" placeholder="Keep it strong!" label="New Password" type="password" name="newPassword" />
          <ErrorMessage name="newPassword"/>
          <Input onChange={handleChange} onBlur={handleBlur} autoComplete="new-password" placeholder="Type it again" label="Confirm Password" type="password" name="confirmPassword" />
          <ErrorMessage name="confirmPassword"/>
        <Button buttonText="CHANGE PASSWORD" type="submit" disabled={isSubmitting} />
    <pre>{JSON.stringify(values, null, 2)}</pre>
      </FormContainer>
    )}
    </Formik>
        </div>
    )
}

export default ChangePassword;
