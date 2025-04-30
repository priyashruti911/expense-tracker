import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { Expense } from './entities/expense.entity';
import { ExpenseService } from './expense.service';
import { CreateExpenseInput } from './dto/create-expense.input';

@Resolver(() => Expense)
export class ExpenseResolver {
  constructor(private readonly expenseService: ExpenseService) {}

  @Mutation(() => Expense)
  addExpense(
    @Args('createExpenseInput') createExpenseInput: CreateExpenseInput,
  ): Promise<Expense> {
    return this.expenseService.create(createExpenseInput);
  }

  @Query(() => [Expense])
  getAllExpenses(): Promise<Expense[]> {
    return this.expenseService.findAll();
  }
}
