import User from "../models/user.model";
import bcrypt from "bcrypt";

class AuthController {
  async signIn(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });
      !user && res.status(404).json("user not found");
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

export default new AuthController();
