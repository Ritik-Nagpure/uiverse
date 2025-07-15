import type {userObject} from '../DummyData/chatusers'
import emptyDP from '../../assets/h-Icons/emptyDP.svg'

const Chatbox: React.FC<userObject> = ({name, message, image}) => 
  {
  return (
    <div className="flex flex-row bg-gray-100 rounded-md m-2 p-2 border-2 border-gray-300 gap-2 overflow-hidden">
      <img src={emptyDP } alt={image} className="m-auto h-12 w-12 rounded-full"/>
      <div className="flex flex-col gap-1 w-5/6 px-2">
          <p> {name} </p>
          <p> {message} </p>
      </div>
    </div>
  )
}

export default Chatbox