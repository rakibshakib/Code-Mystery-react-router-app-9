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

function App() {
  return (
    <div className="App">
     <Router>
        <NavComponent></NavComponent>
        <Switch>
          <Route exact path='/'>
              <Courses></Courses>
          </Route>
          <Route path='/home'>
              <Courses></Courses>
          </Route>
          <Route path='/service'>
              <Services></Services>
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
