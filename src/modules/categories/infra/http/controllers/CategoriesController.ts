import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import { CreateCategoriesService } from '@modules/categories/services/CreateCategoriesService';
import { ListCategoriesService } from '../../../services/ListCategoriesService';

class CategoriesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listCategories = container.resolve(ListCategoriesService);

    const categories = await listCategories.run();

    return response.json({ categories: classToClass(categories) });
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { category, subcategories } = request.body;

    const createCategories = container.resolve(CreateCategoriesService);

    const categories = await createCategories.run({
      category,
      subcategories,
    });

    return response.json(categories);
  }
}

export { CategoriesController };
