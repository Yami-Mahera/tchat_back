import Conversation from "./../models/conversation.model";
import User from "./../models/user.model";
import { getConversations } from "../repositories";

class ConversationController {
  // new conversation
  async newConversation(req, res) {
    const ownerId = req.headers["userid"];
    const memberId = req.body.memberId;

    const firstConv = await Conversation.findOne({
      memberId: memberId,
      ownerId: ownerId,
      removed: {
        $ne: true,
      },
    });

    const secondConv = await Conversation.findOne({
      memberId: ownerId,
      ownerId: memberId,
      removed: {
        $ne: true,
      },
    });

    if (firstConv || secondConv)
      res.status(400).json("User already into conversation");

    const newConversation = new Conversation({
      memberId,
      ownerId,
    });

    try {
      const savedConversation = await newConversation.save();
      const userMember = await User.findOne({ _id: memberId });
      const userOwner = await User.findOne({ _id: ownerId });

      res.status(200).json({
        ...savedConversation._doc,
        memberId: userMember,
        ownerId: userOwner,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  //get conv of a user
  async getConvesationOfUser(req, res) {
    try {
      const userId = req.headers["userid"];
      const conversations = await getConversations(userId);
      res.status(200).json(conversations);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async closeConversation(req, res) {
    try {
      const conversationId = req.query.conversationId;

      const c = await Conversation.findOne({ _id: conversationId });

      c.removed = true;
      await c.save();
      res.status(200).json(c);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default new ConversationController();
