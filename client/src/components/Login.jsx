import React from 'react'
import Button from './common/Button';
import Input from './common/Input';
import FormContainer from "./common/FormContainer";
const Login = () => {
    return (
        <FormContainer title="LOGIN" alternateText="Register" alternateLink="#">
          <Input placeholder="Email" label="Email" type="email" />
          <Input placeholder="Hope you remember your password :)" label="Password" type="password" />
          <Button buttonText="LOGIN" type="submit"/>
        </FormContainer>
                    
    )
}

export default Login
