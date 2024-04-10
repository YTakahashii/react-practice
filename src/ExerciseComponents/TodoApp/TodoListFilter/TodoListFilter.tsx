import { Input, Radio, RadioGroup, VStack } from '@chakra-ui/react';
import type { UseTodoListFilterReturn } from './useTodoListFilter';

export type TodoListFilterProps = UseTodoListFilterReturn;

export function TodoListFilter({ query, status, handleFilterStatusChange, handleQueryChange }: TodoListFilterProps) {
  return (
    <VStack>
      <Input
        placeholder="検索"
        value={query}
        onChange={(e) => {
          handleQueryChange(e.target.value);
        }}
      />
      <RadioGroup
        value={status}
        onChange={(value) => {
          handleFilterStatusChange(value);
        }}
      >
        <Radio value="all">全て</Radio>
        <Radio value="active">未完了</Radio>
        <Radio value="completed">完了</Radio>
      </RadioGroup>
    </VStack>
  );
}
