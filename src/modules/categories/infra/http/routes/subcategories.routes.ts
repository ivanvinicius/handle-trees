import { Router } from 'express';

import { SubcategoriesController } from '../controllers/SubcategoriesController';

const subcategoriesRouter = Router();
const subcategoriesController = new SubcategoriesController();

subcategoriesRouter.get('/', subcategoriesController.index);

export { subcategoriesRouter };
