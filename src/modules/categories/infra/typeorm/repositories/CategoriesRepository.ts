import { TreeRepository, getTreeRepository, ILike } from 'typeorm';

import { ICategoriesRepository } from '@modules/categories/repositories/ICategoriesRepository';
import { ICreateCategoriesDTO } from '@modules/categories/dtos/ICreateCategoriesDTO';
import { Category } from '../entities/Category';

class CategoriesRepository implements ICategoriesRepository {
  private ormRepository: TreeRepository<Category>;

  constructor() {
    this.ormRepository = getTreeRepository(Category);
  }

  public async findAll(): Promise<Category[] | undefined> {
    return this.ormRepository.findTrees();
  }

  public async findCategoryByName(
    category: string,
  ): Promise<Category | undefined> {
    return this.ormRepository.findOne({
      where: {
        name: ILike(category),
      },
    });
  }

  public async create({
    category,
    subcategories,
  }: ICreateCategoriesDTO): Promise<Category | undefined> {
    const newCategory = this.ormRepository.create({
      name: category,
      children: subcategories,
    });

    await this.ormRepository.save(newCategory);

    return newCategory;
  }
}

export { CategoriesRepository };
