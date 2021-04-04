import { inject, injectable } from 'tsyringe';

import { IAddressesRepository } from '../repositories/IAddressesRepository';
import { State } from '../infra/typeorm/entities/State';

interface IRequest {
  state: string;
  cities: [{ name: string }];
}

@injectable()
class CreateAddressesService {
  constructor(
    @inject('AddressesRepository')
    private addressesRepository: IAddressesRepository,
  ) {}

  public async run({ state, cities }: IRequest): Promise<State | undefined> {
    return this.addressesRepository.create({ state, cities });
  }
}

export { CreateAddressesService };
