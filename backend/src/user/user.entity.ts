import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()  // Ensure this decorator is here
@Entity()
export class User {
  @Field(() => Int)  // Make sure field types are also defined for GraphQL
  @PrimaryGeneratedColumn()
  id: number;

  @Field()  // Field for username
  @Column()
  username: string;

  @Field()  // Field for email
  @Column()
  email: string;

  @Field()  // Field for password
  @Column()
  password: string;
}
