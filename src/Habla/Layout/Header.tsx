import favicon from "/h-App/favicon.svg";
import profile from "/h-App/profile.svg";
import settings from "/h-Icons/settings.svg"
import Search from "../Components/Search";

function Header() {
  return (
    <div className="flex flex-row rounded-md mx-2 justify-between px-2">
      <div className="flex flex-row justify-start p-1">
        <img
          src={favicon}
          className="rounded-full sm:h-12 sm:w-12 h-10 w-10 m-auto"
        />

        <p className="text-xl sm:text-3xl ml-2 font-bold m-auto font-cursive text-cyan-500 ">
          Habla
        </p>
      </div>

      <div className="bg-gray-100 rounded-full h-fit m-auto p-1">
        <Search />
      </div>

      <div className="flex flex-row justify-end gap-2">
        <img
          src={settings}
          className="rounded-full sm:h-10 sm:w-10 h-8 w-6 m-auto"
        />
        <img
          src={profile}
          className="rounded-full sm:h-12 sm:w-12 h-10 w-10 m-auto"
        />
      </div>
    </div>
  );
}

export default Header;
