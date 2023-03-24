import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Work from './components/work/work';
import PortfolioNav from './nav-bar/nav-bar';

import { Container, Row } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
// implement routing to only show one component at a time

function App() {
  return (
    <Container className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PortfolioNav />}></Route>
          <Route index element={<About />} />
          <Route path="work" element={<Work />} />
        </Routes>

        <Contact />
      </BrowserRouter>
    </Container>
  );
}

export default App;
