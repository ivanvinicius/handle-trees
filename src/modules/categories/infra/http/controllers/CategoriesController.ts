import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListCategoriesService } from '../../../services/ListCategoriesService';

class CategoriesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listCategories = container.resolve(ListCategoriesService);

    const categories = await listCategories.run();

    return response.json(categories);
  }
}

export { CategoriesController };
