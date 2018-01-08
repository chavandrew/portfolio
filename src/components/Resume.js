import React, { Component } from 'react';
import './Resume.css'
import resume from '../assets/img/atomresume.png'

class Resume extends Component {
  render() {
    return (
      <div className='flex-b'>
        {/* <p className='click'> (click resume for pdf version)</p> */}

      <div className='resumecont'><a className='link' href='https://drive.google.com/drive/my-drive' target='_blank'><img src={resume}/></a></div>

    </div>
  );
  }
}

export default Resume;
