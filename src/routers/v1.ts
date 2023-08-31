import { Router } from 'express';
import { authMiddleware } from '../middleware/auth';
import { createUserFactory } from '../features/CreateUser/CreateUserFactory';
import { selectUserFactory } from '../features/SelectUser/SelectUserFactory';
import { updateUserFactory } from '../features/UpdateUser/UpdateUserFactory';
import { createUrlFactory } from '../features/CreateUrl/CreateUrlFactory';

const router = Router();

router.get('/url/:code', () => {});
router.get('/user', selectUserFactory);
router.post('/user', createUserFactory);

router.use(authMiddleware);

router.put('/user', updateUserFactory);
router.delete('/user', () => {});

router.get('/user/code', () => {});
router.post('/user/code', () => {});

router.post('/url', createUrlFactory);
router.put('/url', () => {});
router.delete('/url', () => {});

router.post('/user/token/refresh', () => {});

export { router };
