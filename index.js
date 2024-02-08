// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Sample data (replace this with your database implementation)
let blogs = [];

// Routes
// Get all blogs
app.get('/api/blogs', (req, res) => {
  res.json(blogs);
});

// Get single blog
app.get('/api/blogs/:id', (req, res) => {
  const id = req.params.id;
  const blog = blogs.find((blog) => blog.id === id);
  if (blog) {
    res.json(blog);
  } else {
    res.status(404).json({ message: 'Blog not found' });
  }
});

// Create a new blog
app.post('/api/blogs', (req, res) => {
  const newBlog = req.body;
  newBlog.id = Date.now().toString(); // Generate a unique ID (replace with UUID or database-generated ID)
  blogs.push(newBlog);
  res.status(201).json(newBlog);
});

// Update an existing blog
app.put('/api/blogs/:id', (req, res) => {
  const id = req.params.id;
  const updatedBlog = req.body;
  const index = blogs.findIndex((blog) => blog.id === id);
  if (index !== -1) {
    blogs[index] = { ...blogs[index], ...updatedBlog };
    res.json(blogs[index]);
  } else {
    res.status(404).json({ message: 'Blog not found' });
  }
});

// Delete a blog
app.delete('/api/blogs/:id', (req, res) => {
  const id = req.params.id;
  const index = blogs.findIndex((blog) => blog.id === id);
  if (index !== -1) {
    blogs.splice(index, 1);
    res.status(204).end();
  } else {
    res.status(404).json({ message: 'Blog not found' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
