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
        <li> <div className='flip'><img src={eargsound}/></div>
          <h3>Eargasmr</h3>
          <p> <a href="#">View more.</a></p>
        </li>
        <li><div className='earg'><img src={flippers}/></div>

          <h3>Flippers</h3>
          <p> <a href="https://flippers-tavern.firebaseapp.com/">View more.</a></p>
        </li>
        <li><div className='earg'><img src={pupfetch}/></div>
          <h3>Pupfetchr</h3>
          <p><a href="#">View more.</a></p>
        </li>
        <li><div className='earg'><img src={tictac}/></div>

          <h3>Tic-Tac-Toe</h3>
          <p> <a href="#">View more.</a></p>
        </li>
      </ul>
    </section>

  );
  }
}

export default Projects;
