const AuthorController = require('../controllers/author.controller');
module.exports = function(app){
    app.get('/api/getAllAuthors', AuthorController.getAllAuthors);
    app.post('/api/createNewAuthor', AuthorController.createAuthor);
   app.get('/api/authors/:id', AuthorController.getAuthor);
  app.put('/api/authors/:id', AuthorController.updateAuthor);
    app.delete('/api/authors/:id', AuthorController.deleteAuthor);
}
