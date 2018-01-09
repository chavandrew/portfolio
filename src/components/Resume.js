import React, { Component } from 'react';
import './Resume.css'
import resume from '../assets/img/atomresume1.png'

class Resume extends Component {
  render() {
    return (
      <div className='flex-b'>
        {/* <p className='click'> (click resume for pdf version)</p> */}

      <div className='resumecont'><a className='link' href='https://drive.google.com/file/d/1i3fUtyFMMldyQEqVt8JIbefoGR7mu6PB/view?usp=sharing' target='_blank'><img src={resume}/></a></div>

    </div>
  );
  }
}

export default Resume;
