//Author: Vaishnavi Priya


import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    description: " ",
    date: " ",
    price: " ",
    address: " "
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://a79008e6b1ffe4361a245eca16098189-1420962472.ap-southeast-1.elb.amazonaws.com:8080/jobs/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/profile">
        back to Home
      </Link>
      <h1 className="display-4">Job Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Task: {user.name}</li>
        <li className="list-group-item">Description: {user.description}</li>
        <li className="list-group-item">Date: {user.date}</li>
        <li className="list-group-item">Price: {user.price}</li>
        <li className="list-group-item">Address: {user.address}</li>
      </ul>
    </div>
  );
};

export default User;