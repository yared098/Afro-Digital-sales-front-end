import mysql from 'mysql2/promise';
import BaseService from './baseService';

const connection = await mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

class MySQLService extends BaseService {
  async create(table, data) {
    const [result] = await connection.execute(`INSERT INTO ${table} SET ?`, [data]);
    return { id: result.insertId, ...data };
  }

  async read(table, query = {}) {
    const [rows] = await connection.execute(`SELECT * FROM ${table} WHERE ?`, [query]);
    return rows;
  }

  async update(table, id, data) {
    const [result] = await connection.execute(`UPDATE ${table} SET ? WHERE id = ?`, [data, id]);
    return { id, ...data };
  }

  async delete(table, id) {
    const [result] = await connection.execute(`DELETE FROM ${table} WHERE id = ?`, [id]);
    return id;
  }
}

export default new MySQLService();
