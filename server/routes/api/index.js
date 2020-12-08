import Router from 'express';
import enquiryRoutes from './enquiriesRoutes.js';


const router = Router();

    router.use("/",enquiryRoutes);
  

    export default router;
