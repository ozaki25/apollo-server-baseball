const initPlayers = require('../../data/players');
const teamService = require('./TeamService');

class PlayerService {
  constructor() {
    this.players = initPlayers;
  }

  findAll() {
    return this.players.map(player => ({
      ...player,
      team: teamService.findAll(player.team),
    }));
  }

  findByTeam(teamId) {
    return this.players.filter(player => player.team === teamId);
  }

  addPlayer(player) {
    const team = teamService.findById(player.id);
    const newPlayer = { ...player, team };
    this.players = [...this.players, newPlayer];
    return newPlayer;
  }
}

module.exports = new PlayerService();
