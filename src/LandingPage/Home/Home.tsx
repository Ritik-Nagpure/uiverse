import Projects from '../Projects/Projects'
import { useState } from 'react';
import Header from './Header';

const Home = () => {
    const [darkMode, setDarkMode] = useState(true);

    const toggleMode = () => {
        setDarkMode(prevMode => !prevMode);
    }

    return (
        <div className={(darkMode ? "dark-mode" : "light-mode") + " h-screen"}>
            <Header onToggle={toggleMode} darkMode={darkMode}/>
            <h1 className='text-6xl text-red-300 font-bold '>Hello World</h1>
            <div>
                <div>
                    {/*  <Projects />  */}
                </div>
                <div className='bg-blue-500 '>
                    Hello Wojdo bdjkn
                </div>
                <div className="text-3xl font-bold underline text-blue-500">
                    Hello Tailwind!
                </div>
                <div>
                    <Projects />
                </div>
            </div>
        </div>

    )
}
export default Home 
