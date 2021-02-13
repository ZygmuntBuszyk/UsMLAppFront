import React from 'react';
import { AvForm , AvField }from  'availity-reactstrap-validation';
import { Button, FormGroup } from 'reactstrap';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import { useState} from 'react';
import '../App.css';

function RegiisterForm() {
let history = useHistory();
const [isError, setError] = useState(false);

    const handleValidSubmit = (e, values) => {
        axios.post("http://localhost:8000/api/register/", {
            ...values
            })
            .then(response => history.push('login'))
            .catch(error => setError(true));
    }
  return (
    <div className="RegiisterForm">
        <h1>Register</h1>
        {!!isError && <div> 'Something went wrong' </div>}
       <AvForm onValidSubmit={handleValidSubmit}>
        <AvField name="email" label="Email" required />
        <AvField name="password" type="password" label="Password" required />
        <FormGroup>
          <Button>Submit</Button>
        </FormGroup>
      </AvForm> 
      <p> Go to <Link to="/login">Login</Link></p>
    </div>
  );
}

export default RegiisterForm;
