import Router  from "express"
const router = Router()
import {enquiryValidation} from '../../middleware/validators/enquiryvalidation.js';
import {enquiriescontrollers} from "../../controllers/enquiries.js";
import { verifyToken } from '../../middleware/auth.js';

//Get all enquiries
router.get("/enquiries",verifyToken.checkAdmin, enquiriescontrollers.Allenquiries);

//post enquiry
router.post("/enquiries",enquiryValidation.enquiryvalidation, enquiriescontrollers.makeEnquiry);


//updating an enquity
router.put("/enquiries/:id",verifyToken.checkAdmin, enquiryValidation.enquiryvalidation, enquiriescontrollers.updateEnquiry)


export default router