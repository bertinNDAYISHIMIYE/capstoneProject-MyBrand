
import Joi from 'joi';
import {base_response} from '../../helper/joiResponse'

export class blogValidation{
static blogvalidation = async (req, res, next) =>{
    const schema = Joi.object({
      title: Joi.string().min(3).max(1500).required(),
      author: Joi.string().min(3).max(100).required(),
      image: Joi.string(),
      content: Joi.string().min(2).required()
    });
    base_response(req, res, schema, next);
  
   }
  }
