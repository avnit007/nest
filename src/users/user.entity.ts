import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  password: string;

  @Column()
  username: string;

  @Column()
  isActive: boolean;

  @Column()
  school_id: string;

}
