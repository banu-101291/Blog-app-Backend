const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/blogDB', {
  
});

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Post = mongoose.model('Post', postSchema);

app.post('/api/posts', async (req, res) => {
  const { title, content } = req.body;
  const post = new Post({ title, content });
  try {
    await post.save();
    res.status(201).send('Post saved successfully!');
  } catch (error) {
    console.error('Error saving post:', error);
    res.status(500).send('Error saving post');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
