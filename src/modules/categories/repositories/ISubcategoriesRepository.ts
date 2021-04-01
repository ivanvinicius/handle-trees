import { Category } from '../infra/typeorm/entities/Category';

interface ISubcategoriesRepository {
  findAll(parent_id: string): Promise<Category[] | undefined>;
}

export { ISubcategoriesRepository };
