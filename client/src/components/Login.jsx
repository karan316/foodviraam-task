import React from 'react'
import Button from './common/Button';
import Input from './common/Input';
import FormContainer from "./common/FormContainer";
const Login = ({handleSubmit}) => {
    return (
        <FormContainer title="LOGIN" alternateText="Register" alternateLink="/register">
          <Input placeholder="Email" label="Email" type="email" name="email" />
          <Input autocomplete placeholder="Hope you remember your password :)" label="Password" type="password" name="password" />
          <Button buttonText="LOGIN" type="submit" onSubmit={handleSubmit} />
        </FormContainer>
                    
    )
}

export default Login
