import React, { Component } from 'react';
import './Footer.css';


class Footer extends Component {
  render() {
    return (
      <div className='footer'>
      <ul>
        <a href='mailto:chavandrew@gmail.com' target='_blank' className='git'><li>chavandrew@gmail.com</li></a>
          <li>(806) 632-4182</li>
            <li>Austin, TX</li>
      </ul>

      </div>

  );
  }
}

export default Footer;
