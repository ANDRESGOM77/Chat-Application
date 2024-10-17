import Sidebar from "../Sidebar/Sidebar"
const HomePage = () => {
  return (
    <div  className="flex h-screen sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
      <Sidebar />
      {/* <MessageContainer/> */}
    </div>
  )
}

export default HomePage