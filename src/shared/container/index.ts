import { container } from 'tsyringe';

import { ICategoriesRepository } from '@modules/categories/repositories/ICategoriesRepository';
import { CategoriesRepository } from '@modules/categories/infra/typeorm/repositories/CategoriesRepository';

import { ISubcategoriesRepository } from '@modules/categories/repositories/ISubcategoriesRepository';
import { SubcategoriesRepository } from '@modules/categories/infra/typeorm/repositories/SubcategoriesRepository';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<ISubcategoriesRepository>(
  'SubcategoriesRepository',
  SubcategoriesRepository,
);
