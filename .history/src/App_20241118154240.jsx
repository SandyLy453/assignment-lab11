import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Countries from "./components/Countries";
import Details from "./components/Details";

function App() {
  return (
    <BrowserRouter basename="assignment-lab11">
      <Routes>
        <Route path="/" element={<Countries />}>
          <Route path="/countries" element={<Countries />}>
            <Route path=":cca2" element={<Details />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

