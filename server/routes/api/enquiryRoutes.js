import Router  from "express"
const router = Router()
import {enquiryValidation} from '../../middleware/validators/enquiryvalidation.js';
import {enquiriescontrollers} from "../../controllers/enquiries.js";
import { verifyToken } from '../../middleware/auth.js';

/**
 * @swagger
 * /enquiries:
 *   get:
 *     tags:
 *       - enquiries
 *     name: enquiries
 *     summary: fetch all queries
 *     consumes:
 *        - application/json
 *     parameters:
 *       - name: Authorization
 *         in: header
 *         required: true
 *     responses:
 *       200:
 *             description: Queries successfully fetched.
 *       401:
 *             description: unauthorized
 * */
//Get all enquiries
router.get("/enquiries",verifyToken.checkAdmin, enquiriescontrollers.Allenquiries);

/**
 * @swagger
 * /enqueries:
 *   post:
 *     tags:
 *       - enquiries
 *     name: enqueries
 *     summary: Creates a query
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *             type: object
 *             properties:
 *                name:
 *                 type: string
 *                email:
 *                 type: string
 *                message:
 *                 type: string
 *         required:
 *                -name
 *                -email
 *                -message
 *     responses:
 *       201:
 *             description: query created successfully.
 *       400:
 *             description: Bad request.
 *       500:
 *             description: server down.
 * */
//post enquiry
router.post("/enquiries",enquiryValidation.enquiryvalidation, enquiriescontrollers.makeEnquiry);
/**
 * @swagger
 * /enquiries/{id}:
 *   get:
 *     tags:
 *       - enquiries
 *     name: enquiries
 *     summary: fetch single query
 *     consumes:
 *        - application/json
 *     parameters:
 *       - name: Authorization
 *         in: header
 *         required: true
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *             description: Query successfully fetched.
 *       401:
 *             description: unauthorized
 * */
//get one enquiry
router.get("/enquiries/:id",verifyToken.checkAdmin, enquiriescontrollers.findOneEnquiry)

/**
 * @swagger
 * /enquiries/{id}:
 *   delete:
 *     tags:
 *       - enquiries
 *     name: enquiries
 *     summary: fetch single query
 *     consumes:
 *        - application/json
 *     parameters:
 *       - name: Authorization
 *         in: header
 *         required: true
 *       - name: id
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *             description: Query successfully fetched.
 *       401:
 *             description: unauthorized
 * */

//deleting an enquiry
router.delete("/enquiries/:id",verifyToken.checkAdmin, enquiriescontrollers.deleteEnquiry)
/**
* @swagger
* /enquiries/{id}:
*   put:
*     tags:
*       - enquiries
*     name: enquiries
*     summary: Update an enquiry
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
*         name: Name
*         type: string
*       - in: formData
*         name: email
*         type: string
*         required: false
*       - in: formData
*         name: message
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

//updating an enquity
router.put("/enquiries/:id",verifyToken.checkAdmin, enquiryValidation.enquiryvalidationupdate, enquiriescontrollers.updateEnquiry)



export default router