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
    
static getBlogs = async (req, res)=>{
  try {
      const blogs = await Blog.find();
      
      if(blogs.length === 0){
          return res.send('No blogs in the database').status(400) 
      }
      else {
          return res.send({
              status: 200,
              message: 'Get request',
              blogs
          }).status(200)     
      }
  }
  catch (error) {
      res.send(error).status(500);
  }
}


};
