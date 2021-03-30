import { TreeRepository, getTreeRepository } from 'typeorm';

import { ICategoriesRepository } from '@modules/categories/repositories/ICategoriesRepository';
import { Category } from '../entities/Category';

class CategoriesRepository implements ICategoriesRepository {
  private ormTreeRepository: TreeRepository<Category>;

  constructor() {
    this.ormTreeRepository = getTreeRepository(Category);
  }

  public async findAll(): Promise<Category[] | undefined> {
    return this.ormTreeRepository.findTrees();
  }
}

export { CategoriesRepository };
