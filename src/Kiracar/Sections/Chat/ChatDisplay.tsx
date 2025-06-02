import Chat from './Chat'
import ChatFoot from './ChatFoot'
import ChatHead from './ChatHead'

function ChatDisplay() {
  return (
    <div className="flex flex-col h-full mr-3 mb-3">
      <div className="p-2 ">
        <ChatHead />
      </div>
      <div className="flex-grow p-1">
        <Chat />
      </div>
      <div className="p-1">
        <ChatFoot />
      </div>
    </div>
  )
}

export default ChatDisplay