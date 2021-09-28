import { Schema as _Schema, model ,type } from "mongoose";

const Schema = _Schema;

const conversationModel = new Schema(
  {
    ownerId:{
      type: Schema.Types.ObjectId,
      ref:'User'
    },
    memberId: {
      type: Schema.Types.ObjectId,
      ref:'User'
    },
    removed: {
      type:Boolean,
      default:false
    },
  },
  { timestamps: true }
);

const Conversation = model("Conversation", conversationModel);

export default Conversation;
