import React from 'react';
import { AvForm , AvField,  AvCheckbox, AvCheckboxGroup }from  'availity-reactstrap-validation';
import { Button, FormGroup, Container } from 'reactstrap';
import { axios } from 'axios'
import "../App.css"
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
      <Container>
      <h1>Loan Form</h1>
      <div className="loanFormBox">
        <AvForm onValidSubmit={handleValidSubmit}>
        <AvField name="Firstname" label="Firstname" required />
        <AvField name="Lastname" label="Lastname" required />
        <AvField name="Dependants" label="Dependants" type="number" />
        <AvField name="Applicantincome" label="Applicantincome" type="number" />
        <AvField name="Coapplicatincome" label="Coapplicatincome" type="number" />
        <AvField name="Loanamt" label="Loanamt" type="number" />
        <AvField name="Loanterm" label="Loanterm" type="number" />
        <AvField name="Credithistory" label="Credithistory" type="number" />
        <AvCheckboxGroup inline name="Gender" label="Gender" validate={{max: {value: 1}}}>
          <AvCheckbox label="Male" value="Male" />
          <AvCheckbox label="Female" value="Female" />
        </AvCheckboxGroup>
        <AvCheckboxGroup inline name="Married" label="Married" validate={{max: {value: 1}}}>
          <AvCheckbox label="Yes" value="Yes" />
          <AvCheckbox label="No" value="No" />
        </AvCheckboxGroup>
        <AvCheckboxGroup inline name="Graduatededucation" label="Graduatededucation" validate={{max: {value: 1}}}>
          <AvCheckbox label="Graduated" value="Graduated" />
          <AvCheckbox label="Not Graduate" value="Not_Graduate" />
        </AvCheckboxGroup>
        <AvCheckboxGroup inline name="Selfemployed" label="Selfemployeds" validate={{max: {value: 1}}}>
          <AvCheckbox label="Yes" value="Yes" />
          <AvCheckbox label="No" value="No" />
        </AvCheckboxGroup>
        <AvCheckboxGroup inline name="Area" label="Area" validate={{max: {value: 1}}}>
          <AvCheckbox label="Rural" value="Rural" />
          <AvCheckbox label="Semiurban" value="Semiurban" />
          <AvCheckbox label="Urban" value="Urban" />
        </AvCheckboxGroup>
        <FormGroup>
          <Button>Submit</Button>
        </FormGroup>
      </AvForm>
      </div>
      </Container>
      
    </div>
  );
}

export default LoanForm;
