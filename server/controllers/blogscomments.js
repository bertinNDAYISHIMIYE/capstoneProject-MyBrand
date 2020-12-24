import { Response } from "../helper/response";
import Blog from '../models/blogs';


export class blogcomments {
  static addComment = async (req, res) => {
    const blogId = req.params.id;
    if (!blogId) return res.error(res, 400, "Blog Id required");
    const blog = await Blog.findById(blogId);
    if (!blog) return res.send("Blog Not Fetched").status(404);
    try {
      const id = blog.id;

      const comment =
      {
        Name: req.body.Name,
        Email: req.body.Email,
        comment: req.body.comment
      }

      await Blog.findByIdAndUpdate(
        id,
        { $addToSet: { "comments": comment } },
        { safe: true, upsert: true, new: true },
        function (err, model) {
          if (err) {
            return Response.success(res, 400, "Something Went Wrong")
          } else {
            return Response.success(res, 201, "comments submitted", comment)
          }
        }
      );
    } catch (err) {
      console.log(err)
      return res.status(500).json(err, "error occured");
    }
  }




};


