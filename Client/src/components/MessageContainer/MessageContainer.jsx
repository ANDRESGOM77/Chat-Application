import Messages from "./Messages";
import MessagesInput from "./MessagesInput";
import { TiMessage } from "react-icons/ti";

const MessageContainer = () => {
  const noChatSelected = true;
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {/* HEADER */}
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To:</span>{" "}
            <span className="text-gray-900 font-bold">Manon</span>
          </div>
          <Messages />
          <MessagesInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className=" flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p className="">Welcome❤️ Manon 😁 </p>
        <p> Select a Chat to start messaging</p>
        <TiMessage className=" text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

// import Messages from "./Messages"
// import MessagesInput from "./MessagesInput"

// const MessageContainer = () => {
//   return (
//     <div className="md:min-w-[450px] flex flex-col">
//         {/* HEADER */}
//         <div className="bg-slate-500 px-4 py-2 mb-2">
//             <span className="label-text">To:</span> <span className="text-gray-900 font-bold">Manon</span>
//         </div>

//         <Messages/>
//         <MessagesInput />
//     </div>
//   )
// }

// export default MessageContainer
