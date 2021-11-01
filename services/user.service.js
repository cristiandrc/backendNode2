const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class UserService {
  constructor() {
    this.user = [];
  }

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }

  async find() {
    const rta = await models.User.findAll();
    return rta;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('user not exist');
    }
    return user;
  }

  async update(id, data) {
    const user = await this.findOne(id);
    const rta = await user.update(data);
    return rta;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = UserService;
