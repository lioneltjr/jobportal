//Author: Vaishnavi Priya


import {Badge, Table, Tabs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Component, useEffect, useState } from 'react';
import {  Tab } from 'bootstrap';
import 'reactjs-popup/dist/index.css';
import { Link } from 'react-router-dom';

import React, { Fragment } from 'react'
import { Button, Card } from 'react-bootstrap';
import { Route } from 'react-router-dom'
import Navigation from './Navigation';
export default class UserProfile extends Component{
constructor(props){
  super(props);
  // const username = props.location.state.userName
  this.state = {
    data: [],
    userId : " ",
    userName: " ",
    age: " ",
    phoneNumber: " ",
    email: " ",
    averageRating : " "
 
}
}
componentDidMount(){

  axios.get('http://a79008e6b1ffe4361a245eca16098189-1420962472.ap-southeast-1.elb.amazonaws.com:8080/user/name/'+this.props.location.state.userName)

  .then(response => {
      console.log(response)
      this.setState({data: [response.data]})
      console.log(this.state.data)

  })
  .catch(error => {
      console.log(error)
  }
  )
}

render(){
  
  const {data}   = this.state
  console.log(this.state.data);

  return <Fragment>
    <Navigation/>
       {data.map( data => {  
        
                return <div>

<div className="container">
<div className="w-75 mx-auto shadow p-5"> 
 <div class="card">
  
  <div class="card-body">
  <Card className="text-center">
  <Card.Header variant="dark"> Job Profile </Card.Header>
  </Card>
        
   
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">User Id : {data.userId}</li>
    <li class="list-group-item">Username : {data.userName}</li>
    <li class="list-group-item">Age : {data.age}</li>
    <li class="list-group-item">Phone Number : {data.phoneNumber}</li>
    <li class="list-group-item">Email : {data.email}</li>
    <li class="list-group-item">Average Rating : {data.averageRating}</li>
  </ul>
 
</div>
        
</div> 
</div>       
</div> 
 })}

 </Fragment>
    
 }
}



