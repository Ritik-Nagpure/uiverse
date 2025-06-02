// import type { Messageformat } from '../DummyData/chathistory'
import { stringToTimeConverter, time_to_string_HHMM_format } from "../Helper/TimeCalcs";

interface MessageProps {
  sender: string;
  content: string;
  timestamp: string;
}

const Message: React.FC<MessageProps> = ({ content, timestamp, sender }) => {
  const userName = "Bob"
  const printableTime = time_to_string_HHMM_format(stringToTimeConverter(timestamp))
  if (sender == userName) {
    return (
      <div className="relative flex flex-row justify-end w-full my-2 px-3">
        <div className="absolute right-1 h-6 w-12 lg:max-w-xl sm:max-w-md max-w-xs rounded-br-full rounded-tl-full rounded-bl-xl pl-2 bg-yellow-100">
        </div>
        <div className="relative lg:max-w-xl sm:max-w-md max-w-xs  rounded-lg py-1 px-3  bg-yellow-100">
          <p className="text-md">
            {content}
          </p>
          <p className="text-xs text-end">
            {printableTime}
          </p>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="relative flex flex-row justify-start w-full my-2 px-3">
        <div className="absolute left-1 h-6 w-12 lg:max-w-xl sm:max-w-md max-w-xs rounded-bl-full rounded-tr-full rounded-br-xl pl-2 bg-green-400">
        </div>
        <div className="relative lg:max-w-xl sm:max-w-md max-w-xs rounded-lg px-3 bg-green-400 py-1">
          <p className="text-md px-2">
            {content}
          </p>
          <p className="text-xs text-end">
            {printableTime}
          </p>
        </div>
      </div>
    )
  }
};

export default Message;