//Author: Lionel Teo 


import React, { Component, Fragment } from 'react'
import axios from 'axios';
import { Button, Form, FormControl, Card, Container, Row, Col, Badge } from 'react-bootstrap';
import Navigation from './Navigation';

export default class PostReviewPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            description: "",
            rating: "",
            reviewName: ""
        };
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {

        axios.get('http://a79008e6b1ffe4361a245eca16098189-1420962472.ap-southeast-1.elb.amazonaws.com:8080/jobs/' + this.props.match.params.id)

            .then(response => {
                console.log(response)
                this.setState({ data: [response.data] })

            })
            .catch(error => {
                console.log(error)
            }
            )
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.description)
        axios.post('http://a79008e6b1ffe4361a245eca16098189-1420962472.ap-southeast-1.elb.amazonaws.com:8080/review/', {

            name: this.name,
            description: this.description,
            date: this.date,
            price: this.price,
            address: this.address,
            status: this.status,
            postedBy: this.postedBy,
            posterId: this.posterId,
            seekerId: this.seekerId,
            acceptedBy: this.acceptedBy,
        }).then(res => {
            console.log(res.status);
            alert(JSON.stringify(res.data))
        }).catch(error => {
            console.log(error.response)
            //alert(JSON.stringify(error.response.data));
        });
    }


    render() {
        const { data } = this.state
        return (
            <Fragment>
                <Navigation />
                <div className="App mt-5">

                    <div className="w-50 mx-auto shadow p-5">

                        {data.map(data => {
                            return <div>
                                <Card id="Review">
                                    <Card.Body>
                                        <h1 id="logo">
                                            <Badge variant="dark">How was your experience with {data.name}</Badge>
                                        </h1>
                                        <Form onSubmit={this.handleSubmit}>
                                            <Form.Label>Review Name</Form.Label>
                                            <FormControl type="text" placeholder="Enter Review Name" name="reviewName" defaultValue={this.state.reviewName} onChange={e => this.onChange(e)} />
                                            <Form.Label>Review Description</Form.Label>
                                            <FormControl type="text" placeholder="Enter Review Description" name="description" defaultValue={this.state.description} onChange={e => this.onChange(e)} />
                                            <Form.Label>Rating</Form.Label>
                                            <FormControl type="text" placeholder="Enter out of 10 (to be changed to star rating)" name="rating" defaultValue={this.state.rating} onChange={e => this.onChange(e)} />
                                            <Container id="login-container">
                                                <Row>
                                                    <Col><Button id="button" block size="sm" variant="success" type="submit" >Submit Review</Button></Col>
                                                </Row>
                                            </Container>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </div>
                        })}
                    </div></div>
            </Fragment>
        )
    }
}