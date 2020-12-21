import Router from "express";
import {blogcomments} from "../../controllers/blogscomments.js";
import { commentValidation } from "../../middleware/validators/commentsvalidation.js";
import { verifyToken } from '../../middleware/auth.js';
const router = Router();
/**
* @swagger
* blogs/comments/{id}:
*   post:
*     tags:
*       - Blogs
*     name: comment
*     summary: adding a comment on the blog
*     consumes:
*       - application/json
*     parameters:
*       - name: id
*         in: path
*         required: true
*       - name: body
*         in: body
*         schema:
*             type: object
*             properties:
*                Name:
*                 type: string
*                 required: true
*                Email:
*                 type: string
*                 required: true
*                comment:
*                 type: string
*                 required: true
*              
*     responses:
*       201:
*             description: Comment successfully added.
*       400:
*             description: Bad request.
*       404:
*             description: blog not found.
*       500:
*             description: server error.
* */

router.post("/:id",commentValidation.commentvalidation, verifyToken.checkAdmin, blogcomments.addComment);
export default router;