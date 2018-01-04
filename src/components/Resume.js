import React, { Component } from 'react';
import './Resume.css'
import resume from '../assets/img/resume-1.png'

class Resume extends Component {
  render() {
    return (
      <div className='flex-b'>
        {/* <p className='click'> (click resume for pdf version)</p> */}

      <div className='resumecont'><a className='link' href='https://drive.google.com/file/d/13ygFQoCzEg15SX2jGtCeHP4GnIH_wLfP/view?ths=true' target='_blank'><img src={resume}/></a></div>

    </div>
  );
  }
}

export default Resume;
