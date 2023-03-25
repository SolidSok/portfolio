import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import About from './components/about/about';
import Work from './components/work/work';
import PortfolioNav from './nav-bar/nav-bar';

import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
// implement routing to only show one component at a time

function App() {
  return (
    <BrowserRouter basename="portfolio" className="app">
      <Routes>
        {/* <PortfolioNav /> */}

        <Route path="/" element={<PortfolioNav />}>
          <Route index element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="*" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
