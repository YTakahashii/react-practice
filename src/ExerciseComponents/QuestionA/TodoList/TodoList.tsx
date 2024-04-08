import { Button, Checkbox, HStack, List, ListItem } from '@chakra-ui/react';
import { Todo } from '../Todo.type';
import { TodoFilterStatus } from '../TodoListFilter/TodoListFilter.type';
import { useMemo } from 'react';
import type { UseTodoListReturn } from './useTodoList';

type TodoListProps = Pick<UseTodoListReturn, 'toggleTodo' | 'deleteTodo'> & {
  status: TodoFilterStatus;
  query: string;
  todoList: Todo[];
};

export function TodoList({ todoList, query, status, toggleTodo, deleteTodo }: TodoListProps) {
  const filteredTodoList = useMemo(() => {
    return todoList.filter((todo) => {
      const isMatchQuery = todo.title.includes(query);
      switch (status) {
        case 'all':
          return isMatchQuery;
        case 'active':
          return !todo.completed && isMatchQuery;
        case 'completed':
          return todo.completed && isMatchQuery;
        default:
          return false;
      }
    });
  }, [todoList, query, status]);

  return (
    <List spacing={2} w="100%">
      {filteredTodoList.length > 0 ? (
        filteredTodoList.map((todo) => {
          return (
            <ListItem key={todo.id}>
              <HStack justify="space-between">
                <Checkbox
                  isChecked={todo.completed}
                  onChange={() => {
                    toggleTodo({
                      id: todo.id,
                    });
                  }}
                >
                  {todo.title}
                </Checkbox>
                <Button
                  size="xs"
                  onClick={() => {
                    deleteTodo({
                      id: todo.id,
                    });
                  }}
                >
                  削除
                </Button>
              </HStack>
            </ListItem>
          );
        })
      ) : (
        <ListItem>タスクはありません</ListItem>
      )}
    </List>
  );
}
