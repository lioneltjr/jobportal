import './App.css';
import Home from './components/homepage/Home';
import React, { Fragment } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import IndividualJobPage from './components/individualjobpage/IndividualJobPage';
import PostReviewPage from './components/PostReviewPage';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import Postjob from './components/Postjob';
import Register from './Register';

function App() {
  return (
    <Fragment>
      <div className="background">
       <Router>
                <Switch>
                <Route exact path="/postjob" component={Postjob}/>
                <Route exact path="/register" component={Register}/>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/profile" component={UserProfile}/>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/jobs/:id" component={IndividualJobPage} />
                    <Route exact path="/review/:id" component={PostReviewPage} />
                </Switch>
            </Router>
            </div>
    </Fragment>
    
  );
}

export default App;
