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
};
