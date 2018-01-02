import React, { Component } from 'react';
import './Contact.css';
import git from '../assets/img/github.png';
import gmail from '../assets/img/gmail1.png';
import linked from '../assets/img/linkedin.png';

class Contact extends Component {
  render() {
    return (
      <div className='flex'>
        <div className='git-pic'><a href='https://github.com/chavandrew' target='_blank' className='git'> <img className='imgs' src={git}/></a></div>
        <div className='gmail1-pic'><a href='mailto:chavandrew@gmail.com' target='_blank' className='git'><img className='imgs' src={gmail}/></a> </div>
        <div className='linked-pic'><a href='https://www.linkedin.com/in/chavez-andrew/' target='_blank' className='git'> <img className='imgs' src={linked}/></a> </div>
     </div>

  );
  }
}

export default Contact;
