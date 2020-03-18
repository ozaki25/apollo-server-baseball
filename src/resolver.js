const teamService = require('./service/TeamService');
const playerService = require('./service/PlayerService');

const resolver = {
  Query: {
    teams: () => {
      const teams = teamService.findAll();
      return teams.map(team => ({
        ...team,
        players: playerService.findByTeamId(team.id),
      }));
    },
    players: () => {
      const players = playerService.findAll();
      return players.map(player => ({
        ...player,
        team: teamService.findById(player.teamId),
      }));
    },
  },
  Mutation: {
    addTeam: (_, team) => {
      return teamService.add(team);
    },
    addPlayer: (_, player) => {
      return playerService.add(player);
    },
  },
};

module.exports = resolver;
