import ChatDisplay from "../Sections/Chat/ChatDisplay";
import ChatMenu from "../Sections/ChatMenu/ChatMenu";
import { useState } from "react";

function App() {
  const [isChatSelected] = useState(false);

  // const [selectedChat, setSelectedChat] = useState(null);

  // const handleChatClick = (Chat) => {
  //   setSelectedChat(Chat);
  //   setIsChatSelected(true);
  // };

  // const handleBackClick = () => {
  //   setSelectedChat(null);
  //   setIsChatSelected(false);
  // };

  return (
    // <div className="grid sm:grid-cols-3 gap-1 h-full">
    //   <div className="sm:col-span-1 overflow-auto bg-gray-300 rounded-md  sm:visible">
    //     <ChatMenu />
    //   </div>
    //   <div className="sm:col-span-2 overflow-auto bg-gray-300 rounded-md  sm:block">
    //     <ChatDisplay />
    //   </div>
    // </div>

    <div className="grid sm:grid-cols-3 gap-1 h-full">
          <div className={`${ isChatSelected ? `hidden` : `block`} sm:col-span-1 overflow-auto bg-gray-300 rounded-md  sm:visible`}>
          <ChatMenu />
      </div>
     
        <div className={`${ isChatSelected ? `block` : `hidden`} sm:col-span-2 overflow-auto bg-gray-300 rounded-md  sm:block`}>
          <ChatDisplay />
      </div>
    </div>
  );
}

export default App;
