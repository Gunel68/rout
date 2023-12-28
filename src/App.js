import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './Companents/About';
import Portfolio from './Companents/Portfolio';
import Contact from './Companents/Contact';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/about">Haqqında</Link></li>
            <li><Link to="/portfolio">İş Nümunələri</Link></li>
            <li><Link to="/contact">Əlaqə</Link></li>
          </ul>
        </nav>

        <hr />

        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
