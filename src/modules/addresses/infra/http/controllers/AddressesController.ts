import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateAddressesService } from '@modules/addresses/services/CreateAddressesService';

class AddressesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { state, cities } = request.body;

    const createAddresses = container.resolve(CreateAddressesService);

    const addresses = await createAddresses.run({ state, cities });

    return response.json(addresses);
  }
}

export { AddressesController };
