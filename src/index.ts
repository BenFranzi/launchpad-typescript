import postItem, { isNumber } from '@/api/postItem';


export type Response = {
  value: number;
  isNumber: boolean;
}

export default async function double(value: number): Promise<Response> {
  const result = await postItem(value);
  const other = isNumber(value + 4);
  return { value: result, isNumber: other };
}