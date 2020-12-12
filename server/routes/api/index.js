import Router from 'express';
import blogsRoutes from './blogs.js';
import enquiryRoutes from './enquiryRoutes.js';

import blogsCommentsRoutes from './blogscomments.js';


const router = Router();

    router.use("/",enquiryRoutes);
    router.use("/blogs", blogsRoutes);

    router.use("/blogs/comments", blogsCommentsRoutes);
    export default router;
