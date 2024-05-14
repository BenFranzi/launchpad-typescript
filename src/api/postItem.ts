export default async function postItem(value: number): Promise<number> {
  const response = await fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: 'Pencil',
    })
  });
  const blob = await response.json();
  console.log(blob);
  return value * 2;
}

export function isNumber(value: number): boolean {
  return !Number.isNaN(value);
}