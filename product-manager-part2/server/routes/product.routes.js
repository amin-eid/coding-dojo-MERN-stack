const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.get('/api', ProductController.index);
    app.post('/api/people/', ProductController.createProduct);
    app.get('/api/people/', ProductController.getAllProducts);
    app.get('/api/people/:id', ProductController.getProduct);
}
