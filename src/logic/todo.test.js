import TodoLogic from "./todo";

describe("TodoLogic", () => {
  it("updates todo list by id", () => {
    const todos = [
      {
        id: 1,
        task: "write test",
        done: false,
      },
      {
        id: 2,
        task: "run test",
        done: false,
      },
    ];

    const todo = {
      id: 2,
      task: "run test",
      done: true,
    };

    const expected = [todos[0], todo];

    const result = TodoLogic.updateTodo({ id: 2, todo, todos });
    expect(result).toEqual(expected);
    expect(result.length).toEqual(2);
    expect(result[1].done).toBeTruthy();
  });

  it("deletes todo from list by id", () => {
    const todos = [
      {
        id: 1,
        task: "write test",
        done: false,
      },
      {
        id: 2,
        task: "run test",
        done: false,
      },
      {
        id: 3,
        task: "write code",
        done: true,
      },
    ];

    const expected = [todos[0], todos[2]];

    const result = TodoLogic.removeTodo({ id: 2, todos });
    expect(result).toEqual(expected);
    expect(result.length).toEqual(2);
  });
});
