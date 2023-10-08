import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'

// db
import db from './_db.js'

// types
import { typeDefs } from './schema.js';

// resolvers
const resolvers = {
    Query: {
        // The following are examples of how to query for all objects of a specific type
        games() {
            return db.games;
        },
        authors() {
            return db.authors;
        },
        reviews() {
            return db.reviews;
        },

        // The following are examples of how to query for a specific object
        game(_, args) { // _ is the parent object, args is the arguments passed in. NOTE: _ means that the parent object is not used
            return db.games.find((game) => game.id === args.id);
        },
        author(_, args) {
            return db.authors.find((author) => author.id === args.id);
        },
        review(_, args) {
            return db.reviews.find((review) => review.id === args.id);
        }
    },

    // The following are examples of how to query for a specific object's children
    Game: {
        reviews(parent) {
            return db.reviews.filter((review) => review.gameId === parent.id);
        }
    },
    Author: {
        reviews(parent) {
            return db.reviews.filter((review) => review.authorId === parent.id);
        }
    },
    Reviews: {
        game(parent) {
            return db.games.find((game) => game.id === parent.gameId);
        },
        author(parent) {
            return db.authors.find((author) => author.id === parent.authorId);
        }
    }
}

// Server setup
const server = new ApolloServer({
    typeDefs,
    resolvers
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
});

console.log(`Server ready at ${url}`);