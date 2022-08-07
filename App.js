//import './App.css';
import MediaShare from './MediaShare'
//import Stylesheet from './components/Stylesheet';
//import myStyle from './components/myStyle.css'
import { IoIosShareAlt } from "react-icons/io";

import "./Style.css";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import Share from 'react-share';









function App() {
  return (
    <div className="box">

      <h3>Click On Icon To Perform The Task

<IoIosShareAlt /></h3>
      <MediaShare />

    </div>
  );
}

export default App;

