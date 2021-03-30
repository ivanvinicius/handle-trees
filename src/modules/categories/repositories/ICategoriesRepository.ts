import { Category } from '../infra/typeorm/entities/Category';

interface ICategoriesRepository {
  findAll(): Promise<Category[] | undefined>;
}

export { ICategoriesRepository };
