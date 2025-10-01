import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_meta')
export class UserMeta {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  dob: Date;

  @Column()
  address: string;
  @Column()
  city: string;
  @Column()
  state: string;
  @Column()
  country: string;

  @Column({
    nullable: true,
  })
  profilePic: string;
}
