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
import Footer from './components/Footer'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
              <div>
                <div className='homeimg'>

                    <h2>Andrew Chavez </h2>
                    <p> web developer</p>
                <nav className='tabs'>
                  <NavLink className='link' exact to='/'>Home</NavLink>{' '}
                  <NavLink className='link' to='/projects'>Projects</NavLink>{' '}
                  <NavLink className='link' to='/resume'>Resume</NavLink>{' '}
                  <NavLink className='link' to='/contact'>Contact</NavLink>{' '}
                </nav>


              
            </div>


                <Switch>
                 <Route exact path="/" component={Home}/>
                 <Route path="/projects" component={Projects} />
                 <Route path="/resume" component={Resume} />
                 <Route path="/contact" component={Contact} />
              </Switch>
              </div>
            </Router>

        <Footer />
      </div>
    );
  }
}

export default App;
