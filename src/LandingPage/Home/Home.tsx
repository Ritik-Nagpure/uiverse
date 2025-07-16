import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Display from './Display';
import LinkMaster from '../Projects/LinkMaster';


const Home = () => {
    const [darkMode, setDarkMode] = useState(true);

    const toggleMode = () => {
        setDarkMode(prevMode => !prevMode);
    }

    return (
        <div className={(darkMode ? "dark-mode" : "light-mode") + " flex flex-col justify-between items-center"}>

            <div className='w-full '>
                <Header onToggle={toggleMode} darkMode={darkMode} />
            </div>

            <div className='w-full'>
                <LinkMaster />
            </div>

            <div className='w-full'>
                <Display />
            </div>



            <div className=''>
                <Footer />
            </div>

        </div>

    )
}
export default Home 
