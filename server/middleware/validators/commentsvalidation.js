import Joi from 'joi';
import {base_response} from '../../helper/joiResponse.js'

export class commentValidation{
static commentvalidation = async (req, res, next) =>{
    const schema = Joi.object({
      Name: Joi.string().min(3).max(30).required(),
      Email: Joi.string().email().required(),
      comment: Joi.string().min(2).max(300).required(),
    });
    base_response(req, res, schema, next);
  
   }
  }