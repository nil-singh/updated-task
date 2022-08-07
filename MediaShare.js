import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import {
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  EmailIcon,
  EmailShareButton,
} from 'react-share';
import ReactShare from './reactShare';






const MediaShare = () => {

  {
    const shareUrl = 'https://dotkonnekt.com/';
    const text = 'This content will be shared..';
    return (


      <div style={{
        display: "flex",
        justifyContent: "center",
      }
      }>

        <div
          style={{
            background: '#0262',
            height: '60vh',
            width: '50%',
            margin: '100px',
            border: 'solid',
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <ReactShare />
        </div>
      </div >
    );
  }
}
export default MediaShare;


