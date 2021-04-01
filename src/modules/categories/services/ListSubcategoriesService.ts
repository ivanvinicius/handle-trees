import { inject, injectable } from 'tsyringe';

import { Category } from '../infra/typeorm/entities/Category';
import { ISubcategoriesRepository } from '../repositories/ISubcategoriesRepository';

interface IRequest {
  parent_id: string;
}

@injectable()
class ListSubcategoriesService {
  constructor(
    @inject('SubcategoriesRepository')
    private subcategoriesRepository: ISubcategoriesRepository,
  ) {}

  public async run({ parent_id }: IRequest): Promise<Category[] | undefined> {
    return this.subcategoriesRepository.findAll(parent_id);
  }
}

export { ListSubcategoriesService };
