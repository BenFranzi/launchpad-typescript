import solution, { Response } from '@/index';
import postItem, { isNumber } from '@/api/postItem';

const postItemMock = postItem as jest.Mock;
const isNumberMock = isNumber as jest.Mock;

jest.mock('@/api/postItem');

describe(solution, () => {
  it('should return the sum', async () => {
    postItemMock.mockReturnValue(9);
    isNumberMock.mockReturnValue(false);

    const result: Response = await solution(3);
    expect(result.value).toBe(9);
    expect(result.isNumber).toBe(false);
    expect(postItem).toHaveBeenCalledWith(3);
    expect(isNumber).toHaveBeenCalledWith(7);
  });
});