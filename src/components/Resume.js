import React, { Component } from 'react';
import './Resume.css'
import resume from '../assets/img/resume-1.png'

class Resume extends Component {
  render() {
    return (
      <div className='resumecont'><img src={resume}/><a href='https://drive.google.com/file/d/13ygFQoCzEg15SX2jGtCeHP4GnIH_wLfP/view?ths=true' target='_blank'>Click here for downloadable version!</a></div>

  );
  }
}

export default Resume;
