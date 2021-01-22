import { useEffect, useState } from "react";
import { Button, Tabs, Tab,  Form, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
function Register() 
{

  const [userName, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [age, setAge] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [averageRating, setAverageRating] = useState([]);
  const [User, setUser] = useState([]);



  useEffect(() => {

    axios
      .get("http://localhost:8080/user")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //This is how we created the createBooks function!
  const registerUser = (event) => {
    event.preventDefault();

        axios
          .post("http://localhost:8080/user", {
            userName: userName,
            pass: pass,
            age: age,
            phoneNumber: phoneNumber,
            email: email,
            averageRating: averageRating,
          
          }
          )
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => console.log(err));
     
    }
    


    return(
    
            <div className="App mt-5">
           
              <Tabs defaultActiveKey="adduser" id="uncontrolled-tab-example">
               
             
                  <Tab eventKey="adduser" name="Register User">
                    <h1 className="m-5">Register User</h1>
        
                 
                    <Card className="bg-light mx-auto" style={{ width: "30rem" }}>
                      <Card.Header>Register User</Card.Header>
        
                   
                      <Form onSubmit={(event) => registerUser(event)} className="m-3">
                        <Form.Group controlId="name">
                          <Form.Label>Username</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Username"
                            value={userName}
                            onChange={(event) => setUsername(event.target.value)}
                          />
                        </Form.Group>
        
                        <Form.Group controlId="password">
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter password"
                            value={pass}
                            onChange={(event) => setPass(event.target.value)}
                          />
                        </Form.Group>
        
                        <Form.Group controlId="age">
                          <Form.Label>Age</Form.Label>
                          <Form.Control
                             type="text"
                             placeholder="Enter age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                          >
                          </Form.Control>
                        </Form.Group>
        
                        <Form.Group controlId="ph">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control
                           type="text"
                           placeholder="Enter Phonenumber"
                            value={phoneNumber}
                            onChange={(e) => setphoneNumber(e.target.value)}
                          >
                            
                          </Form.Control>
                        </Form.Group>
        
                        <Form.Group controlId="mail">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                           type="text"
                           placeholder="Enter Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          >
                            
                          </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="rating">
                          <Form.Label>Average Rating</Form.Label>
                          <Form.Control
                           type="text"
                           placeholder="Provide Average rating"
                            value={averageRating}
                            onChange={(e) => setAverageRating(e.target.value)}
                          >
                            
                          </Form.Control>
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">
                          Register
                        </Button>
                      </Form>
                    </Card>
                  </Tab>
             
        
              
               
              </Tabs>
            </div>
    )
}



export default Register;