import { Router } from 'express';
import auth from './auth';
import users from './users';
import quiz from './quiz';
import uploads from './uploads';
import configs from './configs';

const router = new Router();

router.use('/auth', auth);
router.use('/users', users);
router.use('/quiz', quiz);
router.use('/uploads', uploads);
router.use('/configs', configs);

export default router;
