import Sequelize from 'sequelize';

import User from '../app/models/User';

import databaseConfig from '../config/database';

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  /**
   * Método responsável pela conexão com a base de dados
   * e carregamento de Models
   */
  init() {
    // Obtendo a conexão
    this.connection = new Sequelize(databaseConfig);

    /**
     * percorrendo os models e passando a conexão
     * para o método init dos models
     */
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
