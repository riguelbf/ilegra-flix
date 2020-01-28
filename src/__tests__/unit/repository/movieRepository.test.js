import MockAdapter from 'axios-mock-adapter';
import { repository, LOCAL_STORAGE_KEY } from '../../../repository/repository';
import { all } from '../../stubs/movies';
import request from '../../../service/request';

describe('Movie repository', () => {
  let axiosMock = {};

  beforeEach(() => {
    localStorage.clear();
    axiosMock = new MockAdapter(request);
  });

  test('should store new movie list as "all" type', async () => {
    axiosMock
      .onGet(
        '/trending/all/week?api_key=2590ac2e9a87fbfe0e649b19ae1b91c2&language=en-US'
      )
      .reply(200, all);

    await repository.setData(all);

    expect(localStorage.setItem).toHaveBeenCalled();
  });

  test('should get movie list already stored', async () => {
    axiosMock
      .onGet(
        '/trending/all/week?api_key=2590ac2e9a87fbfe0e649b19ae1b91c2&language=en-US'
      )
      .reply(200, all);

    const movieList = await repository.getData();

    expect(localStorage.getItem).toHaveBeenCalled();
  });
});
