import './App.css'
import Astrobit from './Astrobit/astrobit'
import Codegears from './CodeGears/codegears'
import Habla from './Habla/habla'
import Kiracar from './Kiracar/kiracar'
import Home from './LandingPage/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <div className='bg-purple-400 h-screen w-100%'>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/uiverse/" element={<Home />} />
          <Route path="/uiverse/Habla" element={<Habla />} />
          <Route path="/uiverse/Astrobit" element={<Astrobit />} />
          <Route path="/uiverse/Codegears" element={<Codegears />} />
          <Route path="/uiverse/Kiracar" element={<Kiracar />} />
        </Routes>
      </BrowserRouter> */}
    </div>

  )
}

export default App
