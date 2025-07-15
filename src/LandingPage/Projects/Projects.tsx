import { projectDetails } from "./ProjectDetails";
import Card from "./card";

const Projects = () => {
  const projectDisplay = projectDetails.map((val, index: number) => {
    return (
      <Card
        key={index}
        title={val.title}
        description={val.desc}
        imageUrl={val.img}
        showDescription={window.innerWidth >= 500} 
        siteurl={val.link}
      />

    )
  })

  return (
    <div className="flex flex-wrap sm:overflow-auto-y">
      <div className="overflow-x-auto md:flex md:justify-start md:space-x-4 scrollbar-hide">
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0">
          {projectDisplay}
        </div>
      </div>
    </div>
  )
}

export default Projects


