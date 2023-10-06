export const typeDefs = `#graphql
    type Game {
        id:         ID!             # "!" denotes a required field (non-nullable)
        title:      String!
        platform:   [String!]!      # "[]" denotes an array of the type
    }
    type Reviews {
        id:         ID!
        rating:     Int!
        content:    String!
    }
    type Author {
        id:         ID!
        name:       String!
        verified:   Boolean!
    }
    type Query {                    # "Query" is a special type for queries. It is required.
        reviews:     [Reviews]
        games:      [Game]
        authors:    [Author]
    }
`