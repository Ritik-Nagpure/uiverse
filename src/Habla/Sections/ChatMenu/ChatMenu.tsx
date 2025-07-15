import Chatbox from "../../Components/Chatbox.tsx";
import { users } from "../../DummyData/chatusers.tsx";

function ChatMenu() {
  const chatArray = users.map((user: any) => (
    <div key={user.id} >
      <Chatbox name={user.name} image ={user.image} message={user.message}/>
    </div>
  ));

  return (
    <div className="p-2 max-h-full overflow-y-auto">
      {chatArray}
    </div>
  );
}

export default ChatMenu;
