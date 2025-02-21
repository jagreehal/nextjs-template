'use client';

import { useRef, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { addTodo } from './actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { toast } from 'sonner';

interface Todo {
  id: number;
  text: string;
  createdAt: string;
}

const randomTodos = [
  'Buy groceries',
  'Learn Next.js',
  'Write blog post',
  'Exercise',
  'Read a book',
  'Call family',
  'Plan weekend',
];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full">
      {pending ? 'Adding...' : 'Add Todo'}
    </Button>
  );
}

export default function ServerActionExample() {
  const formRef = useRef<HTMLFormElement>(null);
  const [todos, setTodos] = useState<Todo[]>([]);

  async function action(formData: FormData) {
    const todoText = formData.get('todo') as string;

    try {
      await addTodo(formData);

      setTodos((prev) => [
        {
          id: Date.now(),
          text: todoText,
          createdAt: new Date().toLocaleString(),
        },
        ...prev,
      ]);

      toast.success('Todo added successfully');

      formRef.current?.reset();
      if (formRef.current) {
        const input = formRef.current.querySelector('input');
        if (input) {
          input.value = getRandomTodo();
        }
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to add todo');
    }
  }

  function getRandomTodo() {
    return randomTodos[Math.floor(Math.random() * randomTodos.length)];
  }

  return (
    <div className="max-w-3xl mx-auto py-10 space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-3">
          Server Action Example
        </h1>
        <p className="text-lg text-muted-foreground">
          This example demonstrates form handling with server actions, including
          loading states and error handling.
        </p>
      </div>

      <Card className="shadow-sm gap-y-8 p-4">
        <CardHeader className="space-y-2 pt-0">
          <CardTitle className="text-xl">Add New Todo</CardTitle>
          <CardDescription className="text-base">
            Enter a new todo or use the randomly generated suggestion.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form ref={formRef} action={action} className="space-y-6">
            <div className="space-y-4">
              <Label htmlFor="todo" className="text-base">
                New Todo
              </Label>
              <Input
                id="todo"
                name="todo"
                type="text"
                required
                placeholder="Enter a new todo"
                defaultValue={getRandomTodo()}
                className="text-lg py-6"
              />
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardHeader className="space-y-2">
          <CardTitle className="text-xl">Recent Todos</CardTitle>
          <CardDescription className="text-base">
            A list of your recently added todos.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          {todos.length === 0 ? (
            <div className="text-center py-10 text-muted-foreground text-lg">
              No todos yet. Add your first todo above!
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-base">Todo</TableHead>
                  <TableHead className="text-right text-base">Added</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {todos.map((todo) => (
                  <TableRow key={todo.id}>
                    <TableCell className="text-base font-medium">
                      {todo.text}
                    </TableCell>
                    <TableCell className="text-right text-base text-muted-foreground">
                      {todo.createdAt}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
