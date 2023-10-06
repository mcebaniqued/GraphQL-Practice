let games = [
    { id: 1, title: 'Fortnite', platform: ['PC', 'Xbox', 'PS4'] },
    { id: 2, title: 'Overwatch', platform: ['PC', 'Xbox', 'PS4'] },
    { id: 3, title: 'League of Legends', platform: ['PC'] },
    { id: 4, title: 'Dota 2', platform: ['PC'] },
    { id: 5, title: 'Counter-Strike: Global Offensive', platform: ['PC'] },
    { id: 6, title: 'Marvel\'s Spider-Man', platform: ['PS4'] },
    { id: 7, title: 'Minecraft', platform: ['PC', 'Xbox', 'PS4'] },
    { id: 8, title: 'Zelda, Tears of the Kingdom', platform: ['Switch'] },
]

let authors = [
    { id: 1, name: 'John Doe', verified: true },
    { id: 2, name: 'Jane Doe', verified: false },
    { id: 3, name: 'John Smith', verified: true },
    { id: 4, name: 'Jane Smith', verified: false },
]

let reviews = [
    { id: 1, rating: 5, content: 'This game is awesome!', gameId: 1, authorId: 1 },
    { id: 2, rating: 4, content: 'This game is pretty good!', gameId: 2, authorId: 2 },
    { id: 3, rating: 3, content: 'This game is okay!', gameId: 3, authorId: 3 },
    { id: 4, rating: 2, content: 'This game is not good!', gameId: 4, authorId: 4 },
    { id: 5, rating: 1, content: 'This game is terrible!', gameId: 5, authorId: 1 },
    { id: 6, rating: 5, content: 'This game is awesome!', gameId: 6, authorId: 2 },
    { id: 7, rating: 4, content: 'This game is pretty good!', gameId: 7, authorId: 3 },
    { id: 8, rating: 3, content: 'This game is okay!', gameId: 8, authorId: 4 },
    { id: 9, rating: 2, content: 'This game is not good!', gameId: 1, authorId: 1 },
    { id: 10, rating: 1, content: 'This game is terrible!', gameId: 2, authorId: 2 },
    { id: 11, rating: 5, content: 'This game is awesome!', gameId: 3, authorId: 3 },
    { id: 12, rating: 4, content: 'This game is pretty good!', gameId: 4, authorId: 4 },
]

export default  {games, authors, reviews }