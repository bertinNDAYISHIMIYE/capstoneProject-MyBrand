import mongoose from 'mongoose';

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        // _id: mongoose.Schema.Types.ObjectId,
        name: String
    },
    content: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: new Date(),
    },
    image: {
          type: String,
          required: true,
    },
    comments: [
        {
            Name: { type: String, required: true },
            Email: { type: String, required: true },
            comment: { type: String, required: true },
            Time: { type: Date, default: Date.now },
        }
    ]
})

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;