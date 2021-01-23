import {Table, Tabs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import {  Tab } from 'bootstrap';
import 'reactjs-popup/dist/index.css';
import { Link } from 'react-router-dom';


function UserProfile()
{
   
  const [Jobs, setJobs] = useState([]);
  const [Users, setUsers] = useState([]);
  const [update, setUpdate] = useState(true);

  useEffect(() => {
    axios.get('a36cdfde5edb54fc1be39fc625215c59-327723398.ap-southeast-1.elb.amazonaws.com:8080/jobs').then(res => {
      console.log(res.data);
      setJobs(res.data);
    })

  }, []);

  useEffect(() => {
    axios.get('a36cdfde5edb54fc1be39fc625215c59-327723398.ap-southeast-1.elb.amazonaws.com:8080/user').then(res => {
      console.log(res.data);
      setUsers(res.data);
    })

  }, []);

    
      const deleteJobs = (event) => {
       let element = event.currentTarget;
       console.log(element.id);
          axios
            .delete("a36cdfde5edb54fc1be39fc625215c59-327723398.ap-southeast-1.elb.amazonaws.com:8080/jobs/" + element.id)
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
            <div className= "container">
              <div className = "py-4"> 
              <h1> Jobs </h1>
              <Table class = "table border shadow">
                <thead class = "thead-dark ">
                  <tr>
                    <th>Id</th>
                    <th>Task</th>
                    <th>Desc</th>
                    <th>Date</th>
                    <th>Servicecharge</th>
                    <th>Address</th>
                    <th>Action</th>
                    
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
                              <Link class="btn btn-primary mr-2"  to={`/${element.id}`}>View</Link>
                              <Link class="btn btn-outline-primary mr-2" to = {`/edit/${element.id}`}>Edit</Link>
                              <Link class="btn btn-danger" id = {element.id}
                                onClick={(event) => deleteJobs(event)}>Delete</Link>
                              
                            </td>
                          </tr>
                      }
                    )}
                </tbody>
              </Table>
            </div>
            </div>
          </Tab>

          <Tab   eventKey="user" Task="My user"title = "User Profile">
          <Table striped bordered hover variant="outlined-light">
                <thead>
                  <tr>
                    <th>User Id</th>
                    <th>User Name</th>
                    <th>Age</th>
                    <th>Phone number</th>
                    <th>Email</th>
                    <th>Average rating</th>
                  </tr>
                </thead>
                <tbody>
            {
                    Users.map((element) => {
                   
                        return  <tr key={element.userId} id = {element.UserId}> 
                            <td>{element.userId}</td>
                            <td>{element.userName}</td>
                            <td>{element.age}</td>
                            <td>{element.phoneNumber}</td>
                            <td>{element.email}</td>
                            <td>{element.averageRating}</td>
                            </tr>
                      }

                      )}
                      </tbody>

                    </Table>
          </Tab>
      </Tabs>
    )

  
}
export default UserProfile;