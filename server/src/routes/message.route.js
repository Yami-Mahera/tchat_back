import { Router } from 'express';
import MessageController from '../controller/message.controller';

const router = Router();

router.route('/create')
    .post(MessageController.addMessage)

router.route('/')
    .get(MessageController.getMessage)

export default router;