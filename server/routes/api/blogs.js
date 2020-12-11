import Router from 'express';
import {blogController} from "../../controllers/blogs.js";
import { verifyToken } from '../../middleware/auth.js';
import {upload} from '../../config/multer.js';
import {blogValidation} from '../../middleware/validators/blogValidation.js';

const router = Router();

router.post('/addBlog',upload.single('image'),blogValidation.blogvalidation,verifyToken.checkAdmin, blogController.createBlog );


router.put('/updateBlog/:id',verifyToken.checkAdmin,upload.single('image'),blogValidation.blogvalidation, blogController.updateBlog);
export default router;