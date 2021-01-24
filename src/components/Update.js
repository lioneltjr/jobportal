import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import React  from 'react'
import { Button, Card } from 'react-bootstrap';
import { Route } from 'react-router-dom'
import Navigation from './Navigation';
  

function Update()
{

  
  const [Jobs, setJobs] = useState([])
  const [update, setUpdate] = useState(true);

  useEffect(() => {
    
    axios.get('http://a79008e6b1ffe4361a245eca16098189-1420962472.ap-southeast-1.elb.amazonaws.com:8080/jobs').then(res => {
      console.log(res.data);
      setJobs(res.data);
    })

  }, []);
  
   
      const deleteJobs = (event) => {
       let element = event.currentTarget;
       console.log(element.id);
          axios
            .delete("http://a79008e6b1ffe4361a245eca16098189-1420962472.ap-southeast-1.elb.amazonaws.com:8080/jobs/" + element.id)
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

       <div>
         <Navigation/>
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
        </div>
    )
 }

 export default Update

