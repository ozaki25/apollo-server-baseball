const initTeams = require('../../data/teams');
const playerService = require('./PlayerService');

class TeamService {
  constructor() {
    this.teams = initTeams;
  }

  findAll() {
    return this.teams.map(team => ({
      ...team,
      players: playerService.findByTeam(team.id),
    }));
  }

  findById(id) {
    return this.teams.find(team => team.id) || null;
  }

  addTeam(team) {
    this.teams = [...this.teams, team];
    return team;
  }
}

module.exports = new TeamService();
