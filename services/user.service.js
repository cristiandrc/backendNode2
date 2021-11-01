const faker = require('faker');
const pool = require('../libs/postgres.pool');
const { models } = require('../libs/sequelize');

class UserService {
  constructor() {
    this.user = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.user.push({
        id: faker.datatype.uuid(),
        name: faker.name.findName(),
      });
    }
  }

  create(data) {
    const newUser = {
      id: faker.datatype.uuid(),
      ...data,
    };

    this.user.push(newUser);
    return newUser;
  }

  async find() {
    const rta = await models.User.findAll();
    return rta;
  }

  findOne(id) {
    const user = this.user.find((item) => item.id === id);
    return user;
  }

  update(id, data) {
    const index = this.user.findIndex((item) => item.id === id);
    this.user[index] = { ...this.user[index], ...data };

    return this.user[index];
  }

  delete(id) {
    this.user.splice(id, 1);
    return { id };
  }
}

module.exports = UserService;
