var mongoose = require("mongoose");
var mongoDB_URI = "mongodb://localhost:27017/webt04";

mongoose.connect(mongoDB_URI, { useNewUrlParser: true });
var db = mongoose.connection;

db.on("connected", () => {
    console.log("MongoDB connected");
});
db.on("disconnected", () => {
    console.log("MongoDB disconnected");
});
db.on("error", (error) => {
    console.log(error);
});
