<<<<<<< HEAD
import { Router } from "express";
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerOptions from '../../swagger';
import blogsRoutes from "./blogs";
import enquiryRoutes from "./enquiryRoutes";
import blogsCommentsRoutes from "./blogscomments";
import userRoutes from "./user";
=======
/* eslint-disable import/extensions */
import Router from 'express';
import blogsRoutes from './blogs.js';
import enquiryRoutes from './enquiryRoutes.js';

import blogsCommentsRoutes from './blogscomments.js';

import userRoutes from './user.js';
>>>>>>> applying ESlint

const router = Router();
const swaggerDoc = swaggerJsdoc(swaggerOptions);

<<<<<<< HEAD
router.use("/", enquiryRoutes);
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

router.use("/blogs", blogsRoutes);
router.use("/blogs/comments", blogsCommentsRoutes);
router.use("/users", userRoutes);
=======
router.use('/', enquiryRoutes);
router.use('/blogs', blogsRoutes);

router.use('/blogs/comments', blogsCommentsRoutes);

router.use('/users', userRoutes);
>>>>>>> applying ESlint

export default router;
