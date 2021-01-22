import React, { Component, Fragment } from 'react'
import axios from 'axios';
import {  Button } from 'react-bootstrap';
import { Route } from 'react-router-dom';

export default class IndividualJobPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
       }
    }
    componentDidMount(){

        axios.get('http://localhost:8080/jobs/'+this.props.match.params.id)

        .then(response => {
            console.log(response)
            this.setState({data: [response.data]})
            
        })
        .catch(error => {
            console.log(error)
        }
        )
    }

    

    render(){
        const { data } = this.state
        function applyJob(data){
            axios.put('http://localhost:8080/jobs/'+data.id, {
                "status":"Pending",
                "name":data.name,
                "address":data.address,
                "price":data.price,
                "date":data.date,
                "description":data.description,
                "id":data.id,

            }).then(res=> {
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
        function cancelJob(data){
            axios.put('http://localhost:8080/jobs/'+data.id, {
                "status":"Not Completed",
                "name":data.name,
                "address":data.address,
                "price":data.price,
                "date":data.date,
                "description":data.description,
                "id":data.id,

            }).then(res=> {
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
        function completeJob(data){
            axios.put('http://localhost:8080/jobs/'+data.id, {
                "status":"Completed",
                "name":data.name,
                "address":data.address,
                "price":data.price,
                "date":data.date,
                "description":data.description,
                "id":data.id,

            }).then(res=> {
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

        function isCompletedCheck(data){
            if (data.status === "Completed"){
                showReview = true;
            }else if (data.status === "Pending"){
                showComplete = true;
                showCancel = true;
            }else if(data.status === "Not Completed"){
                showApply =true;
            }
        }
        
        return(
            <Fragment>
                {data.map(data=> { 
                return <div>address:{data.address}<br/>
                name:{data.name}<br/>
                price:{data.price}<br/>
                date:{data.date}<br/>
                posted by:{data.postedBy}<br/>
                description:{data.description}<br/>
                id: {data.id}<br/>
                address: {data.address}<br/>
                status: {data.status}<br/>
                {isCompletedCheck(data)}
                {showApply ? <Button onClick={()=> applyJob(data)}>Accept Job</Button>:null}
                {showCancel ? <Button onClick={()=> cancelJob(data)}>Cancel Job</Button>:null}
                {showComplete ? <Button onClick={()=> completeJob(data)}>Complete Job</Button>:null}
                {showReview ? <Route render={({ history }) => (
                                    <Button
                                        type='button'
                                        onClick={() => {
                                            history.push('/review/' + data.id, {
                                                id: data.id,
                                            })
                                        }}
                                    >
                                        Review
                                    </Button>
                                )} />:null}
                <Button>Chat</Button>
                </div>  })}
            </Fragment>
        )
    }
}