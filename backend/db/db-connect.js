const mongoose = require("mongoose");
const dbConnect = (link) => {
  return mongoose.connect(
    "mongodb+srv://rafay:rafay123@cluster0.gzdjhyj.mongodb.net/?retryWrites=true&w=majority"
  );
};
module.exports = dbConnect;
