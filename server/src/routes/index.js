import { Router } from 'express';
import conversationRoutes from './conversation.route';
import authRoutes from './auth.route';
import userRoutes from './user.route';
import messageRoute from './message.route'

const router = Router();
router.get('/api-status', (req, res) => res.json({ status: "API is OK" }));
router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/messages", messageRoute);
router.use('/conversations', conversationRoutes);

export default router;
