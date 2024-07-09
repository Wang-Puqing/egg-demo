// app/service/todo.js
const { Service } = require('egg');

class TodoService extends Service {
  /**
   * create todo
   * @param {Todo} todo - todo info without `id`, but `title` required
   */
  async create(todo) {
    console.log(todo, 'xxxx');
    // validate
    if (!todo.title) this.ctx.throw(422, 'task title required');

    // normalize
    todo.id = Date.now().toString();
    todo.completed = false;

    this.store.push(todo);
    return todo;
  }
}

module.exports = TodoService;
