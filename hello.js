const mongo = require("mongodb");
const url = "mongodb://localhost:27017/test";
mongo.connect(url,  process.env.RESTREVIEWS_DB_URI,
    {
        maxPoolSize: 50, 
        wtimeoutMS: 2500,
        useNewUrlParser: true
    }, (err, db) => {
if (err) {
console.log(err);
process.exit(0);
}
console.log("database connected!");
db.close();
});
