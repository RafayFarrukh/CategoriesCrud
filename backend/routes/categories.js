var express = require("express");
var router = express.Router();
var Categories = require("../models/Categories");
// const multer = require("multer");
// const storage = multer.diskStorage({
//   destination: (req, file, callBack) => {
//     callBack(null, "images");
//   },
//   filename: (req, file, callBack) => {
//     callBack(null, `${Date.now() + file.originalname.split(" ").join("-")}`);
//   },
// });
// let upload = multer({ storage });
router.get("/:id", async function (req, res, next) {
  let categories = await Categories.findById(req.params.id);
  return res.send(categories);
});
router.get("/", async function (req, res, next) {
  let categories = await Categories.find();

  return res.send(categories);
});
// router.post("/", upload.single("image"), async function (req, res, next) {
//   let product = new Categories(req.body);
//   if (req.file) product.image = req.file;
//   await product.save();
//   res.send(product);
// });
router.post("/", async function (req, res, next) {
  const newPost = new Categories(req.body);
  newPost.save((err, createdPost) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      post: createdPost,
    });
  });
});

router.put("/:id", async function (req, res, next) {
  let categories = await Categories.findById(req.params.id);
  categories.name = req.body.name;
  categories.description = req.body.description;
  await categories.save();
  return res.send(categories);
});
router.delete("/:id", async function (req, res, next) {
  try {
    let categories = await Categories.findById(req.params.id);
    await categories.delete();
    return res.send("deleted");
  } catch (err) {
    return res.status(400).send("Invalid Id");
  }
});
module.exports = router;
