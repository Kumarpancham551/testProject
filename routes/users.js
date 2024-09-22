const {test,addUser,getUsers,getUsersByEmail} = require("../controllers/users")

module.exports = (app=>{
    app.get("/",test);
    app.post("/addUser",addUser);
    app.get("/users",getUsers);
    app.get('/users/email/:email',getUsersByEmail)
})