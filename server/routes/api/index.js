import Router from 'express';
import blogsRoutes from './blogs.js';
import enquiryRoutes from './enquiryRoutes.js';



const router = Router();

    router.use("/",enquiryRoutes);
    router.use("/blogs", blogsRoutes);

    export default router;
