// src/models/User.ts
import { Model, Column, Table, DataType } from 'sequelize-typescript';
import { sequelize } from '../database';

@Table({ tableName: 'users', timestamps: false })
export class User extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  firstName!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  lastName!: string;
}

// Associate the model with the Sequelize instance
sequelize.addModels([User]);

// Export the User model
export default User;

















































// // src/models/User.ts
// import "reflect-metadata";
// import { Model, Column, Table, DataType, Sequelize } from 'sequelize-typescript';

// // Define Sequelize configuration
// const sequelize = new Sequelize('hello', 'root', 'root', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

// // Connect to the database
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connected to the database!');
//   })
//   .catch((error: any) => {
//     console.error('Error connecting to the database:', error);
//   });

// @Table({ tableName: 'users', timestamps: false })
// export class User extends Model {
//   @Column({
//     type: DataType.STRING,
//     allowNull: false
//   })
//   firstName!: string;

//   @Column({
//     type: DataType.STRING,
//     allowNull: false
//   })
//   lastName!: string;
// }

// // Synchronize the model with the database
// sequelize
//   .sync()
//   .then(() => {
//     console.log('Model synchronized with the database.');
//   })
//   .catch((error: any) => {
//     console.error('Error synchronizing the model:', error);
//   });


//   // Associate the model with the Sequelize instance
// sequelize.addModels([User]);

// // Export the User model
// export default User;