import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './components/home';
import Calculator from './components/calculator';
import NavBar from './components/navBar';
import Quote from './components/quote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Router>
          <NavBar />
          <section className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Calculator" element={<Calculator className="Calculator" />} />
              <Route path="/Quote" element={<Quote />} />
            </Routes>
          </section>
        </Router>
      </>
    );
  }
}

export default App;
