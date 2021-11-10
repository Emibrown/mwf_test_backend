import {Entity, BaseEntity, PrimaryGeneratedColumn, Column} from "typeorm";
 
@Entity()
class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  uid: string;

  @Column({ unique: true })
  email: string;
 
  @Column()
  public name: string;
 
  @Column()
  password: string;

  @Column("timestamp", { default: () => "CURRENT_TIMESTAMP" })
  createdAt: string

}
 
export default UserEntity;