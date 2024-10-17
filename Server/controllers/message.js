import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversations = await Conversation.findOne({});
    participants: {
      $all: [senderId, receiverId];
    }

    if (!conversations) {
      conversations = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversations.messages.push(newMessage._id);
    }

    await Promise.all([conversations.save(), message.save()]);
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessage = async (req,res) => {
    try {
        const {id:userToChadId} = req.params
        const senderId = req.user._id

        const conversation = await Conversation.findOne({
            participants:{$all:[senderId,userToChadId]}
        }).populate("messages")
        if(!conversation){
            res.status(200).json([])
        }
        const messages= conversation.messages
        res.status(200).json(messages)
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}