import React from 'react';
import { AvForm , AvField }from  'availity-reactstrap-validation';
import { Button, FormGroup } from 'reactstrap';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import '../App.css';

function RegiisterForm() {
let history = useHistory();
let error = false;
    const handleValidSubmit = (e, values) => {
        axios.post("http://localhost:8000/api/register/", {
            ...values
            })
            .then(response => history.push('login'))
            .catch(error => console.log(error));
    }
  return (
    <div className="RegiisterForm">
        <h1>Register</h1>
        {!!error && <div> 'Something went wrong' </div>}
       <AvForm onValidSubmit={handleValidSubmit}>
        <AvField name="email" label="Email" required />
        <AvField name="password" type="password" label="Password" required />
        <FormGroup>
          <Button>Submit</Button>
        </FormGroup>
      </AvForm>
    </div>
  );
}

export default RegiisterForm;
