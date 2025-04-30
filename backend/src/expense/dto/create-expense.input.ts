import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateExpenseInput {
    @Field()
    title: string;
  
    @Field()
    amount: number;
  
    @Field()
    date: string; // or Date if you're using @Column('date')
  }

