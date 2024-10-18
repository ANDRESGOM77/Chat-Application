import Sidebar from "../../components/sideBar/Sidebar.jsx"
import MessageContainer from "../../components/messageContainer/messageContainer.jsx"

const HomePage = () => {
  return (
    <div  className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
      <Sidebar />
      <MessageContainer/>
    </div>
  )
}

export default HomePage