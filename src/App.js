import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home.js';
import Chat from './components/Chat.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <ul className="App-header">
             <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/file">Upload File</Link>
            </li> 
          </ul>*/}
          <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/chat' element={< Chat />}></Route>

            {/* <Route exact path='/file' element={< UploadFile />}></Route> */}
          </Routes>
        </div>
      </Router >
    );
  }
}

export default App;
