var express = require('express');
var router = express.Router();
// const user=require("../../src/mongodb");

/* GET home page. */

let pass = encodeURIComponent("Ashish@1234");
mongoose.connect('mongodb+srv://srijanjain2004:'+pass+'@cluster0.hie0aev.mongodb.net/CodeTracker')
.then(() => {
    console.log("mongodb connected");
})
.catch((e) => {
    console.log(e)
})
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
