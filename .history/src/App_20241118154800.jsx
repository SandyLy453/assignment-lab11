import { useState } from 'react'
import Countries from './components/Contries';
import Details from './components/Details';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        {/* Parent route */}
        <Route path="/" element={<Countries />}>
          {/* Nested route for /countries */}
          <Route path="/countries" element={<Countries />}>
            {/* Dynamic route for /countries/:cca2 */}
            <Route path=":cca2" element={<Details />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
