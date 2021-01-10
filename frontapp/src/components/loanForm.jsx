import React from 'react';
import { AvForm , AvField }from  'availity-reactstrap-validation';
import { Button, FormGroup } from 'reactstrap';
import { axios } from 'axios'

function LoanForm() {
    const handleValidSubmit = (e, values) => {
        console.log(values)
        // axios
        // .post("https://jsonplaceholder.typicode.com/posts", {
        //     title: "Title of post",
        //     body: "Body of post"
        // })
        // .then(response => console.log(response.data))
        // .catch(error => console.log(error));
    }
  return (
    <div className="LoanForm">
        <h1>Loan Form</h1>
        <AvForm onValidSubmit={handleValidSubmit}>
        <AvField name="email" label="Email" required />
        <AvField name="password" label="Password" required />
        <FormGroup>
          <Button>Submit</Button>
        </FormGroup>
      </AvForm>
    </div>
  );
}

export default LoanForm;
