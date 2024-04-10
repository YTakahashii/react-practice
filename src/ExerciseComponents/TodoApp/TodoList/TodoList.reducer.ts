import { createTodoFixture } from '../Todo.fixture';
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
    }
  | {
      type: 'create';
      payload: {
        title: string;
      };
    }
  | {
      type: 'delete';
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
    case 'create':
      return {
        todoList: [...state.todoList, createTodoFixture({ title: action.payload.title })],
      };
    case 'delete':
      return {
        todoList: state.todoList.filter((todo) => todo.id !== action.payload.id),
      };
    default:
      return state;
  }
};
