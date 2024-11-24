import { useState } from 'react'
import Countries from './components/Contries';
import Details from './components/Details';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Countries />}>
          <Route path="/countries" element={<Countries />}>
            <Route path=":cca2" element={<Details />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
