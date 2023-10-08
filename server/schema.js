export const typeDefs = `#graphql
    type Game {
        id:         ID!             # ID is a special type for unique identifiers. It is a string. "!" denotes a required field (non-nullable).
        title:      String!
        platform:   [String!]!      # "[]" denotes an array of the type
        reviews:    [Reviews!]      # The array can be nullable, but not Reviews (ie, games can have no reviews)
    }
    type Reviews {
        id:         ID!
        rating:     Int!
        content:    String!
        game:       Game!           # This connects the review to the game using gameId in _db.
        author:     Author!         # This connects the review to the author using authorId in _db.
    }
    type Author {
        id:         ID!
        name:       String!
        verified:   Boolean!
        reviews:    [Reviews!]      # The array can be nullable, but not Reviews (ie, authors can have no reviews)
    }
    type Query {                    # "Query" is a special type for queries. It is required.
        reviews:            [Reviews]
        review(id: ID!):    Reviews
        games:              [Game]
        game(id: ID!):      Game
        authors:            [Author]
        author(id: ID!):    Author
    }
`