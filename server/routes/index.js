<<<<<<< HEAD
import {setUpSwaggerUi} from '../swagger.js'
//import Router from 'express';
=======
/* eslint-disable import/extensions */
import Router from 'express';
>>>>>>> applying ESlint
import routes from './api/index.js';

//const router = Router();

const route = (app) => {
    app.use('/api', routes);
    setUpSwaggerUi(app);
    return app;
};
//router.use

<<<<<<< HEAD
export default route;
=======
export default router;
>>>>>>> applying ESlint
