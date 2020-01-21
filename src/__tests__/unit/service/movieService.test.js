import MockAdapter from 'axios-mock-adapter';
import request from '../../../service/request';
import { MovieService } from '../../../service/movieService';

import { all } from '../../stubs/movies';

describe('Movie service', () => {
  let axiosMock = {};

  beforeEach(() => {
    axiosMock = new MockAdapter(request);
  });

  test('should have base configuratiion', () => {
    const baseUrl = request.baseURL;

    expect(baseUrl).toEqual(request.baseUrl);
  });

  test('should result in at least one film', async () => {
    axiosMock.onGet('/trending/all/week?api_key=2590ac2e9a87fbfe0e649b19ae1b91c2&language=en-US').reply(200, all);

    const moviesList = await MovieService.getMovies();

    expect(moviesList.data.length > 0).toBe(true);
  });
});
