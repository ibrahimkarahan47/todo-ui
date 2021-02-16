class TodoLogic {
  static updateTodo({ id, todo, todos = [] }) {
    todos = todos.filter((todo) => todo.id !== id);
    return [...todos, todo];
  }

  static removeTodo({ id, todos = [] }) {
    return todos.filter((todo) => todo.id !== id);
  }
}

export default TodoLogic;
