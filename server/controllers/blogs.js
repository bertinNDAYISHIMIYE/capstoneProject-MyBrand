import Blog from "../models/blogs";
import { Response } from "../helper/response";
import { uploadToCloud } from "../config/cloud";

export class blogController {
  static createBlog = async (req, res) => {
    try {
      if (!req.file) return Response.error(res, 400, "Blog image is required");
      const image = await uploadToCloud(req.file, res);
      const blog = await Blog.create({
        title: req.body.title,
        author: req.body.author,
        image: image.url,
        content: req.body.content,
      });

     return  Response.success(res, 201, "you created a blog successfully", blog);
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: "server error",
      });
    }
  };

  static updateBlog = async (req, res, next) => {
    try {
      const image = await uploadToCloud(req.file, res);
      const id = req.params.id;
      const blog = await Blog.findByIdAndUpdate(
        { _id: id },
        {
          title: req.body.title,
          author: req.body.author,
          image: image.url,
          content: req.body.content,
        },
        { new: true }
      );
      const updateBlog = await Blog.findOne({ _id: id });
      if (updateBlog) {
        return res.status(200).json({
          status: 200,
          message: "updated blog",
          data: updateBlog,
        });
      } else {
        return res.status(404).json({
          status: 404,
          message: "blog not found",
        });
      }
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: "server error",
      });
    }
  };

  static deleteBlog = async (req, res) => {
    try {
      let { id } = req.params;
      const existBlog = await Blog.find({ _id: id });

      if (existBlog.length) {
        const deleteBlog = await Blog.deleteOne({ _id: id });
        return res.send({ "Deleted Blog": existBlog }).status(200);
      } else {
        return res.json("Blog not found").status(404);
      }
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: "server error",
      });
    }
  };

  static getBlogs = async (req, res) => {
    try {
      const blogs = await Blog.find();

      if (blogs.length === 0) {
        return res.send("No blogs in the database").status(400);
      } else {
        return res
          .send({
            status: 200,
            message: "Get request",
            blogs,
          })
          .status(200);
      }
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: "server error",
      });
    }
  };

  static getBlogById = async (req, res) => {
    try {
      const _id = req.params.id;

      const blog = await Blog.findOne({ _id: req.params.id });
      if (!blog) {
        return res.status(404).json({
          status: 404,
          message: "blog not found",
        });
      } else {
        return res
          .json({
            status: 200,
            data: blog,
          })
          .status(200);
      }
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: "server error",
      });
    }
  };
}
