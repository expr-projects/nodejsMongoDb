var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Product = require('../models/dbmodel').Product;
var fs=require('fs');

router.get('/', function(request, response) {
Product.find().exec(function(req ,products,next2){
  response.render('product',{products:products});
});

});

router.post('/', function(request, response) {
  var imgPath = './public/images/1.jpg';


  var productSchema = new Product();
      productSchema.category= 'something';
      productSchema.product= 'something';
      productSchema.model = 'something';
      productSchema.brand = 'something';
      productSchema.size =  'something';
      productSchema.price = 'something';
      productSchema.description = 'something';
      productSchema.color = 'something';
      productSchema.image.data = fs.readFileSync(imgPath).toString('base64');;
      productSchema.image.contentType = 'jpg';

          productSchema.save(function (err) {

          if (err){
            //logger.error(message + '400 | Database insertion failed');
            return next(err);
          }
          else {
            response.setHeader('Content-Type', 'application/json');

            response.send(JSON.stringify("Succefully updated"));
          }
        });

});

router.get('/:id' ,function(req, res, next) {
  // get an image that its id be equals the value sent by url parameter
  Product.findById(req.params.id).exec(function(err, image) {
    // check for errors
    if(err) {
      // adds the http status code to the err object
      err.status = 422;

      // go to the error handler middleware
      return next(err);
    }

    // if no errors, go to the image page
    res.render('image', {image:image});
  });
});


module.exports = router;
