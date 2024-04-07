import { useCallback, useEffect, useReducer } from 'react';
import { reducer, initialState } from './TodoList.reducer';
import { Todo } from '../Todo.type';

type UseTodoListProps = {
  defaultTodoList: Todo[];
};

export function useTodoList({ defaultTodoList }: UseTodoListProps) {
  const [{ todoList }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: 'initialize',
      payload: {
        defaultTodoList,
      },
    });
  }, [defaultTodoList]);

  const toggleTodo = useCallback(({ id }: { id: number }) => {
    dispatch({
      type: 'toggle',
      payload: {
        id,
      },
    });
  }, []);

  const createTodo = useCallback(({ title }: { title: string }) => {
    dispatch({
      type: 'create',
      payload: {
        title,
      },
    });
  }, []);

  return {
    todoList,
    toggleTodo,
    createTodo,
  };
}

export type UseTodoListReturn = ReturnType<typeof useTodoList>;
