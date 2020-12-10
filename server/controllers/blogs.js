import Blog  from '../models/blogs.js';
import {Response} from "../helper/response.js";
import { uploadToCloud } from '../config/cloud.js';


export class blogController{




static createBlog = async (req, res) => {
    try {
        if (!req.file) return Response.error(res, 400, "Blog image is required");
        const image = await uploadToCloud(req.file, res);
        const blog = await Blog.create({
          title: req.body.title,
          author:req.body.author,
          image: image.url,
          content: req.body.content,
         
        });

        Response.success(res, 201, "you created a blog successfully", blog);

      } catch (error) {
        Response.error(res, 500, "blog not created");
      }
    
    
}
    

static getBlogById = async (req, res) => {
  try {
      const _id = req.params.id;
      
      const blog = await  Blog.findOne({ _id: req.params.id });
     if (!blog){
       return res.status(404).json({
         status: 404,
         message: "blog not found"
       })
     }else{
  return    res.json({
    status: 200,
    data: blog
  }).status(200);
      }
  } catch (error) {
      res.json({
        status: 500,
        message: "server error"
      }).status(500);
  }
  
}
};
