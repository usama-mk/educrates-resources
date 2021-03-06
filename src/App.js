import './App.css';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import HeaderCard from './Components/HeaderCard/HeaderCard';
import Home from './Pages/Home/Home';
import Teachers from './Pages/Teachers/Teachers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SignIn from './Pages/SignIn/SignIn';
import Register from './Pages/Register/Register';
import LoginRegister from './Pages/LoginRegister/LoginRegister';
import AboutUs from './Pages/AboutUs/AboutUs';
import ScrollToTop from './scrollToTop.js';

function App() {

  return (


    <div className="App">
{/* Router is used for routing pages */}
      <Router>
        {/* Lets you scroll to top when a page is changed */}
        <ScrollToTop />  
{/* Switch renders one page at a time depending upon the path */}
        <Switch>

          <Route exact path='/teachers'>
            <Teachers />
          </Route>

          <Route exact path='/signin'>
            <SignIn />
          </Route>

          <Route exact path='/register'>
            <Register />
          </Route>

          <Route exact path='/aboutus'>
            <AboutUs />
          </Route>

          <Route exact path='/loginregister'>
            <LoginRegister />
          </Route>

          <Route exact path='/'>
            <Home />
          </Route>


        </Switch>

      </Router>
    </div>

  );
}

export default App;
