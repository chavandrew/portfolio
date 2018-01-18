import React, { Component } from 'react';
import './Home.css'
// import sky from '../assets/img/westgrass.jpg'
import andrew from '../assets/img/andrew1.jpeg'

class Home extends Component {
  render() {
    return (
      <div className='westgrass'>
        <div className='one'><img className='me' src={andrew}/></div>
      <div>  <p className='aboutme'><span className='hello'>hello</span><span className='nice'> - welcome to my website, I like clean design and writing functional code.</span> </p>
        </div>

     </div>

  );
  }
}

export default Home;
