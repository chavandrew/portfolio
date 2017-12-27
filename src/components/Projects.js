import React, { Component } from 'react';
import './Projects.css'
import eargmix from '../assets/img/earg-mix.png';
import eargsound from '../assets/img/earg-sound.png';
import flippers from '../assets/img/flippers.png';
import tictac from '../assets/img/tic-tac.png';
import pupfetch from '../assets/img/pupfetch.png';


class Projects extends Component {
  render() {
    return (

    <section className="responsive">

      <ul className="grid-container">
        <li> <div className='grow'><img src={eargsound}/></div>
          <h3>Eargasmr</h3>
          <p> An app that helps users reach a state or relaxation. When selecting <a href="#">View more.</a></p>
        </li>
        <li><div className='grow'><img src={flippers}/></div>

          <h3>Flippers</h3>
          <p> <a href="https://flippers-tavern.firebaseapp.com/" target='_blank'>View more.</a></p>
        </li>
        <li><div className='grow'><img src={pupfetch}/></div>
          {/* <h3>Pupfetchr</h3> */}
          <p><a href="http://pupfetchrs.herokuapp.com/" target='_blank'>View more.</a></p>
        </li>
        <li><div className='grow'><img src={tictac}/></div>

          <h3>Tic-Tac-Toe</h3>
          <p> <a href="#">View more.</a></p>
        </li>
      </ul>
    </section>

  );
  }
}

export default Projects;
