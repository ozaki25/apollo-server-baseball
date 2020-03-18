const teamService = require('./service/TeamService');
const playerService = require('./service/PlayerService');

const resolver = {
  Query: {
    teams: () => teamService.findAll(),
    players: () => playerService.findAll(),
  },
  Mutation: {
    addTeam: (_, team) => teamService.addTeam(team),
    addPlayer: (_, player) => playerService.addPlayer(player),
  },
};

module.exports = resolver;
