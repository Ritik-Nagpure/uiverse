import { useState } from "react";
import { projectDetails } from "./ProjectDetails";
import './LinkMaster.css';

const LinkMaster = () => {
    const [displayApp, setDisplayApp] = useState(0);

    const changeDisplay = (index: number) => {
        setDisplayApp(index);
    }

    const createDisplayProject = (index: number) => {
        return (
            <div
                className="relative w-full h-full shrink-0 rounded-lg overflow-hidden mx-4 group"
                style={{
                    backgroundImage: `url(${projectDetails[index].img})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top',
                }}>
                <div className="absolute bottom-0 w-full sm:h-1/2 bg-black/30 text-white p-4 flex flex-col justify-end ">
                    <a href={projectDetails[index].link}>
                        <span className="text-6xl font-semibold">{projectDetails[index].title}</span>
                    </a>
                    <br />
                    <br />
                    <p className="text-lg overflow-hidden">{projectDetails[index].desc}</p>
                </div>
            </div>

        );
    }

    return (
        <div className="flex flex-row justifty-between items-center sm:p-5 sm:m-5 sm:h-150">
            <div className="w-1/6 h-full flex flex-col end justify-between items-center gap-4">
                <button className={"cursor-pointer app-link-button" + displayApp === 0 && ""}  onClick={() => changeDisplay(0)}><span>Kiracar</span></button>
                <button className="cursor-pointer app-link-button" onClick={() => changeDisplay(1)}>Astrobit</button>
                <button className="cursor-pointer app-link-button" onClick={() => changeDisplay(2)}>Habla</button>
                <button className="cursor-pointer app-link-button" onClick={() => changeDisplay(3)}>CodeGears</button>
            </div>
            <div className="w-5/6 h-full">
                {createDisplayProject(displayApp)}
            </div>
        </div>
    )
}

export default LinkMaster