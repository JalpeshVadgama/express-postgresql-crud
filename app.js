const express = require("express");
const userRoutes = require("./routes/user.route"); 
const categoryRoues = require("./routes/category.route");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app._router.use("/api/users", userRoutes);
app._router.use("/api/categories", categoryRoues);
app.get("/", (req, res) => {
    res.status(200).send("Node and express");
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});