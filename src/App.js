
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Postjob from "./components/Postjob";
import UserProfile from "./components/UserProfile";
import Home from './components/homepage/Home';
import Register from "./components/Register";
import Edit from "./components/Edit";
import User from "./components/User";
import Postjobtest from "./components/Postjobtest";
import PostReviewPage from "./components/PostReviewPage";
import IndividualJobPage from './components/individualjobpage/IndividualJobPage';
import Update from "./components/Update";

// Here we write the functions!
function App() {

  return (
    <div className="background">
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/postjobtest" component={Postjobtest} />
          <Route exact path="/update" component={Update} />
          <Route exact path="/postjob" component={Postjobtest} />
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={UserProfile} />
          <Route exact path="/jobs/:id" component={IndividualJobPage} />
          <Route exact path="/review/:id" component={PostReviewPage} />
          <Route exact path="/edit/:id" component={Edit} />
          <Route exact path="/:id" component={User} />



        </Switch>
      </BrowserRouter>
    </div>
  )

}
export default App

