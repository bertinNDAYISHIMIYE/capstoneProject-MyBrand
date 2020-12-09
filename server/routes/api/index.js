import Router from 'express';
import enquiryRoutes from './enquiriesRoutes.js';
import blogsRoutes from './blogs.js';

const router = Router();

    router.use("/",enquiryRoutes);
    router.use("/blogs", blogsRoutes);

    export default router;
