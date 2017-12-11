import React, { Component } from 'react';


import{
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
              <div>
                <nav className='tabs'>
                  <NavLink className='link' exact to='/'></NavLink>{' '}
                  <NavLink className='link' to='/home'>Home</NavLink>{' '}
                  <NavLink className='link' to='/projects'>Projects</NavLink>{' '}
                  <NavLink className='link' to='/resume'>Resume</NavLink>{' '}
                  <NavLink className='link' to='/contact'>Contact</NavLink>{' '}
                </nav>

              <h2>Andrew Chavez </h2>

                <Switch>
                 <Route exact path="/" />
                 <Route path="/home" component={Home}/>
                 <Route path="/about" component={Projects} />
                 <Route path="/addcard" component={Resume} />
                 <Route path="/addcard" component={Contact} />
              </Switch>
              </div>
            </Router>
      </div>
    );
  }
}

export default App;
