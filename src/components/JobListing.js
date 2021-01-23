import React, { Fragment } from 'react'
import { Button, Table, Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './css/joblisting.css';
import { Route } from 'react-router-dom'

export default function JobListing(props) {

    const [jobs, setJobs] = useState([]);


    //function to get all the job listings in the database
    useEffect(() => {
        axios.get('a36cdfde5edb54fc1be39fc625215c59-327723398.ap-southeast-1.elb.amazonaws.com:8080/jobs/search/?id='+2+'&status=Completed').then(res => {
            console.log(res.data);
            setJobs(res.data);
        }).catch(error => {
            console.log(error.response)
            alert(JSON.stringify(error.response.data));
        });

    }, []);



    return <Fragment>
        <div id="mylistingpage">
        {jobs.map(data => {
            return <Card id="myjoblistingcard" style={{ width: '30em'}}>
                <Card.Img variant="top" src="https://images.indianexpress.com/2020/03/dog-1-2.jpg" />
                <Card.Body>

                    <div>
                        <Card.Title>{data.name}</Card.Title>
                        <footer className="blockquote-footer">
                            Posted by <cite title="test">{data.postedBy}</cite>
                        </footer>
                        <Card.Body>
                        </Card.Body>
                        <Route render={({ history }) => (
                            <Button variant="secondary" id="myviewmorebtn" type='button' onClick={() => { history.push('/jobs/' + data.id, { id: data.id }) }}> View
                            </Button>
                        )} />
                    </div>
                
            </Card.Body>
            </Card>
            })}
            </div>
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
