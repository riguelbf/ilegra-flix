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
    const userName = userOnSearch.substr(6, userOnSearch.length);
    const data = (await repository.getData()) || {};
    data.currentUser = userName;
    repository.setData(data);
  },
};
