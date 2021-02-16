const axios = require("axios");

const { REACT_APP_TODO_SERVICE_URL } = process.env;

class TodoServiceCaller {
  getTodos() {
    return axios.get(`${REACT_APP_TODO_SERVICE_URL}/todo`);
  }

  addTodo({ todo }) {
    return axios.post(`${REACT_APP_TODO_SERVICE_URL}/todo`, {
      ...todo,
    });
  }

  updateTodo({ id }) {
    return axios.put(`${REACT_APP_TODO_SERVICE_URL}/todo/${id}`);
  }

  removeTodo({ id }) {
    return axios.delete(`${REACT_APP_TODO_SERVICE_URL}/todo/${id}`);
  }
}

export default TodoServiceCaller;
