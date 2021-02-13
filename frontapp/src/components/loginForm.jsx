import React from 'react';
import { AvForm , AvField }from  'availity-reactstrap-validation';
import { Button, FormGroup } from 'reactstrap';
import  axios  from 'axios'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import { useState, useEffect} from 'react';
import {setUserStorage, getUserStorage } from '../utils/storage';

function LoginForm() {
const [isAuthorized, setAuthorization] = useState(false);
const [isError, setError] = useState(false);

let history = useHistory();

useEffect(() => {
 if(isAuthorized) history.push('status')
}, [isAuthorized])

const handleValidSubmit = (e, values) => {
    axios.post("http://localhost:8000/api/login/", {
        ...values
        })
        .then(response => {
          setUserStorage(response.data) 
          history.push('status');
        })
        .catch(err =>  {
           setError(true);
        });
}
  return (
    <div className="LoginForm">
      <h1>Login </h1>
      {!!isError && <div> 'Something went wrong' </div>}
        <AvForm onValidSubmit={handleValidSubmit}>
        <AvField name="email" label="Email" required />
        <AvField name="password"  type="password" label="Password" required />
        <FormGroup>
          <Button>Login</Button>
        </FormGroup>
      </AvForm>
      <p> Go to <Link to="/register">Register</Link></p>
    </div>
  );
}

export default LoginForm;
