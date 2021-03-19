import React from "react";
import firebaseConfig from "./firebase.config";
import firebase from "firebase/app";
import "firebase/auth";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "../../App";

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    


    const handleGoogleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase
          .auth()
          .signInWithPopup(provider)
          .then((result) => {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email: email };
            setLoggedInUser(signedInUser);
            
          })
          .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
      };
  return (
    <div className="container mt-5 login-area">
      
      {
        loggedInUser.name ? <h4 className='welcome'>Welcome, {loggedInUser.name}</h4> : <h4 className='welcome'>Please Login to Continue</h4>
      }
      
      <Form>

        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Name" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="email" placeholder="Email" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>

        
        <Form.Group as={Row} controlId="formHorizontalCheck">
          <Col sm={{ span: 10, offset: 2 }}>
            <Form.Check label="Remember me" />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button>Login</Button>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button onClick={handleGoogleLogin}>Continue with Google</Button>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button>Continue with Facebook</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Login;
