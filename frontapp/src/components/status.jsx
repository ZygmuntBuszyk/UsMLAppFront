import React from 'react';
import '../App.css';
import { Button } from 'reactstrap';
import { useHistory, useLocation } from "react-router-dom";
import { useState, useEffect} from 'react';
import { getUserStorage, removeUserStorage as logout} from '../utils/storage';
import axios from 'axios';

function Status() {
let history = useHistory();
const location = useLocation();

const [isError, setError] = useState(false);
const [isAuthorized, setAuthorization] = useState(false);
const [isApproved, setApprove] = useState(undefined);

let User;

const getCurrentUser = () => {
  User = getUserStorage('User');
  if(User) {
    return true;
  }
  return false;
}

const logOut = () => {
  logout();
  history.push('login');
}

const getUserData = () => {
  console.log(User)
  axios.post("http://localhost:8000/api/getUserData/", 
  {User}
    )
    .then(response =>{
      setApprove(response.data)
    })
    .catch(error => setError(true));
}

useEffect(() => {
  const currentUser = getCurrentUser();
  
  if(location.state) setApprove(location.state)
  else getUserData(User) 
  
  setAuthorization(currentUser);

  if(!currentUser) history.push('login');
 }, [])

 
const HandleClick = () => {
  history.push('loanForm')
}

  return (
    <>
     <a className="logout" onClick={logOut}>Logout</a>

    <div className="Status">

      {isAuthorized ? 
  (  <>
   <h1>Your current loan status: </h1>
    
    {isApproved === undefined ? <h3> You need to fill your loan form first </h3> : 
      <>
        {
          isApproved ? 
            <h2>Approved</h2>
          :
          <h2>Rejected</h2>
        }
      </>
    }
     <Button onClick={HandleClick}>
       Check Your status  
     </Button>   </> ) :( <> </>)
    }
     
    </div>
    </>
  );
}

export default Status;
