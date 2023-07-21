// src/models/User.ts
import { Model, Column, Table, DataType } from 'sequelize-typescript';
@Table({ tableName: 'users', timestamps: false })
export class User extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  firstName!: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lastName!: string;
}
// Export the User model
export default User;
