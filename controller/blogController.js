//const Blog = require('../models/Blog');

import Blog from '../models/blogModel.js'
// Get all blogs
// exports.getAllBlogs = async (req, res, next) => {
//   try {
//     const blogs = await Blog.find();
//     res.json(blogs);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // Get a specific blog by ID
// exports.getBlogById = async (req, res, next) => {
//   try {
//     const blog = await Blog.findById(req.params.id);
//     if (!blog) {
//       return res.status(404).json({ message: 'Blog not found' });
//     }
//     res.json(blog);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// Create a new blog
export const createBlog = async (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    content: req.body.content
  });
  try {
    const newBlog = await blog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update an existing blog
// exports.updateBlog = async (req, res, next) => {
//   try {
//     const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedBlog) {
//       return res.status(404).json({ message: 'Blog not found' });
//     }
//     res.json(updatedBlog);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// // Delete a blog by ID
// exports.deleteBlog = async (req, res, next) => {
//   try {
//     const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
//     if (!deletedBlog) {
//       return res.status(404).json({ message: 'Blog not found' });
//     }
//     res.json({ message: 'Blog deleted' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };
