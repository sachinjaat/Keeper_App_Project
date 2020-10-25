import React, { useState } from 'react';
import './login.css';
import { Button } from '@material-ui/core';
import { useStateValue } from './stateProvider';
import db, { auth, provider } from './firebase';
import { actionTypes } from './reducer';
import Header from './Header';


function Login() {
  const [{ }, dispatch] = useStateValue();
  const [userExist, setUserExist] = useState('false');

  const ifUserExist = (result) => {
    db.collection('users').onSnapshot(snapshot => {
      snapshot.docs.map((doc) => {
        if (doc.data().email === result.user.email) {
          setUserExist('true');
          //break;
        }
      })
    })
  }

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        ifUserExist(result)
        if (!userExist) {
          db.collection('users').doc(result.user.uid).set({
            email: result.user.email
          })
        }
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  }
  return (
    <div className="login">
      
      <div className="login__container">
      <Header />


        <div className="login__text">
          Signin to Proceed
        </div>

        <Button onClick={signIn}>Signin With Google</Button>
      </div>
    </div>
  );
}

export default Login;
