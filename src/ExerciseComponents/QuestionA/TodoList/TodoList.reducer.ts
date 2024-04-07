import { Todo } from '../Todo.type';

type TodoListState = {
  todoList: Todo[];
};

type TodoListAction =
  | {
      type: 'initialize';
      payload: {
        defaultTodoList: Todo[];
      };
    }
  | {
      type: 'toggle';
      payload: {
        id: number;
      };
    };

export const initialState: TodoListState = {
  todoList: [],
};

export const reducer = (state: TodoListState, action: TodoListAction): TodoListState => {
  switch (action.type) {
    case 'initialize':
      return {
        todoList: action.payload.defaultTodoList,
      };
    case 'toggle':
      return {
        todoList: state.todoList.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};
