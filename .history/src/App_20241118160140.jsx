import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Countries from './Contries';

export default function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<h1>Landing Page</h1>} />
      <Route path="/countries" element={<Countries />} />
    </Routes>
  </Router>
  );
}



