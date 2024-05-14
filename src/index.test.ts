import solution, { Response } from '@/index';
import postItem from '@/api/postItem';

const postItemMock = postItem as jest.Mock;
jest.mock('@/api/postItem');

describe(solution, () => {
  it('should add a todo and return it\'s count', async () => {
    postItemMock.mockReturnValue({  title: 'I\'m a mock value!' });
    const result: Response = await solution('I\'m a real value!');
    expect(result.todos.length).toBe(1);
    expect(result.todos).toMatchObject([{ title: 'I\'m a mock value!' }]);
    expect(postItem).toHaveBeenCalledWith(expect.objectContaining({ title: 'I\'m a real value!' }));
  });
});