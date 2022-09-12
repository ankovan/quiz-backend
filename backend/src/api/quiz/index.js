import express from 'express';
import fileUpload from 'express-fileupload';
import { celebrate } from 'celebrate';
import AuthService from '../../middlewares/auth';
import quizController from './quiz.controller';
import { schemas } from '../../helpers';
import {
  createQuizSchema
} from './quiz.validation';

const { objectIdSchema, paginateValidationSchema } = schemas;

const router = express.Router();

router.get(
  '/',
  celebrate({ query: paginateValidationSchema }),
  quizController.findAll
);
router.get(
  '/myquizes',
  AuthService.required,
  celebrate({ query: paginateValidationSchema }),
  quizController.findMyQuizes
);

router.get(
  '/:id',
  celebrate({ params: objectIdSchema }),
  quizController.findOne
);

router.post(
  '/',
  AuthService.required,
  celebrate({ body: createQuizSchema }, {
    allowUnknown: true
  }),
  quizController.create
);

router.delete(
  '/:id',
  AuthService.required,
  celebrate({ params: objectIdSchema }),
  quizController.remove
);

router.put(
  '/:id',
  AuthService.required,
  celebrate({ params: objectIdSchema }),
  quizController.update
);

export default router;
