const express = require("express");
const app = express();
const multer = require("multer");

const dbConnect = require("./db/db-connect.js");
const user = require("./routes/user");
const apiauth = require("./middlewares/apiauth");
const categories = require("./routes/categories");
const cors = require("cors");
const path = require("path");

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

//uploading image
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    // cb(null, req.body.name + ".jpg"); //"file.jpeg for postMan testing as req.body and image togather cannot be sent"
    cb(null, req.body.name); //"file.jpeg for postMan testing as req.body and image togather cannot be sent"
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json({
    message: "file has been uploaded",
  });
});

const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("welcome to backend of Categories-crud");
});
app.use("/api/user", user);
app.use("/api/categories", apiauth, require("./routes/categories"));

const server = async () => {
  try {
    await dbConnect(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
server();
