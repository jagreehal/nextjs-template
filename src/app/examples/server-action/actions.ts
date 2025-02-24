'use server';

interface AddTodoResponse {
  success: boolean;
  todo: string;
}

export async function addTodo(formData: FormData): Promise<AddTodoResponse> {
  // Simulate a delay to show loading state
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const todo = formData.get('todo');

  if (!todo || typeof todo !== 'string') {
    throw new Error('Invalid todo');
  }

  // Here you would typically save to a database
  console.error('Added todo:', todo);

  return { success: true, todo };
}
