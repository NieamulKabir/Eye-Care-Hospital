import './App.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './Pages/NotFound/NotFound';
import ServiceDetails from './Pages/Details/ServiceDetails/ServiceDetails';

import Header from './Pages/Shared/Header/Header';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/Login/Login/PrivateRoute/PrivateRoute';
import GetAppoinment from './Pages/Details/GetAppoinment/GetAppoinment';
import Appointment from './Pages/Home/Appoinment/Appointment';
import SignIn from './Pages/Login/SignIn';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
         
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/serviceDetails/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute exact path="/appoinment">
              <Appointment></Appointment>
            </PrivateRoute>
            <PrivateRoute path="/getAppoinment">
              <GetAppoinment></GetAppoinment>
            </PrivateRoute>
            <Route path="/signin">
              <SignIn></SignIn>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
      <br />
      <br />
    </div>
  );
}

export default App;
