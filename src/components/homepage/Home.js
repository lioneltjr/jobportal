import { Component } from "react";
import React, { Fragment } from 'react'
import JobListing from '../JobListing';
export default class Home extends Component{
    render(){
        return <Fragment>
            <JobListing/>
        </Fragment>
    }
}