import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
 
@Entity()
class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  uid: string;

  @Column({ unique: true })
  email: string;
 
  @Column()
  name: string;
 
  @Column()
  password: string;

  @Column("timestamp", { default: () => "CURRENT_TIMESTAMP" })
  createdAt: string

}
 
export default UserEntity;