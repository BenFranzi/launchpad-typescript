import postItem, { countTodos, Todo } from '@/api/postItem';

export type Response = {
  todos: Todo[];
  count: number;
}

export default async function addTodo(title: string): Promise<Response> {
  const todo = await postItem({ title });
  const todos = [todo];
  const count = countTodos(todos);
  return { todos, count };
}