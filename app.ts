// КТ 1

class User {
    public static count: number = 0;

    name: string
    login: string
    password: string
    grade: number
    constructor(name: string, login:string, password: string, grade: number) {
        this.name = name
        this.login = login
        this.password = password
        this.grade = grade
        User.count++
    }

    getLogin(): string {
        return this.login;
    }

    setPassword(value: string) {
        this.password = value;
    }

    show_info(): void {
        console.log(`Name: ${this.name}, Login: ${this.login}`);
    }

    eq(user: User): boolean {
        return this.grade === user.grade;
    }

    lt(user: User): boolean {
        return this.grade < user.grade;
    }

    gt(user: User): boolean {
        return this.grade > user.grade;
    }
}

class SuperUser {
    private role: string;
    public static count: number = 0;

    name: string
    login: string
    password: string
    grade: number
    constructor(name: string, login: string, password: string, role: string, grade: number) {
        this.name = name
        this.login = login
        this.password = password
        this.role = role;
        this.grade = grade;
        SuperUser.count++;
    }

    getRole(): string {
        return this.role;
    }

    setRole(value: string) {
        this.role = value;
    }

    show_info(): void {
        console.log(`Name: ${this.name}, Login: ${this.login}, Role: ${this.role}`);
    }
}

const user1 = new User("Paul McCartney", "paul", "1234", 3)
const user2 = new User("George Harrison", "george", "5678", 2)
const user3 = new User("Richard Starkey", "ringo", "8523", 3)
const admin = new SuperUser('John Lennon', 'john', '0000', 'admin', 5)

user1.show_info()
admin.show_info()

let users = User.count
let admins = SuperUser.count

//console.log(`Всего обычных пользователей: ${users}`)
//console.log(`Всего супер-пользователей: ${admins}`)

//console.log( user1.lt(user2) )
// console.log( admin.gt(user3) )
//console.log( user1.eq(user3) )

user3.name = 'Ringo Star'
user1.password = 'Pa$$w0rd'

console.log(user3.name)
console.log(user2.password)
console.log(user2.login)

user2.login = 'geo'

console.log(user3.grade)
admin.grade = 10

