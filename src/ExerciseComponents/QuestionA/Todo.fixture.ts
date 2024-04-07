import { Todo } from './Todo.type';

let id = 0;

export const createTodoFixture = (defaultValue: Partial<Todo>): Todo => {
  id = id + 1;

  return {
    id,
    title: `タスク${id.toString()}`,
    completed: false,
    ...defaultValue,
  };
};

export const defaultTodoList: Todo[] = [
  createTodoFixture({ title: 'Learn TypeScript', completed: true }),
  createTodoFixture({ title: 'Learn React' }),
  createTodoFixture({ title: 'Learn GraphQL' }),
];
