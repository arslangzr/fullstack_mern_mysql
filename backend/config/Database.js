import { Sequelize } from "sequelize";

import dotenv from 'dotenv';
dotenv.config();

const dbConfig = {
  host: process.env.db_host,
  user: process.env.db_username,
  password: process.env.db_password,
  database: process.env.db_name
};

// Use the dbConfig object to connect to your database
const db = new Sequelize(dbConfig.database,dbConfig.user,dbConfig.password, {
    host: dbConfig.host,
    dialect: 'mysql'
});

export default db;