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

      <section class="responsive">

      <ul class="grid-container">
        <li> <div className='flip'><img src={eargsound}/></div>
          <h3>Eargasmr</h3>
          <p>In the real world, you don't know how long the content will be. Writers will write what they need. Photos will be cropped to the shape that they should be. That's good. Make a system that allows this. You want it to be flexible and robust. <a href="#">View more.</a></p>
        </li>
        <li><div className='earg'><img src={flippers}/></div>

          <h3>Flippers</h3>
          <p>In the real world, you don't know how long the content will be. Writers will write what they need. Photos will be cropped to the shape that they should be. <a href="#">View more.</a></p>
        </li>
        <li><div className='earg'><img src={tictac}/></div>
          <h3>Pupfetchr</h3>
          <p>In the real world, you don't know how long the content will be. Writers will write what they need. <a href="#">View more.</a></p>
        </li>
        <li><div className='earg'><img src={pupfetch}/></div>

          <h3>Tic-Tac-Toe</h3>
          <p>In the real world, you don't know how long the content will be. Writers will write what they need. <a href="#">View more.</a></p>
        </li>
      </ul>
    </section>

  );
  }
}

export default Projects;
