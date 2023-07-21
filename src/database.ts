// src/database.ts
import { Sequelize } from 'sequelize-typescript';
import { User } from './models/Users';

// Define Sequelize configuration
export const sequelize = new Sequelize('hello', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

// Connect to the database and synchronize models
export async function connectToDatabase(): Promise<void> {
  try {
    await sequelize.authenticate();
    console.log('Connected to the database!');
    await sequelize.sync();
    console.log('Models synchronized with the database.');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
}

// Associate the model with the Sequelize instance
sequelize.addModels([User]);
