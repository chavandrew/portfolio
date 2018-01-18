import React, { Component } from 'react';
import './Home.css'
// import sky from '../assets/img/westgrass.jpg'
import andrew from '../assets/img/andrew1.jpeg'

class Home extends Component {
  render() {
    return (
      <div className='westgrass'>
        <div className='me'><img src={andrew}/></div>
        <p className='aboutme'>hello, welcome to my personal website. I like to build things,fix things, travel, play music, walk my dog,run a mile and bowl. </p>

     </div>

  );
  }
}

export default Home;
