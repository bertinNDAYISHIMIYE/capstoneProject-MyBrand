/* eslint-disable import/named */
/* eslint-disable import/extensions */
import Router from 'express';
import { blogController } from '../../controllers/blogs.js';
import { verifyToken } from '../../middleware/auth.js';
import { upload } from '../../config/multer.js';
import { blogValidation } from '../../middleware/validators/blogValidation.js';

const router = Router();
<<<<<<< HEAD
/**
* @swagger
* /blogs/addBlog:
*   post:
*     tags:
*       - Blogs
*     name: Blog
*     summary: post a  blog
*     consumes:
*        - multipart/form-data
*     parameters:
*       - name: Authorization
*         in: header
*         required: true
*       - in: formData
*         name: title
*         type: string
*         required: true
*       - in: formData
*         name: author
*         type: string
*         required: true
*       - in: formData
*         name: image
*         type: file
*         required: true
*       - in: formData
*         name: content
*         type: string
*         required: true
*     responses:
*       201:
*             description: Blog successfully Created.
*       400:
*             description: Bad request.
*       401:
*             description: unAuthorized
* */
router.post('/addBlog',upload.single('image'),blogValidation.blogvalidation,verifyToken.checkAdmin, blogController.createBlog );

/**
 * @swagger
 * /blogs:
 *   get:
 *     tags:
 *       - Blogs
 *     name: Blog
 *     summary: fetch all blogs
 *     consumes:
 *        - application/json
 *     responses:
 *       200:
 *             description: Blogs successfully fetched.
 * */
//get all blogs
router.get('/', blogController.getBlogs);
/**
* @swagger
* /blogs/updateBlog/{id}:
*   put:
*     tags:
*       - Blogs
*     name: blog
*     summary: Update a blog
*     consumes:
*       - multipart/form-data
*     parameters:
*       - name: Authorization
*         in: header
*         required: true
*       - name: id
*         in: path
*         required: true
*       - in: formData
*         name: title
*         type: string
*         required: false
*       - in: formData
*         name: author
*         type: string
*         required: false
*       - in: formData
*         name: image
*         type: file
*         required: false
*       - in: formData
*         name: content
*         type: string
*         required: false
*     responses:
*       200:
*             description: Blog successfully updated.
*       400:
*             description: Bad request.
*       404:
*             description: Blog not found.
*       500:
*             description: server error.
*       401:
*             description: unauthorized
* */

router.put('/updateBlog/:id',verifyToken.checkAdmin,upload.single('image'),blogValidation.blogvalidation, blogController.updateBlog);

/**
 * @swagger
 * /blogs/delete/{id}:
 *   delete:
 *     tags:
 *       - Blogs
 *     name: blog
 *     summary: Delete a blog
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: Authorization
 *         in: header
 *         required: true
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *             description: Blog successfully deleted.
 *       404:
 *             description: Blog not found.
 *       500:
 *             description: server error.
 *       401:
 *             description: unauthorized
 * */
//delete a blog
router.delete('/delete/:id', verifyToken.checkAdmin, blogController.deleteBlog);
/**
 * @swagger
 * /blogs/{id}:
 *   get:
 *     tags:
 *       - Blogs
 *     name: Blog
 *     summary: Retrieve one blog by id
 *     consumes:
 *        - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: Blog ID
 *     responses:
 *       200:
 *             description: Blog successfully fetched.
 *       404:
 *             description: Blog not found.
 *       500:
 *             description: server error.
 * */
//get one blog by id
router.get('/:id',blogController.getBlogById);

=======

router.post('/addBlog', upload.single('image'), blogValidation.blogvalidation, verifyToken.checkAdmin, blogController.createBlog);

// get all blogs
router.get('/', blogController.getBlogs);

router.put('/updateBlog/:id', verifyToken.checkAdmin, upload.single('image'), blogValidation.blogvalidation, blogController.updateBlog);

// delete a blog
router.delete('/delete/:id', verifyToken.checkAdmin, blogController.deleteBlog);

// get one blog by id
router.get('/:id', blogController.getBlogById);
>>>>>>> applying ESlint

export default router;
