import { Box, HStack, VStack } from '@chakra-ui/react';
import { TodoListFilter } from './TodoListFilter/TodoListFilter';
import { useTodoListFilter } from './TodoListFilter/useTodoListFilter';
import { TodoList } from './TodoList/TodoList';
import { defaultTodoList } from './Todo.fixture';
import { TodoCreationForm } from './TodoCreationForm/TodoCreationForm';
import { useTodoList } from './TodoList/useTodoList';

export function QuestionA() {
  const todoListFilter = useTodoListFilter();
  const { todoList, toggleTodo, createTodo } = useTodoList({ defaultTodoList });

  return (
    <Box as="main" p={4}>
      <VStack gap={4}>
        <TodoListFilter {...todoListFilter} />
        <TodoCreationForm
          onCreateTodo={(title) => {
            createTodo({ title });
          }}
        />
        <TodoList
          todoList={todoList}
          query={todoListFilter.query}
          status={todoListFilter.status}
          toggleTodo={toggleTodo}
        />
      </VStack>
    </Box>
  );
}
