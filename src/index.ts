// import postItem, { isNumber } from './src/api/postItem.ts';
import another from './another.ts';


export type Response = {
  value: number;
  isNumber: boolean;
}

export default async function double(value: number): Promise<Response> {
  // const result = await postItem(value);
  // const other = isNumber(value + 4);
  // return { value: result, isNumber: other };

  another();
  return { value: 3, isNumber: true };
}
double(3);