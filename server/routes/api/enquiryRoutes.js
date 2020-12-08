import Router  from "express"
const router = Router()
import {enquiryValidation} from '../../middleware/validators/enquiryvalidation.js';
import {enquiriescontrollers} from "../../controllers/enquiries.js";

router.post("/enquiries",enquiryValidation.enquiryvalidation, enquiriescontrollers.makeEnquiry);




export default router