//Author: Lionel Teo 


import React, { Component, Fragment } from 'react'
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import Navigation from '../Navigation';
import '../css/home.css';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
export default class IndividualJobPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
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



    render() {
        const { data } = this.state
        function applyJob(data) {
            axios.put('http://a79008e6b1ffe4361a245eca16098189-1420962472.ap-southeast-1.elb.amazonaws.com:8080/jobs/' + data.id, {
                "status": "Pending",
                "name": data.name,
                "address": data.address,
                "price": data.price,
                "date": data.date,
                "description": data.description,
                "id": data.id,
                "lat":data.lat,
                "lng":data.lng

            }).then(res => {
                console.log(res.data);
                alert(JSON.stringify(res.data));
                showApply = false;
                showComplete = true;
                window.location.reload(false)
            }).catch(error => {
                console.log(error.response)
                alert(JSON.stringify(error.response.data));
            });
        }
        function cancelJob(data) {
            axios.put('http://a79008e6b1ffe4361a245eca16098189-1420962472.ap-southeast-1.elb.amazonaws.com:8080/jobs/' + data.id, {
                "status": "NotCompleted",
                "name": data.name,
                "address": data.address,
                "price": data.price,
                "date": data.date,
                "description": data.description,
                "id": data.id,
                "lat":data.lat,
                "lng":data.lng

            }).then(res => {
                console.log(res.data);
                alert(JSON.stringify(res.data));
                showApply = false;
                showComplete = true;
                window.location.reload(false)
            }).catch(error => {
                console.log(error.response)
                alert(JSON.stringify(error.response.data));
            });
        }
        function completeJob(data) {
            axios.put('http://a79008e6b1ffe4361a245eca16098189-1420962472.ap-southeast-1.elb.amazonaws.com:8080/jobs/' + data.id, {
                "status": "Completed",
                "name": data.name,
                "address": data.address,
                "price": data.price,
                "date": data.date,
                "description": data.description,
                "id": data.id,
                "lat":data.lat,
                "lng":data.lng

            }).then(res => {
                console.log(res.data);
                alert(JSON.stringify(res.data));
                window.location.reload(false)
            }).catch(error => {
                console.log(error.response)
                alert(JSON.stringify(error.response.data));
            });
        }
        var showApply = false;
        var showComplete = false;
        var showReview = false;
        var showCancel = false;

        function isCompletedCheck(data) {
            if (data.status === "Completed") {
                showReview = true;
            } else if (data.status === "Pending") {
                showComplete = true;
                showCancel = true;
            } else if (data.status === "NotCompleted") {
                showApply = true;
            }
        }


        return (
            <Fragment>
                <Navigation />
                <div id="myJobListingContainer">
                    {data.map(data => {
                        return <div>
                            <Card style={{ width: '70em' }}>
                                {/* <Card.Img variant="top" src="https://images.indianexpress.com/2020/03/dog-1-2.jpg" /> */}
                                <MapContainer id="mymapcontainer" center={[51.505, -0.09]} zoom={19} scrollWheelZoom={false}>
                                    <TileLayer
                                        attribution='<img src="https://docs.onemap.sg/maps/images/oneMap64-01.png" style="height:20px;width:20px;"/> New OneMap | Map data &copy; contributors, <a href="http://SLA.gov.sg">Singapore Land Authority</a>'
                                        url={"https://developers.onemap.sg/commonapi/staticmap/getStaticImage?layerchosen=night&lat="+data.lat+"&lng="+data.lng+"&zoom=17&width=512&height=512"}
                                    />
                                    <Marker position={[51.505, -0.09]}>
                                        <Popup>
                                            {data.address}
                                        </Popup>
                                    </Marker>
                                </MapContainer>
                                <Card.Body>

                                    <Card.Title>{data.name}</Card.Title>
                                    <footer className="blockquote-footer">
                                        Posted by <cite title="test">{data.postedBy}</cite>
                                    </footer>
                                    <Card.Body>
                                        <Card.Text>
                                            {data.description}
                                        </Card.Text>
                                    </Card.Body>
                                    {isCompletedCheck(data)}
                                    {showApply ? <Button onClick={() => applyJob(data)}>Accept Job</Button> : null}
                                    {showCancel ? <Button onClick={() => cancelJob(data)}>Cancel Job</Button> : null}
                                    {showComplete ? <Button onClick={() => completeJob(data)}>Complete Job</Button> : null}
                                    {showReview ? <Route render={({ history }) => (
                                        <Button type='button' onClick={() => { history.push('/review/' + data.id, { id: data.id, }) }}>
                                            Review
                                        </Button>
                                    )} /> : null}
                                    <div id="myChatBtn"><Button>Chat</Button></div>

                            
                        </Card.Body>
                            </Card>
                        </div>
                        })}
                </div>




            </Fragment>
        )
    }
}