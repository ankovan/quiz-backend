import mongoose, { Schema } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import mongooseUniqueValidator from 'mongoose-unique-validator';

const AnswerSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
});
const QuestionSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  correctAnswer: {
    type: Number,
    required: false,
  },
  answers: [AnswerSchema]
});
const QuizSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    image: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    questions: [QuestionSchema]
  },
  {
    timestamps: true,
  }
);
QuizSchema.plugin(mongoosePaginate);
QuizSchema.plugin(mongooseUniqueValidator);

export default mongoose.model('Quiz', QuizSchema);
