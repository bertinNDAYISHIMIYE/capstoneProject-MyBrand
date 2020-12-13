import Router from 'express';
import blogsRoutes from './blogs.js';
import enquiryRoutes from './enquiryRoutes.js';


import blogsCommentsRoutes from './blogscomments.js';

import userRoutes from './user.js';



const router = Router();

    router.use("/",enquiryRoutes);
    router.use("/blogs", blogsRoutes);


    router.use("/blogs/comments", blogsCommentsRoutes);

    
    router.use("/users", userRoutes);

    export default router;
