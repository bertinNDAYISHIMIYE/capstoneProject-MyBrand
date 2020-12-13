import Router from 'express';
import {blogController} from "../../controllers/blogs.js";
import { verifyToken } from '../../middleware/auth.js';
import {upload} from '../../config/multer.js';
import {blogValidation} from '../../middleware/validators/blogValidation.js';

const router = Router();

router.post('/addBlog',upload.single('image'),blogValidation.blogvalidation,verifyToken.checkAdmin, blogController.createBlog );

//get all blogs
router.get('/', blogController.getBlogs);


//delete a blog
router.delete('/delete/:id', verifyToken.checkAdmin, blogController.deleteBlog);

//get one blog by id
router.get('/:id',blogController.getBlogById);

export default router;