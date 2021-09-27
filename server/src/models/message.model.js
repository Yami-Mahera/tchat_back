import { Schema as _Schema, model } from "mongoose";

const Schema = _Schema;

const MessageSchema = new Schema(
  {
    senderId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    receiverId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    message: {
      type: String,
    },
    conversationId: {
      type: Schema.Types.ObjectId,
      ref: "Conversation",
    },
    removed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Message = model("Message", MessageSchema);

export default Message;
