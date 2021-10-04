import './App.css';import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavComponent from './components/NavComponents/NavComponent';
import Courses from './components/Courses/Courses';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import AboutUs from './components/AboutUS/AboutUs';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
     <Router>
        <NavComponent></NavComponent>
        <Switch>
          <Route exact path='/'>
              <Courses></Courses>
          </Route>
          <Route exact path='/home'>
              <Courses></Courses>
          </Route>
          <Route exact path='/service'>
              <Services></Services>
          </Route>
          <Route exact path='/about-us'>
              <AboutUs></AboutUs>
          </Route>
          <Route exact path='/login'>
              <Login></Login>
          </Route>
          <Route path='*'>
              <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
