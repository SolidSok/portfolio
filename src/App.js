import logo from './logo.svg';
import './App.css';
import { Row } from 'react-bootstrap';

import About from './components/about/about';
import Contact from './components/contact/contact';
import Main from './components/main/main';
import Work from './components/work/work';
import PortfolioNav from './nav-bar/nav-bar';

function App() {
  return (
    <div className="App">
      <Row>
        {' '}
        <PortfolioNav />
        <Main />
        <About />
        <Contact />
        <Work />
      </Row>
    </div>
  );
}

export default App;
