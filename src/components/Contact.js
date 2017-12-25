import React, { Component } from 'react';
import './Contact.css';
import git from '../assets/img/github.png';
import gmail from '../assets/img/gmail1.png'


class Contact extends Component {
  render() {
    return (
      <div>
        <div className='git-pic'><img src={git}/></div>
        <div className='gmail1-pic'><img src={gmail}/> </div>

     </div>

  );
  }
}

export default Contact;
