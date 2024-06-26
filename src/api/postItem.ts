export type Todo = {
  title: string;
}

export default async function postItem(item: Todo): Promise<Todo> {
  const response = await fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  });
  return response.json();
}