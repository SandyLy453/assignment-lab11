import { useState } from 'react'
import Countries from './components/Contries';
import Details from './components/Details';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Countries />}>
          <Route path="countries/:cca2" element={<Details />} />
        </Route>
        <Route path="/countries" element={<Countries />} />
      </Routes>
    </Router>
  );
}

export default App
