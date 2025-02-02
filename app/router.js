/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/v1/login', controller.todo.login);
  router.get('/v1/queryUserList', controller.todo.create);
};
