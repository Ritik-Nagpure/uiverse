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
                <button className={"cursor-pointer app-link-button "} onClick={() => changeDisplay(0)}>
                    <div className="flex flex-row h-full w-full items-center justify-start gap-2">
                        {displayApp == 0 ? <p className="w-1/12 h-full selectedlinkapp"> &nbsp;</p> : ""}
                        <span className="w-11/12 ">Kiracar</span>
                    </div>
                </button>
                <button className={"cursor-pointer app-link-button "} onClick={() => changeDisplay(1)}>
                    <div className="flex flex-row h-full w-full items-center justify-start gap-2">
                        {displayApp == 1 ? <p className="w-1/12 h-full selectedlinkapp"> &nbsp;</p> : ""}
                        <span className="w-11/12 ">Astrobit</span>
                    </div>
                </button>
                <button className={"cursor-pointer app-link-button "} onClick={() => changeDisplay(2)}>
                    <div className="flex flex-row h-full w-full items-center justify-start gap-2">
                        {displayApp == 2 ? <p className="w-1/12 h-full selectedlinkapp"> &nbsp;</p> : ""}
                        <span className="w-11/12 ">CodeGears</span>
                    </div>
                </button>
                <button className={"cursor-pointer app-link-button "} onClick={() => changeDisplay(3)}>
                    <div className="flex flex-row h-full w-full items-center justify-start gap-2">
                        {displayApp == 3 ? <p className="w-1/12 h-full selectedlinkapp"> &nbsp;</p> : ""}
                        <span className="w-11/12 ">Habla</span>
                    </div>
                </button>
            </div>
            <div className="w-5/6 h-full">
                {createDisplayProject(displayApp)}
            </div>
        </div>
    )
}

export default LinkMaster