import React, { Component } from 'react';


import{
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
  HashRouter
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

        <HashRouter>
              <div>
                <div className="response">
                <div className='homeimg'>
                    <h2> andrew chavez  </h2>
                    <p className='dev'> web developer</p>

                <nav className='tabs'>
                  <NavLink className='link' exact to="/portfolio">home</NavLink>{' '}
                  <NavLink className='link' to='/projects'>projects</NavLink>{' '}
                  <NavLink className='link' to='/resume'>resume</NavLink>{' '}
                  <NavLink className='link' to='/contact'>contact</NavLink>{' '}
                </nav>

            </div>


                <Switch>
                  <Route exact path="/portfolio" component={Home} />
                 <Route path="/projects" component={Projects} />
                 <Route path="/resume" component={Resume} />
                 <Route path="/contact" component={Contact} />
              </Switch>

            </div>
            </div>
        </HashRouter>


        <Footer />

      </div>
    );
  }
}

export default App;
