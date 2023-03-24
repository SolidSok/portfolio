import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Work from './components/work/work';
import PortfolioNav from './nav-bar/nav-bar';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Container } from 'react-bootstrap';
// implement routing to only show one component at a time

function App() {
  return (
    <div>
      <PortfolioNav />

      <Container className="app">
        <Tabs defaultActiveKey={'about'}>
          <Tab eventKey={'about'} title="About">
            <About />
          </Tab>
          <Tab eventKey={'work'} title="My Work">
            <Work />
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default App;
