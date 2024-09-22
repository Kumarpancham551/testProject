const {allPost,postById,createpost,updatepost,deletePost} = require("../controllers/post")

module.exports = (app=>{
    app.get("/posts",allPost);
    app.get("/posts/:id",postById);
    app.post("/posts",createpost);
    app.put('/posts/:id',updatepost)
    app.delete('/posts/:id',deletePost)
})
// branching