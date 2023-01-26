const users = [
    {id: 1, name: "Jean Lucca", email: "jean@email.com"},
    {id: 2, name: "Jaqueline", email: "jaque@email.com"}
]

export const resolver = {
    Query: {
        hello: () => 'Hello Hello Hello',
        users: () => users,
        user: (_, { id }) => findUserById(id)
    },
    Mutation: {
        createUser: (_, { name, email }) => createUser(name, email)
    }
}

function createUser(name, email) {
    const id = users.length + 1
    users.push({id, name, email})
    console.log(users)
    return users
}

function findUserById(id) {
    return users.find(user => user.id == id)
}