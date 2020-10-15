import React from 'react'
import Button from './common/Button';
import Input from './common/Input';
import FormContainer from "./common/FormContainer";

const Register = ({handleSubmit}) => {
    return (
        <FormContainer title="REGISTER" alternateText="Login" alternateLink="/login">
            <Input placeholder="Tell me your name" label="Name" type="text" name="name" />
            <Input placeholder="How old are you?" label="Age" type="text" name="age" />
            <Input placeholder="Email" label="Email" type="email" name="email" />
            <Input autocomplete  placeholder="Keep a strong password" label="Password" type="password" name="password" />
            <Button buttonText="REGISTER" type="submit" onSubmit={handleSubmit}/>
        </FormContainer>
    )
}

export default Register
