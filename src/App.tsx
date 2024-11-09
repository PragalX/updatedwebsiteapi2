import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IntroAnimation from './components/IntroAnimation';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import API from './pages/API';
import ApiExamples from './components/ApiExamples';

function App() {
  return (
    <Router>
      <IntroAnimation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/api" element={<API />} />
        <Route path="/api/examples" element={<ApiExamples />} />
      </Routes>
    </Router>
  );
}

export default App;