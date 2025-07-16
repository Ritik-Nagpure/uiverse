import Astrobit from './Astrobit/astrobit'
import Habla from './Habla/habla'
import Kiracar from './Kiracar/kiracar'
import Home from './LandingPage/Home/Home'
import F04 from './Errors/F04'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/uiverse/" element={<Home />} />
          <Route path="/uiverse/Habla" element={<Habla />} />
          <Route path="/uiverse/Astrobit" element={<Astrobit />} />
          <Route path="/uiverse/Kiracar" element={<Kiracar />} />

          <Route path="/uiverse/*" element={<F04 />} />
        </Routes>
      </BrowserRouter>
    </div>    

  )
}

export default App
