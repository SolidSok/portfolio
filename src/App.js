import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Work from './components/work/work';
import PortfolioNav from './nav-bar/nav-bar';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

// implement routing to only show one component at a time

function App() {
  return (
    <div className="app">
      <Tabs defaultActiveKey={'about'}>
        <Tab eventKey={'about'} title="about">
          <About />
        </Tab>
        <Tab eventKey={'work'} title="work">
          <Work />
        </Tab>
        <Tab eventKey={'contact'} title="contact">
          <Contact />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
