import { Controller } from '../../helpers/common';
import quizService from './quiz.service';
import { handleResponse } from '../../helpers';
import { quizSchema } from "./quiz.validation"

class QuizController extends Controller {
  constructor(service, name) {
    super(service, name);

    this.create = this.create.bind(this)
    this.findMyQuizes = this.findMyQuizes.bind(this)
  }

  async create(req, res, next) {
    const user = req.user;
    const body = req.body;
    body.user = user._id
    try {
      this.service.create(body)
      return handleResponse.success(res, {ok: true})
    } catch (e) {
      next(e)
    }
  }

  async findMyQuizes(req, res, next) {
    const user = req.user;
    try {
      const query = this.get_queryset(req) || {};
      if(!query?.filter) {
        query.filter = {}
      }
      query.filter.user = user._id
      const data = await this.service.findAll(query)
      return handleResponse.success(res, data)
    } catch (e) {
      next(e)
    }
  }
}

export default new QuizController(quizService, 'Quiz');
