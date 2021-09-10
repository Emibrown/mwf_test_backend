import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from 'typeorm';
 
@Entity()
class InventoryEntity {
  @PrimaryGeneratedColumn()
  public id: number;
 
  @Column()
  public name: string;
 
  @Column()
  public quantity: number;

  @Column({type: "timestamp"})
  public expiry: Date;

}
 
export default InventoryEntity;