const {test,addUser,getUsers,getUsersByEmail} = require("../controllers/users")

module.exports = (app=>{
    app.get("/",test);
    app.post("/test/addUser",addUser);
    app.get("/test/users",getUsers);
    app.get('/test/users/email/:email',getUsersByEmail)
})