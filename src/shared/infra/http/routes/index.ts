import { Router } from 'express';

import { categoriesRouter } from '@modules/categories/infra/http/routes/categories.routes';
import { addressesRouter } from '@modules/addresses/infra/http/routes/addresses.routes';

const routes = Router();

routes.use('/categories', categoriesRouter);
routes.use('/addresses', addressesRouter);

export { routes };
