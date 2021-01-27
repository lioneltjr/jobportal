//Author: Vaishnavi Priya


import { useEffect, useState } from "react";
import { Button, Tabs, Tab, Form, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
function Register() {
  const history = useHistory();

  const [userName, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [age, setAge] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [User, setUser] = useState([]);



  useEffect(() => {

    axios
      .get("http://a79008e6b1ffe4361a245eca16098189-1420962472.ap-southeast-1.elb.amazonaws.com:8080/user")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //This is how we created the createBooks function!
  const registerUser = (event) => {
    event.preventDefault();

    axios
      .post("http://a79008e6b1ffe4361a245eca16098189-1420962472.ap-southeast-1.elb.amazonaws.com:8080/user", {
        userName: userName,
        pass: pass,
        age: age,
        phoneNumber: phoneNumber,
        email: email,
      }
      )
      .then((res) => {
        console.log(res.data);
        alert(JSON.stringify(res.data));
        history.push("/")
      })
      .catch((err) => console.log(err));

  }



  return (
    <Tabs defaultActiveKey="adduser" id="uncontrolled-tab-example">
      <Tab eventKey="adduser" name="Register User">
        <div className="App mt-5">
          <div className="w-50 mx-auto shadow p-5">
            <Card>
              <Card.Header id="username">Register User</Card.Header>
            </Card>

            <Form onSubmit={(event) => registerUser(event)} className="m-3">
              <Form.Group controlId="name">
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
                  type="text"
                  placeholder="Enter password"
                  value={pass}
                  onChange={(event) => setPass(event.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="age">
                <Form.Label id="username">Age</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                >
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="ph">
                <Form.Label id="username">Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Phonenumber"
                  value={phoneNumber}
                  onChange={(e) => setphoneNumber(e.target.value)}
                >

                </Form.Control>
              </Form.Group>

              <Form.Group controlId="mail">
                <Form.Label id="username">Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                >
                </Form.Control>
              </Form.Group>
              <Button variant="primary" type="submit">
                Register
                        </Button>
            </Form>
          </div>
        </div>
      </Tab>




    </Tabs>
  )
}



export default Register;