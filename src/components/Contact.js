import React, { Component } from 'react';
import './Contact.css';
import git from '../assets/img/github.png';
import gmail from '../assets/img/gmail1.png'


class Contact extends Component {
  render() {
    return (
      <div className='flex'>
        <div className='git-pic'><img src={git}/><a href='https://github.com/chavandrew' target='_blank' className='git'>chavandrew</a></div>
        <div className='gmail1-pic'><img src={gmail}/><a href='mailto:chavandrew@gmail.com' target='_blank' className='git'>chavandrew@gmail.com</a> </div>

     </div>

  );
  }
}

export default Contact;
