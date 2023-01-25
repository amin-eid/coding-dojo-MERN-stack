const TeamController = require('../controllers/team.controller');
module.exports = function(app){
    app.get('/api/getAllTeams', TeamController.getAllTeams);
    app.post('/api/createNewTeam', TeamController.createTeam);
   app.get('/api/teams/:id', TeamController.getTeam);
  app.put('/api/teams/:id', TeamController.updateTeam);
    app.delete('/api/teams/:id', TeamController.deleteTeam);
}
