import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Resume from './pages/Resume';
import CLMDashboard from './pages/CLMDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="work/clm-dashboard" element={<CLMDashboard />} />
          <Route path="about" element={<About />} />
          <Route path="resume" element={<Resume />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
