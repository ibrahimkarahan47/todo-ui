import TodoServiceCaller from "./todo";

const axios = require("axios");

const { REACT_APP_TODO_SERVICE_URL } = process.env;

jest.mock("axios");

describe("TodoServiceCaller", () => {
  const serviceCaller = new TodoServiceCaller();

  test("getTodos", async () => {
    axios.get
      .mockImplementationOnce(() => Promise.resolve({}))
      .mockImplementationOnce(() => Promise.reject({}));

    const result = await serviceCaller.getTodos();

    expect(axios.get).toBeCalledTimes(1);
    expect(axios.get).toBeCalledWith(`${REACT_APP_TODO_SERVICE_URL}/todo`);
    expect(result).toEqual({});
  });

  test("addTodo", async () => {
    axios.post
      .mockImplementationOnce(() => Promise.resolve({}))
      .mockImplementationOnce(() => Promise.reject({}));

    const result = await serviceCaller.addTodo({
      todo: {
        id: 1,
        task: "write test",
        done: false,
      },
    });

    expect(axios.post).toBeCalledTimes(1);
    expect(axios.post).toBeCalledWith(`${REACT_APP_TODO_SERVICE_URL}/todo`, {
      id: 1,
      task: "write test",
      done: false,
    });
    expect(result).toEqual({});
  });

  test("updateTodo", async () => {
    axios.put
      .mockImplementationOnce(() => Promise.resolve({}))
      .mockImplementationOnce(() => Promise.reject({}));

    const result = await serviceCaller.updateTodo({ id: 1 });

    expect(axios.put).toBeCalledTimes(1);
    expect(axios.put).toBeCalledWith(`${REACT_APP_TODO_SERVICE_URL}/todo/1`);
    expect(result).toEqual({});
  });

  test("removeTodo", async () => {
    axios.delete
      .mockImplementationOnce(() => Promise.resolve({}))
      .mockImplementationOnce(() => Promise.reject({}));

    const result = await serviceCaller.removeTodo({ id: 1 });

    expect(axios.delete).toBeCalledTimes(1);
    expect(axios.delete).toBeCalledWith(`${REACT_APP_TODO_SERVICE_URL}/todo/1`);
    expect(result).toEqual({});
  });
});
