
import { UserServices } from './user.services.js'
import { users } from './users.repository.js'

const userServices = new UserServices(users)

export const resolver = {
    Query: {
        hello: () => 'Hello Hello Hello',
        users: () => users,
        user: (_, { id }) => userServices.findUserById(id)
    },
    Mutation: {
        createUser: (_, { name, email }) => userServices.createUser(name, email)
    }
}