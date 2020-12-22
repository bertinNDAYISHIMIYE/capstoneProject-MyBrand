import {setUpSwaggerUi} from '../swagger.js'
//import Router from 'express';
import routes from './api/index.js';

//const router = Router();

const route = (app) => {
    app.use('/api', routes);
    setUpSwaggerUi(app);
    return app;
};
//router.use

export default route;