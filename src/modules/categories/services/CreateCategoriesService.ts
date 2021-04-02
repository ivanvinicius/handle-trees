import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';
import { Category } from '@modules/categories/infra/typeorm/entities/Category';
import { ICategoriesRepository } from '@modules/categories/repositories/ICategoriesRepository';

interface IRequest {
  category: string;
  subcategories: Array<{ name: string }>;
}

@injectable()
class CreateCategoriesService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  public async run({
    category,
    subcategories,
  }: IRequest): Promise<Category | undefined> {
    const categoryExists = await this.categoriesRepository.findCategoryByName(
      category,
    );

    if (!categoryExists) {
      const newCategory = await this.categoriesRepository.create({
        category,
        subcategories,
      });

      return newCategory;
    }

    throw new AppError('error');
  }
}

export { CreateCategoriesService };
