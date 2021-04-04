import { getRepository, Repository } from 'typeorm';

import { IAddressesRepository } from '@modules/addresses/repositories/IAddressesRepository';
import { ICreateAddressesDTO } from '@modules/addresses/dtos/ICreateAddressesDTO';
import { State } from '../entities/State';

class AddressesRepository implements IAddressesRepository {
  private ormRepository: Repository<State>;

  constructor() {
    this.ormRepository = getRepository(State);
  }

  public async create({
    state,
    cities,
  }: ICreateAddressesDTO): Promise<State | undefined> {
    const newState = this.ormRepository.create({
      name: state,
      city: cities,
    });

    await this.ormRepository.save(newState);

    return newState;
  }
}

export { AddressesRepository };
