import Conversations from "../sideBar/Conversations";
import SearchInput from "../sideBar/SearchInput";
import LogoutButton from "../sideBar/LogoutButton";

const Sidebar = () => {
  return (
    <div className=" border-r border-slate-500 p-4 flex flex-col">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
