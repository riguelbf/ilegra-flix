import { repository } from '../repository/repository';

export const userService = {
  async getUsers() {
    const fakeUsers = [
      {
        name: 'Huguinho',
      },
      {
        name: 'Zézinho',
      },
      {
        name: 'Luizinho',
      },
    ];
    const users = (await repository.getData().users) || fakeUsers;
    return users;
  },
  async setCurrentUser(userOnSearch) {
    const data = await repository.getData();
    const userName = userOnSearch.substr(6, userOnSearch.length);
    const users = data.users || [];
    const currentUser = users.find(user => user.name === userName) || {
      name: userName,
      watchedMovies: [],
    };
    data.currentUser = currentUser;

    repository.setData(data);
  },
  async getCurrentUser() {
    const currentUser = (await repository.getData().currentUser) || {};
    return currentUser;
  },
};
