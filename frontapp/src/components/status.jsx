import React from 'react';
import '../App.css';
import { Button } from 'reactstrap';
import { useHistory } from "react-router-dom";

function Status() {
  let history = useHistory();
//     axios.get("https://jsonplaceholder.typicode.com/todos/1")
//   .then(response => console.log("response", response.data))
const HandleClick = () => {
  history.push('loanForm')
}
  return (
    <div className="Status">
      <h1>Your current loan status: </h1>
        <h2>OK</h2>

        <Button onClick={HandleClick}>
          Check Your status  
        </Button>  
    </div>
  );
}

export default Status;
