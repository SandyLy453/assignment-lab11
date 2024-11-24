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
            <div className="contentBox">
              <h1>Welcome!</h1>
              <Countries />
            </div>
          } 
        />
        <Route 
          path="/countries" 
          element={
            <div className="contentBox">
              <h1>Let choose a kingdom.</h1>
              <Countries />
            </div>
          } 
        />
        <Route path="countries/:cca2" element={<Details />} />
      </Routes>
    </Router>
  </div>
  );
}



