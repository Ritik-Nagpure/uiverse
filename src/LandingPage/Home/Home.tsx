import Projects from '../Projects/Projects'

const Home = () => {
    return (
        <div className="bg-red-300 h-100% w-100%">
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
