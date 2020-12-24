import { Router } from "express";
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerOptions from '../../swagger';
import blogsRoutes from "./blogs";
import enquiryRoutes from "./enquiryRoutes";
import blogsCommentsRoutes from "./blogscomments";
import userRoutes from "./user";

const router = Router();
const swaggerDoc = swaggerJsdoc(swaggerOptions);

router.use("/", enquiryRoutes);
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

router.use("/blogs", blogsRoutes);
router.use("/blogs/comments", blogsCommentsRoutes);
router.use("/users", userRoutes);

export default router;
