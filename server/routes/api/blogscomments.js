import Router from "express";
import {blogcomments} from "../../controllers/blogscomments.js";
import { commentValidation } from "../../middleware/validators/commentsvalidation.js";
import { verifyToken } from '../../middleware/auth.js';
const router = Router();

router.post("/:id",commentValidation.commentvalidation, verifyToken.checkAdmin, blogcomments.addComment);
export default router;