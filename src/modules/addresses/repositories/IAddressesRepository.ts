import { State } from '@modules/addresses/infra/typeorm/entities/State';
import { ICreateAddressesDTO } from '@modules/addresses/dtos/ICreateAddressesDTO';

interface IAddressesRepository {
  create(data: ICreateAddressesDTO): Promise<State | undefined>;
}

export { IAddressesRepository };
