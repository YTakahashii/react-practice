import { Box } from '@chakra-ui/react';
import { TodoListFilter } from './TodoListFilter/TodoListFilter';
import { useTodoListFilter } from './TodoListFilter/useTodoListFilter';
import { TodoList } from './TodoList/TodoList';
import { defaultTodoList } from './Todo.fixture';

export function QuestionA() {
  const todoListFilter = useTodoListFilter();

  return (
    <Box as="main" p={4}>
      <TodoListFilter {...todoListFilter} />
      <TodoList todoList={defaultTodoList} query={todoListFilter.query} status={todoListFilter.status} />
    </Box>
  );
}
