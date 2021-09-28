const express = require("express");
require("./db");
const { body, validationResult } = require("express-validator");

const Task = require("./model/taskSchema");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/tasks", async (req, res) => {
    try {
        const tasks = await Task.find({}).exec();

        res.send(tasks);
    } catch (err) {
        console.log(err);
    }
});

app.post("/task", body("description").isLength({ min: 5 }), (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { description } = req.body;
        const task = new Task({ description });

        task.save();
        res.send(task);
    } catch (err) {
        console.log(err);
    }
});

app.listen(5000, console.log("App is running on port 5000"))
