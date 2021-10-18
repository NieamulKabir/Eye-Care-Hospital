import './App.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Pages/NotFound/NotFound';
import ServiceDetails from './Pages/Details/ServiceDetails/ServiceDetails';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/serviceDetails/:serviceId">
            <ServiceDetails></ServiceDetails>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>

          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
