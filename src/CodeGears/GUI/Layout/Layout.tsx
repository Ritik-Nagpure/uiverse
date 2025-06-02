
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Header from '../Header/Header.tsx'
import Footer from '../Footer/Footer.tsx'

import Kanban from '../Kanban/Kanban.tsx'
import Todo from '../Todo/Todo.tsx'
import Home from '../Home/Home.tsx'
import Profile from '../Profile/Profile.tsx'
import About from '../About/About.tsx'
import NotFound from '../Error/404/404.tsx'


function Layout() {
    return (
        <div>

            <BrowserRouter>
                <Header />
                <Routes>
                    
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/profile" element={<Profile />} /> 
                    <Route path="*" element={<NotFound />} />
                   

                    <Route path="/kanban" element={<Kanban />} />
                    <Route path="/todo" element={<Todo />} />

                </Routes>
            </BrowserRouter >

            <Footer />

        </div >
    )
}

export default Layout