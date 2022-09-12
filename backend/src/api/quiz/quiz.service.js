import { Service } from '../../helpers/common';
import Quiz from './quiz.model';
import { logger } from '../../services';

class QuizService extends Service {
  constructor(model) {
    super(model);
  }
}

export default new QuizService(Quiz);
