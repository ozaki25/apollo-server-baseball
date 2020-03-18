const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    teams: [Team]
    players: [Player]
  }

  type Mutation {
    addTeam(
      name: String
      englishName: String
      foundingDate: String
      homeStadium: String
    ): Team

    addPlayer(name: String!, no: String, position: String, teamId: Int): Player
  }

  type Team {
    name: String!
    englishName: String
    foundingDate: String
    homeStadium: String
    players: [Player]
  }

  type Player {
    name: String!
    no: String
    position: String
    team: Team
  }
`;

module.exports = typeDefs;
