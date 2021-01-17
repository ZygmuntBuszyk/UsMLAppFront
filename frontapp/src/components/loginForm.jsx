import React from 'react';
import { AvForm , AvField }from  'availity-reactstrap-validation';
import { Button, FormGroup } from 'reactstrap';
import  axios  from 'axios'
import { useHistory } from "react-router-dom";

function LoginForm() {
let history = useHistory();
let error = false;
const handleValidSubmit = (e, values) => {
    axios.post("http://localhost:8000/api/login/", {
        ...values
        })
        .then(response => history.push('status'))
        .catch(err =>  {
          console.log('error', err);
           error = true;
        });
}
  return (
    <div className="LoginForm">
      <h1>Login </h1>
      {!!error && <div> 'Something went wrong' </div>}
        <AvForm onValidSubmit={handleValidSubmit}>
        <AvField name="email" label="Email" required />
        <AvField name="password"  type="password" label="Password" required />
        <FormGroup>
          <Button>Login</Button>
        </FormGroup>
      </AvForm>
    </div>
  );
}

export default LoginForm;
