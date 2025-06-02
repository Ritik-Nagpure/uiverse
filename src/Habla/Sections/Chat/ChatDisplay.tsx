import Chat from './Chat'
import ChatFoot from './ChatFoot'
import ChatHead from './ChatHead'


function ChatDisplay() {
  return (
    <div className="flex flex-col h-full">
      <div className="p-1 rounded-md mx-2 my-1">
        <ChatHead />
      </div>
      <div className="flex-grow overflow-auto rounded-md mx-2">
        <Chat />
      </div>
      <div className="p-1 my-1 rounded-md mx-2">
        <ChatFoot />
      </div>
    </div>
  )
}

export default ChatDisplay