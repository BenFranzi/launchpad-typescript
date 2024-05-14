export type Todo = {
  title: string;
}

export default async function postTodo(item: Todo): Promise<Todo> {
  const response = await fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  });
  return response.json();
}

export function countTodos(todos: Todo[]): number {
  return todos.length;
}