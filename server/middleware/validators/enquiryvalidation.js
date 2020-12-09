import Joi from 'joi';
import {base_response} from '../../helper/joiResponse.js'

export class enquiryValidation{
static enquiryvalidation = async (req, res, next) =>{
    const schema = Joi.object({
      name: Joi.string().min(3).max(30).required(),
      email: Joi.string().email().required(),
      message: Joi.string().min(2).max(300).required(),
    });
    base_response(req, res, schema, next);
  
   }
  }