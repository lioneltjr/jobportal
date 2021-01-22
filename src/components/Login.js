import { Button, Form } from 'react-bootstrap';
import { Link, useHistory} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useState } from 'react';


function Login ()
{
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const login =(event) => {
        event.preventDefault();
       axios.post('https://reqres.in/api/login', {
            email: email,
            password: password,
          }).then(res => {
            console.log(res.data);
            alert(JSON.stringify(res.data));    
            console.log(res.status); 
            if(res.status === 200)  
            {             
              history.push("/jobs") 
            }
            
            
          }).catch(function (error)  {
            if (error.response) {
              // Request made and server responded
              alert(JSON.stringify(error.response.data));
            }
          });
    } 
    return(


              <Form className="m-3">
                <Form.Group controlId="login">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter email address"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </Form.Group>
  
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </Form.Group>
                <Form.Label>Don't have an account?</Form.Label><Link to='/signup'> Register</Link> <br></br>
                <Button variant="primary" type="submit" className="m-5" onClick={(event) => login(event)}>
                  Submit
                </Button>
              </Form>
          )}
    
export default Login;