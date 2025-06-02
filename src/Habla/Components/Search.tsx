import search from "/Icons/search.svg";

function Search(){
  return (
    <div className="flex flex-row gap-2 m-auto">
      <input type="text" placeholder="Search" className="rounded-full border border-2 border-gray-300 text-center w-24 sm:w-96"/>
      <img src={search} className="h-8 w-8"/>
    </div>
  );
};

export default Search;
