import { Component } from "react";
import React, { Fragment } from 'react'
import JobListing from '../JobListing';
import '../css/home.css';
import Navigation from '../Navigation';
export default class Home extends Component{
    render(){
        return <Fragment>
            <Navigation/>
            <div id="myHomepageContainer">
            <h1>Explore Jobs Around You</h1>
            <JobListing/>
            </div>
        </Fragment>
    }
}