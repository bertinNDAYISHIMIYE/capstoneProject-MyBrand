
import Joi from 'joi';
import {base_response} from '../../helper/joiResponse.js'

export class blogValidation{
static blogvalidation = async (req, res, next) =>{
    const schema = Joi.object({
      title: Joi.string().min(3).max(30).required(),
      author: Joi.string().min(3).max(30).required(),
      image: Joi.string(),
      content: Joi.string().min(2).max(300).required()
    });
    base_response(req, res, schema, next);
  
   }
  }