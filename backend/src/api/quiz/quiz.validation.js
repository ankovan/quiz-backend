import Joi from '@hapi/joi';
import { schemas } from '../../helpers';

const { paginateValidationSchema, ObjectId } = schemas;

// export const paginateUserValidateSchema = paginateValidationSchema.keys({
//   email: Joi.string().optional()
// }); // add more key

const answerSchema = Joi.object({
  text: Joi.string().required(),
})

const questionSchema = Joi.object({
  question: Joi.string().required(),
  image: Joi.string().optional(),
  correctAnswer: Joi.number().required(),
  answers: Joi.array().min(1).items(answerSchema)
})

export const createQuizSchema = Joi.object({
  image: Joi.string().optional(),
  name: Joi.string().required(),
  description: Joi.string().optional(),
  questions: Joi.array().min(1).items(questionSchema)
});

export const quizSchema = Joi.object({
  _id: ObjectId,
  image: Joi.string().optional(),
  name: Joi.string().optional(),
  description: Joi.string().optional(),
  questions: Joi.array().items(questionSchema)
}).rename("id", "_id");
