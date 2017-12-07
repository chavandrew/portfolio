import React, { Component } from 'react';

import{
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>andrew chavez portfolio</h2>
        <Router>
              <div>
                <nav className='tabs'>
                  <NavLink exact to='/'>Home</NavLink>{' '}
                  <NavLink to='/about'>Projects</NavLink>{' '}
                  <NavLink to='/addcard'>About</NavLink>{' '}
                </nav>
                <Switch>
                 <Route exact path="/" component={Home}/>
                 <Route path="/about" component={Projects} />
                 <Route path="/addcard" component={About} />
              </Switch>
              </div>
            </Router>
      </div>
    );
  }
}

export default App;
