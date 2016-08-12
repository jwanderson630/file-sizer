var express = require('express');
var app = express();
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
app.get('/', function(req, res) {
  res.sendfile(__dirname + "/index.html");
});
app.post('/size-file', upload.single('newFile'), function(req,res,next){
  res.send("The file is " + req.file.size + " bytes");
});
app.listen(8080, function () {
  console.log('File-Sizer app listening on port 8080');
});