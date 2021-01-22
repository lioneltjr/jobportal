import './App.css';
import Home from './components/homepage/Home';
import React, { Fragment } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import IndividualJobPage from './components/individualjobpage/IndividualJobPage';
import PostReviewPage from './components/PostReviewPage';
function App() {
  return (
    <Fragment>
       <Router>
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/jobs/:id" component={IndividualJobPage} />
                    <Route exact path="/review/:id" component={PostReviewPage} />
                </Switch>
            </Router>
    </Fragment>
  );
}

export default App;
