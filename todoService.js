const todos = [];

function createTodo(call, callback) {
  const request = call.request;
  const item = { id: todos.length + 1, text: request.text };
  todos.push(item);
  callback(null, item);
}
function readTodos(call, callback) {
  callback(null, { items: todos });
}

module.exports = {
  createTodo,
  readTodos,
};
