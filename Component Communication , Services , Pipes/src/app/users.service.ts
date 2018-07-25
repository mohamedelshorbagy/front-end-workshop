export class UsersService {
    users: { name: string, message: string }[] = [
        {
            name: 'Mohamed',
            message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquam?'
        }
    ]

    getUsers() {
        return this.users;
    }

    addUser(user: { name: string, message: string }) {
        this.users.push(user)
    }

}