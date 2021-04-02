import { ICreateCategoriesDTO } from '../dtos/ICreateCategoriesDTO';
import { Category } from '../infra/typeorm/entities/Category';

interface ICategoriesRepository {
  findAll(): Promise<Category[] | undefined>;
  create(data: ICreateCategoriesDTO): Promise<Category | undefined>;
  findCategoryByName(name: string): Promise<Category | undefined>;
}

export { ICategoriesRepository };
