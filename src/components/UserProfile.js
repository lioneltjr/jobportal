import { Button, Card, Form, Table, Tabs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import {  Tab } from 'bootstrap';
import 'reactjs-popup/dist/index.css';
import { Link } from 'react-router-dom';
function UserProfile()
{
    const [id, setId] = useState('');
  const [Jobs, setJobs] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");
  
  const [update, setUpdate] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8080/jobs').then(res => {
      console.log(res.data);
      setJobs(res.data);
    })

  }, []);




    const updateJobs = (event) => {
        event.preventDefault();
        
          axios
            .put("http://localhost:8080/jobs/" + id, 
            {
                id:id,
                name: name,
                description: description,
                date: date,
                price: price,
                address: address,
              
            })
            .then((res) => {
                window.location.reload(false);
                alert(JSON.stringify(res.data));
            })
            .catch((err) => console.log(err));
        }
     
    
      const deleteJobs = (event) => {
       let element = event.currentTarget;
       console.log(element.id);
          axios
            .delete("http://localhost:8080/jobs/" + element.id)
            .then((res) => {
                if (res.status === 204) {
                    console.log('Deleting!');
                    element.parentNode.parentNode.remove();
                   alert("Job Deleted")
                  }
              console.log(res.data);
             
              setUpdate(!update);
            })
            .catch((err) => console.log(err));
        }
     
                  
     
    return(
        
        <Tabs defaultActiveKey="myJobs" id="uncontrolled-tab-example">    
      
          <Tab eventKey="myJobs" Task="My Jobs" title = "Current JobListing">
            <h1 className="m-5">My Jobs</h1>
            <div className="mx-5">
              <Table striped bordered hover variant="outlined-light">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Task</th>
                    <th>Desc</th>
                    <th>Date</th>
                    <th>Servicecharge</th>
                    <th>Address</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
            {
                    Jobs.map((element) => {
                   
                        return  <tr key={element.id} id = {element.id}> 
                            <td>{element.id}</td>
                            <td>{element.name}</td>
                            <td>{element.description}</td>
                            <td>{element.date}</td>
                            <td>{element.price}</td>
                            <td>{element.address}</td>
                            <td>
                              <Button
                                variant="outline-warning"
                                // onClick={ } 
                              >
                                Edit
                              </Button>
                            </td>
                            <td>
                              <Button
                                variant="outline-danger" id = {element.id}
                                onClick={(event) => deleteJobs(event)}
                              >
                                Delete
                              </Button>
                            </td>
                          </tr>
                        
                      }
                    )}
                </tbody>
              </Table>
            </div>
          </Tab>
         
          <Tab
            eventKey="editjob" title = "Edit job">
            <h1 className="m-5">Edit Job information</h1>
            <div className="form-popup" id={"myForm"}>
            {/* <div className="mx-5"> */}
            <Card className="bg-light mx-auto" style={{ width: "30rem" }}>
              <Card.Header>Edit Job information</Card.Header>
        
              <Form
                className="m-3"
              >
                  <Form.Group controlId="Task">
                  <Form.Label>Id</Form.Label>
                  <Form.Control
                    type="text"
                    value={id}
                    onChange={(event) => setId(event.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="Task">
                  <Form.Label>Task</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="Desc">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="Date">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="Servicecharge">
                  <Form.Label>Servicecharge</Form.Label>
                  <Form.Control
                    type="text"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                  />
                </Form.Group> 
                <Form.Group controlId="Address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                  />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={(event) => updateJobs(event)}>
                  Update
                </Button>
              </Form>
            </Card>
            </div>
          </Tab>
      
      </Tabs>
    )
}
export default UserProfile;