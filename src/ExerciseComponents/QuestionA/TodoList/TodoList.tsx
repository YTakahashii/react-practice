import { Checkbox, HStack, List, ListItem, Text } from '@chakra-ui/react';
import { Todo } from '../Todo.type';
import { TodoFilterStatus } from '../TodoListFilter/TodoListFilter.type';
import { useMemo } from 'react';

type TodoListProps = {
  status: TodoFilterStatus;
  query: string;
  todoList: Todo[];
};

export function TodoList({ todoList, query, status }: TodoListProps) {
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
    <List>
      {filteredTodoList.length > 0 ? (
        filteredTodoList.map((todo) => {
          return (
            <ListItem key={todo.id}>
              <HStack>
                <Checkbox isChecked={todo.completed} isDisabled />
                <Text>{todo.title}</Text>
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