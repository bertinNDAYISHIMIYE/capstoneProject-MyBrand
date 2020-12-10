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
    
static deleteBlog = async(req,res) => {
  let {id} = req.params;
  try {
      const existBlog = await Blog.find({_id: id})
      
      if (existBlog.length) {
          const deleteBlog = await Blog.deleteOne({_id: id});
          res.send({'Deleted Blog': existBlog}).status(200);
      } else {
          res.json('Blog not found').status(404);
      }
  } catch (error) {
      res.json({
        status: 500,
        message: "server error"
      }).status(500);
  } 
}
};
