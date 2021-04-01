import { getTreeRepository, TreeRepository } from 'typeorm';

import { Category } from '../entities/Category';
import { ISubcategoriesRepository } from '../../../repositories/ISubcategoriesRepository';

class SubcategoriesRepository implements ISubcategoriesRepository {
  private ormTreeRepository: TreeRepository<Category>;

  constructor() {
    this.ormTreeRepository = getTreeRepository(Category);
  }

  public async findAll(parent_id: string): Promise<Category[] | undefined> {
    return this.ormTreeRepository.find({
      where: {
        parent_id,
      },
    });
  }
}

export { SubcategoriesRepository };
