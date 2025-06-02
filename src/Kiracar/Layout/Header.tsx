
function Header() {
    return (
        <div className="container-fluid mx-auto rounded-md sm:h-fit w-full">
            <div className="flex flex-row justify-between mx-1">
                <div className="flex flex-row justify-start p-1">
                    {/* <img src={favicon} className='rounded-full h-12 w-12' /> */}
                    <p className="text-3xl ml-2 font-bold m-auto font-cursive text-cyan-500 ">                        
                        Kiracar
                    </p>
                </div>
                <div className="sm:w-2/5 w-fit px-3 bg-gray-200 border-2 border-gray-400 rounded-full my-1">
                    <p className="py-2 text-center text-xl ">
                        Search
                    </p>
                </div>
                <div className="flex flex-row justify-end w-24">
                    <p className="text-lg">
                    {/* <img src={profile} className='rounded-full h-12 w-12' /> */}
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Header