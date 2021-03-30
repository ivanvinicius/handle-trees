import { Request, Response } from 'express';

class SubcategoriesController {
  public async index(request: Request, response: Response): Promise<Response> {
    return response.json({});
  }
}

export { SubcategoriesController };
