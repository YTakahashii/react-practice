import { Box, Button, Input } from '@chakra-ui/react';
import { useRef } from 'react';

type TodoCreationFormProps = {
  onCreateTodo: (title: string) => void;
};

export function TodoCreationForm({ onCreateTodo }: TodoCreationFormProps) {
  const titleRef = useRef<HTMLInputElement>(null);

  return (
    <Box
      as="form"
      onSubmit={(e) => {
        e.preventDefault();
        if (titleRef.current) {
          onCreateTodo(titleRef.current.value);
          titleRef.current.value = '';
        }
      }}
      display="flex"
      gap={2}
    >
      <Input ref={titleRef} size="sm" placeholder="Learn React" />
      <Button type="submit" size="sm">
        追加
      </Button>
    </Box>
  );
}
