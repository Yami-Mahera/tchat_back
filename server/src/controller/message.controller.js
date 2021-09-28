import Message from "../models/message.model";

class MessageController {
  
  //add
  async addMessage(req, res) {
    const ownerId = req.headers["userid"];
    const newMessage = new Message({
      receiverId: req.body.receiverId,
      message: req.body.message,
      conversationId: req.body.conversationId,
      senderId: ownerId,
    });

    try {
      const savedMessage = await newMessage.save();
      res.status(200).json(savedMessage);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //get
  async getMessage(req, res) {
    try {
      const messages = await Message.find({
        conversationId: req.query.conversationId,
      });

      res.status(200).json(messages);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

export default new MessageController();
