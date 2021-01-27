//Author: Vaishnavi Priya


import { Button, Form, Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useState, Fragment } from 'react';

function Login() {
  const history = useHistory();
  const [userName, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const login = (event) => {
    event.preventDefault();
    axios.post('http://a79008e6b1ffe4361a245eca16098189-1420962472.ap-southeast-1.elb.amazonaws.com:8080/user/login', {
      userName: userName,
      pass: pass,
    }).then(res => {
      console.log(res.data);
      alert(JSON.stringify(res.data));
      console.log(res.status);
      if (res.status === 200) {
        history.push("/profile", { userName: userName })

      }


    }).catch(function (error) {
      if (error.response) {
        // Request made and server responded
        alert(JSON.stringify(error.response.data));
      }
    });
  }
  return (
    <Fragment>



<div className="App mt-5">

        <div className="w-50 mx-auto shadow p-5">
        <p1 id="test">MyHandyJob</p1>
          <Form className="m-3">
            <Form.Group controlId="login">
              <Form.Label id="username">Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username"
                value={userName}
                onChange={(event) => setUsername(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label id="username">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={pass}
                onChange={(event) => setPass(event.target.value)}
              />
            </Form.Group>
            <Form.Label>Don't have an account?</Form.Label><Link to='/register'> Register</Link> <br></br>
            <Button variant="primary" type="submit" className="m-5" onClick={(event) => login(event)}>
              Submit
            </Button>
          </Form>
        </div></div>


    </Fragment>
  )
}

export default Login;