import { useEffect } from "react";

import useConversation from "../store/useConversation";
import { useSocketContext } from "../context/SocketContext";

import notificationSound from "../assets/sounds/notification.mp3";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessages) => {
      newMessages.shouldShake = true;
      const sound = new Audio(notificationSound)
      sound.play()
      setMessages([...messages, newMessages]);
    });
    return () => socket?.off("newMessages");
  }, [socket, setMessages, messages]);
};

export default useListenMessages;
