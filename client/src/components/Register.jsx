import React from 'react'
import Button from './common/Button';
import Input from './common/Input';
import FormContainer from "./common/FormContainer";

const Register = () => {
    return (
        <FormContainer title="REGISTER" alternateText="Login" alternateLink="#">
            <Input placeholder="Tell me your name" label="Name" type="text" />
            <Input placeholder="How old are you?" label="Age" type="text" />
            <Input placeholder="Email" label="Email" type="email" />
            <Input placeholder="Keep a strong password" label="Password" type="password" />
            <Button buttonText="REGISTER" type="submit"/>
        </FormContainer>
    )
}

export default Register
