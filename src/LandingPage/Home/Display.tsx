import Projects from '../Projects/Projects';
import LinkMaster from '../Projects/LinkMaster';


const Display = () => {
  return (
    <div>
      <div >
        <div className='block sm:hidden'>
          <Projects />
        </div>

        <div className='hidden sm:block'>
          <LinkMaster />
        </div>
      </div>

    </div>
  )
}

export default Display