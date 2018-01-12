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

      <ul className='flexx'>
        <li> <div className='grow'><img src={eargsound}/></div>
          <h3 className='para'>Eargasmr</h3>
          <p className='para'> ASMR is growing rapidly in popularity. Currently users almost exclusively use YouTube and ASMRtists accrue millions of views for their soothing sound effects. Our app allows users to create their own ASMR sessions with sounds of their choosing. React Native & React-Native-Sound</p>
        </li>
        <li><div className='grow'><img src={flippers}/></div>

          <h3 className='para'>Flippers</h3>
          <p className='para'>A website for a pinball tavern in Lubbock, TX currently in developement. Basic outline of the website-- will add CMS so the tavern can update content as needed. React  </p><a href="https://flippers-tavern.firebaseapp.com/" target='_blank'>View more.</a>
        </li>
        <li><div className='grow'><img src={pupfetch}/></div>
          <h3 className='para'>Pupfetchr</h3>
          <p className='para'>PupFetchr is an app designed to help people search for a dog from local dog shelters in Austin, TX for their next furry friend.  Using the Petfinder API a list of dogs is returned. Worked on the back-end of this group project. jQuery, Mongoose, MEN stack, Express.</p><a href="http://pupfetchrs.herokuapp.com/" target='_blank'>View more.</a>
        </li>
        <li><div className='grow'><img src={tictac}/></div>

          <h3 className='para'>Tic-Tac-Toe</h3>
          <p className='para'> The classic but always fun game of tic-tac-toe. jQuery, Bootstrap, HTML, CSS</p><a href="#">View more.</a>
        </li>
      </ul>
    </section>

  );
  }
}

export default Projects;
