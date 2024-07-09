const { Controller } = require('egg');

// app/controller/todo.js
class TodoController extends Controller {
  async create() {
    const { ctx, service } = this;

    // params validate, need `egg-validate` plugin
    // ctx.validate({ title: { type: 'string' } });

    ctx.status = 201;
    ctx.body = await service.todo.create(ctx.request.body);
  }
}

module.exports = TodoController;
