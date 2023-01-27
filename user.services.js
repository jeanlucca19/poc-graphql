export class UserServices {
    users

    constructor(users) {
        this.users = users
    }
    
    createUser(name, email) {
        
        const id = this.users.length + 1
        this.users.push({id, name, email})
        return this.users[this.users.length-1]
    }

    findUserById(id) {
        return this.users.find(user => user.id == id)
    }

}