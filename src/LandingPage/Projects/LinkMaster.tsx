import { useState } from "react";
import { projectDetails } from "./ProjectDetails";

const LinkMaster = () => {
    const [ diplayApp, setDisplayApp ] = useState(0);

    const changeDisplay = (index: number) => {
        setDisplayApp(index);
    }

    const createDisplayProject = (index : number) => {
        return (
            <div key={index} className="project-display">
                <h2>{projectDetails[index].title}</h2>
                <p>{projectDetails[index].desc}</p>
                <a href={projectDetails[index].link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
        );
    }

    return (
        <div className="flex flex-row justifty-between items-center sm:p-5 sm:m-5 bg-red-500 sm:h-150">
            <div className="w-1/6 h-full flex flex-col end justify-between items-center gap-4 bg-green-300">
                <div>Astrobit</div>
                <div>Hable</div>
                <div>Kiracar</div>
                <div>CodeGears</div>
            </div>
            <div className="w-5/6 h-full bg-blue-300">
                Project Data here
            </div>
        </div>
    )
}

export default LinkMaster