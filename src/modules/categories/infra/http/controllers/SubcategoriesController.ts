import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListSubcategoriesService } from '@modules/categories/services/ListSubcategoriesService';
import { AppError } from '@shared/errors/AppError';
import { classToClass } from 'class-transformer';

class SubcategoriesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { parent_id } = request.query;

    if (!parent_id) {
      throw new AppError('Category id was not found on request.', 400);
    }

    const listSubcategories = container.resolve(ListSubcategoriesService);

    const subcategories = await listSubcategories.run({
      parent_id: String(parent_id),
    });

    return response.json({ subcategories: classToClass(subcategories) });
  }
}

export { SubcategoriesController };
