import { container } from 'tsyringe';

import { ICategoriesRepository } from '@modules/categories/repositories/ICategoriesRepository';
import { CategoriesRepository } from '@modules/categories/infra/typeorm/repositories/CategoriesRepository';

import { IAddressesRepository } from '@modules/addresses/repositories/IAddressesRepository';
import { AddressesRepository } from '@modules/addresses/infra/typeorm/repositories/AddressesRepository';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<IAddressesRepository>(
  'AddressesRepository',
  AddressesRepository,
);
