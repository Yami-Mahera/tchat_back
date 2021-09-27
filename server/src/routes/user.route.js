import { Router } from 'express';
import UserController from '../controller/user.controller';

const router = Router();
router.route('/list')
    .get(UserController.getUsers)
   
router.route('/')
    .get(UserController.getUser)

export default router;
