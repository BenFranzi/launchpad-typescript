import postItem, { Todo } from '@/api/postItem';

export type Response = {
  todos: Todo[];
}

export default async function addTodo(title: string): Promise<Response> {
  const todo = await postItem({ title });
  const todos = [todo];
  return { todos };
}