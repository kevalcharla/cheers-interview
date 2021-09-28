const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/task_database")
    .then(() => console.log("mongodb successfully connected"))
    .catch((err) => console.log(err))
