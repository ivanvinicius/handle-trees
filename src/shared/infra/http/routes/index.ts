import { Router } from 'express';

import { categoriesRouter } from '@modules/categories/infra/http/routes/categories.routes';
import { subcategoriesRouter } from '@modules/categories/infra/http/routes/subcategories.routes';

const routes = Router();

routes.use('/categories', categoriesRouter);
routes.use('/subcategories', subcategoriesRouter);

export { routes };
