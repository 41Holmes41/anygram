const Message= require('../models/message');
const Post= require('../models/post');

module.exports = {
  newMessage,
  getMessages,
  newPost,
  getPosts
};

async function newPost(req, res){
  const post = new Post(req.body);

  try {
    await post.save();
    res.status(200).json({ok: true})
  } catch (err) {
    console.log("error in messages controller: newPost", err)
  }
}
async function newMessage(req, res){
  console.log("new message!!!", req.body)
  const message = new Message(req.body);

  try {
    await message.save();
    let post = await Post.findById(req.body.post._id)
    post.messages.push(message)
    await post.save()
    res.status(200).json({ok: true})
  } catch (err) {
    console.log("error in messages controller: newMessage", err)
  }
}
async function getMessages(req, res){
  try {
    let post = await Post.findById(req.params.id).populate('messages').exec()
      res.json(post)
      
    

  } catch (err) {
    console.log("error in messages controller: newMessage", err)
  }
}
async function getPosts(req, res){
  
  try {
    const posts = await Post.find({topic: req.params.id})
    console.log("posts", posts)
    res.json(posts)
  } catch (err) {
    console.log("error in messages controller: getPosts", err)
  }
}
