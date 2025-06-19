import profile from "/h-App/profile.svg";
import back from "/h-Icons/arrow-back.svg";

function ChatHead() {
  return (
    <div className="flex flex-row rounded-md justify-between px-2">
      
      <div className="flex flex-row justify-start p-1 gap-2">
        <img src={back} className="rounded-full h-8 w-8 m-auto in visible sm:hidden" />
        <img src={profile} className="rounded-full sm:h-12 sm:w-12 h-10 w-10 m-auto" />
        <div className="flex flex-col w-5/6 px-2">
            <p className="text-lg"> Name </p>
            <p className="text-xs sm:text-sm"> Status</p>
        </div>
      </div>
      
      <div className="flex flex-row justify-end gap-2">
          <p className="my-auto">
            Settings
          </p>
      </div>
    </div>

  )
}

export default ChatHead