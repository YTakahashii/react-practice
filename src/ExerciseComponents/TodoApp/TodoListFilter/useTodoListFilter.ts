import { useCallback, useState } from 'react';
import { TodoFilterStatus, isTodoFilterStatus } from './TodoListFilter.type';

export function useTodoListFilter() {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<TodoFilterStatus>('all');
  const handleFilterStatusChange = useCallback((status: string) => {
    if (isTodoFilterStatus(status)) {
      setStatus(status);
    }
  }, []);
  const handleQueryChange = useCallback((query: string) => {
    setQuery(query);
  }, []);

  return {
    query,
    status,
    handleFilterStatusChange,
    handleQueryChange,
  };
}

export type UseTodoListFilterReturn = ReturnType<typeof useTodoListFilter>;
