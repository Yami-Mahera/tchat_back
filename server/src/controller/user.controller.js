import User from "../models/user.model";
import { getConversations } from "../repositories";

class UserController {
  //get all users
  async getUsers(req, res) {
    const ownerId = req.headers["userid"];
    try {
      const conversations = await getConversations(ownerId);
      const users = await User.find({
        _id: {
          $ne: ownerId,
        },
      });

      res.send(users);
    } catch (error) {
      throw new Error(`Error in getConversations: ${error.message}`);
    }
  }

  // add user
  async addUser(req, res) {
    try {
      const user = req.body;
      const newUser = user && (await User.create(user));
      newUser && res.json(newUser);
    } catch (error) {
      throw new Error(`Error in addConversation: ${error.message}`);
    }
  }

  //get a user
  async getUser(req, res) {
    const ownerId = req.headers["userid"];
    try {
      const user = await User.findOne({ _id: ownerId });

      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

export default new UserController();
