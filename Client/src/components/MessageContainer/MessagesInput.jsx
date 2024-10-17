import { LuSend } from "react-icons/lu";

const MessagesInput = () => {
  return (
    <form className=" px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-x-gray-600 text-white"
          placeholder="Send a Message"
        />
        <button
          className="absolute inset-y-0 end-0 flex items-center pe-3"
          type="submit"
        >
          <LuSend />
        </button>
      </div>
    </form>
  );
};

export default MessagesInput;

// import { LuSend } from "react-icons/lu";

// const MessagesInput = () => {
//   return (
//     <form className=" px-4 my-3">
//       <div className="w-full">
//         <input
//           type="text"
//           className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-x-gray-600 text-white"
//           placeholder="Send a Message"
//         />
//         <button
//           className="absolute inset-y-0 end-0 flex items-center pe-3"
//           type="submit"
//         >
//           <LuSend />
//         </button>
//       </div>
//     </form>
//   );
// };

// export default MessagesInput;
