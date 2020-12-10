import Router from 'express';
import enquiryRoutes from './enquiryRoutes.js';


const router = Router();

    router.use("/",enquiryRoutes);
  

    export default router;
