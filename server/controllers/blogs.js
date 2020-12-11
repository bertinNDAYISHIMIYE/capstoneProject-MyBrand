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
    

static updateBlog = async(req,res,next) => {
    
  const image= await uploadToCloud(req.file,res);

 try{
     const id = req.params.id;
     const blog = await Blog.findByIdAndUpdate({_id: id}, {
         title: req.body.title,
         author: req.body.author,
         image: image.url,
         content: req.body.content
     },  { new: true});
     const updateBlog = await Blog.findOne({_id: id});
     if(updateBlog){
   return  res.status(200).json({
         status: 200,
         message:"updated blog",
         data: updateBlog
     });
 } 
 else {
   return  res.status(404).json({
         status: 404,
         message: "blog not found"
     })
 }
  }
 catch(error){
     res.end();
  return   res.status(404).send({message: 'Blog not found'})
  
 }

 
}

};
