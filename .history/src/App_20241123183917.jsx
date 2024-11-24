import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Countries from './Contries';
import Details from './Details';

export default function App() {
  return (
    <div className="container">
      <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <div>
              <h1>Welcome!/h1>
              <Countries />
            </div>
          } 
        />
        <Route path="/countries" element={<Countries />} />
        <Route path="countries/:cca2" element={<Details />} />
      </Routes>
    </Router>
  </div>
  );
}



