import solution, { Response } from '@/index';
import postItem, { countTodos } from '@/api/postItem';

const postItemMock = postItem as jest.Mock;
const countTodosMock = countTodos as jest.Mock;

jest.mock('@/api/postItem');

describe(solution, () => {
  it('should add a todo and return it\'s count', async () => {
    postItemMock.mockReturnValue({  title: 'I\'m a mock value!' });
    countTodosMock.mockReturnValue(1000);

    // import * as api from '@/api';
    // or const spy = jest.spyOn(api, 'doRequest');

    const result: Response = await solution('I\'m a real value!');
    expect(result.todos.length).toBe(1);
    expect(result.todos).toMatchObject([
      {
        title: 'I\'m a mock value!',
      }
    ]);
    expect(result.count).toBe(1000);
    expect(postItem).toHaveBeenCalledWith(expect.objectContaining({ title: 'I\'m a real value!' }));
    expect(countTodos).toHaveBeenCalledWith(
      expect.arrayContaining([ expect.objectContaining({ title: 'I\'m a mock value!', }) ])
    );
  });
});