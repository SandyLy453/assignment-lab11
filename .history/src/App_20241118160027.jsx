import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Countries from './Contries';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Countries />} />
      </Routes>
    </Router>
  );
}



