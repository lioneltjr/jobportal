import React, { Fragment } from 'react'
import {  Button, Table } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './css/joblisting.css';
import { Route } from 'react-router-dom'

export default function JobListing(props) {

    const [jobs, setJobs] = useState([]);


    //function to get all the job listings in the database
    useEffect(() => {
        axios.get('http://localhost:8080/jobs').then(res => {
            console.log(res.data);
            setJobs(res.data);
        }).catch(error => {
            console.log(error.response)
            alert(JSON.stringify(error.response.data));
        });

    }, []);



    return <Fragment>
        <Table striped hover bordered>
            <thead>
                <tr>
                    <th>Job Name</th>
                    <th>Posted By</th>
                    <th>Reward</th>
                    <th>Chat</th>
                    <th>Apply</th>
                </tr>
            </thead>
            {jobs.map(jobs => {
                return <tbody><tr>
                    <td>{jobs.name}</td>
                    <td>{jobs.postedBy}</td>
                    <td>{jobs.price}</td>
                    <td><Button>Chat</Button></td>
                    <td><Route render={({ history }) => (
                        <Button
                            type='button'
                            onClick={() => {
                                history.push('/jobs/' + jobs.id, {
                                    id: jobs.id,
                                })
                            }}
                        >
                            Apply
                        </Button>
                    )} /></td>
                </tr></tbody>
            })}
        </Table>
    </Fragment>


{/* <Table striped hover bordered>
            <thead>
                <tr>
                    <th>Job Name</th>
                    <th>Posted By</th>
                    <th>Reward</th>
                    <th>Chat</th>
                    <th>Apply</th>
                </tr>
            </thead>
            {jobs.map(jobs => {
                return <tbody><tr>
                    <td>{jobs.name}</td>
                    <td>{jobs.postedBy}</td>
                    <td>{jobs.price}</td>
                    <td><Button>Chat</Button></td>
                    <td><Route render={({ history }) => (
                        <Button
                            type='button'
                            onClick={() => {
                                history.push('/jobs/' + jobs.id, {
                                    id: jobs.id,
                                })
                            }}
                        >
                            Apply
                        </Button>
                    )} /></td>
                </tr></tbody>
            })}
        </Table> */}


}
