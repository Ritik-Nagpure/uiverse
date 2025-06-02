import Message from "../../Components/Message";
import type { Messageformat} from "../../DummyData/chathistory";
import  { chatData } from "../../DummyData/chathistory";

function Chat() {
  const sortedChatData = sortMessagesBasedOnTimestamp(chatData);
  const history = sortedChatData.map((val: Messageformat, index: number) => {
    {
      return (
        <div key={index} className="w-full">
          <Message content={val.content} timestamp={val.timestamp} sender={val.sender} />
        </div>
      )
    }
  }
  )

  return (
    <div className="">
      {history}
    </div>
  )
}

function sortMessagesBasedOnTimestamp(chatData: Messageformat[] ): Messageformat[] {
  return chatData
}

export default Chat;
