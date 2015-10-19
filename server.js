var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    restful = require('node-restful'),
    mongoose = restful.mongoose,
    app = express();

app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/json'}));
app.use(methodOverride());

mongoose.connect('mongodb://127.0.0.1/restful');

var ProductSchema = mongoose.Schema({
        'name': String,
        'sku': String,
        'price': Number
    }),
    Products = restful.model('products', ProductSchema);

Products.methods(['get', 'put', 'post', 'delete']);
Products.register(app, '/api/products');

app.listen(3000);
console.log('Server is running on port 3000');
