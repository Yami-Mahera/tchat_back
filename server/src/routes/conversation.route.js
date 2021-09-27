import { Router } from "express";
import ConversatioController from "../controller/conversation.controller";

const router = Router();

router.route("/create")
  .post(ConversatioController.newConversation);
  
router.route("/list")
  .get(ConversatioController.getConvesationOfUser);

router.route("/close")
    .get(ConversatioController.closeConversation);

export default router;
