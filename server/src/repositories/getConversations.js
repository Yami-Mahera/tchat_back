import Conversation from "./../models/conversation.model";
export const getConversations = async (userId) => {
  const conversations = await Conversation.find({
    $or: [{ memberId: userId }, { ownerId: userId }],
    removed: {
      $ne: true,
    },
  })
    .populate("memberId")
    .populate("ownerId");

  return conversations;
};
