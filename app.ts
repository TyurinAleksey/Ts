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



// КТ 2
abstract class Publisher {
  title: string;
  author: string;
  pubYear: number;
  copies: number;

  constructor(title: string, author: string, pubYear: number, copies: number) {
    this.title = title;
    this.author = author;
    this.pubYear = pubYear;
    this.copies = copies;
  }

  getTitle(): string {
    return this.title;
  }

  setTitle(title: string): void {
    this.title = title;
  }

  getAuthor(): string {  
    return this.author;
  }

  setAuthor(author: string): void {
    this.author = author;
  }

  getPubYear(): number {
    return this.pubYear;
  }

  setPubYear(pubYear: number): void {
    this.pubYear = pubYear;
  }

  getCopies(): number {
    return this.copies;
  }

  setCopies(copies: number): void {
    this.copies = copies;
  }
}

class Book extends Publisher {
  pages: number;

  constructor(title: string, author: string, pubYear: number, copies: number, pages: number) {
    super(title, author, pubYear, copies);
    this.pages = pages;
  }
}

class Magazine extends Publisher {
  issue: number;

  constructor(title: string, author: string, pubYear: number, copies: number, issue: number) {
    super(title, author, pubYear, copies);
    this.issue = issue;
  }
}

interface Reception {
  delivery(reader: Reader, publisher: Publisher): void;
  receive(reader: Reader, publisher: Publisher): void;
}

class Reader {
  firstName: string;
  lastName: string;
  items: Publisher[];
  maxItems: number;

  constructor(firstName: string, lastName: string, maxItems: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.items = [];
    this.maxItems = maxItems;
  }

  getFirstName(): string {
    return this.firstName;
  }

  setFirstName(firstName: string): void {
    this.firstName = firstName;
  }

  getLastName(): string {
    return this.lastName;
  }

  setLastName(lastName: string): void {
    this.lastName = lastName;
  }

  getItems(): Publisher[] {
    return this.items;
  }

  setItems(items: Publisher[]): void {
    this.items = items;
  }

  getMaxItems(): number {
    return this.maxItems;
  }

  setMaxItems(maxItems: number): void {
    this.maxItems = maxItems;
  }
}

class Library {
  publishers: Publisher[];

  constructor(publishers: Publisher[]) {
    this.publishers = publishers;
  }

  getPublishers(): Publisher[] {
    return this.publishers;
  }

  setPublishers(publishers: Publisher[]): void {
    this.publishers = publishers;
  }

  addPublisher(publisher: Publisher): void {
    this.publishers.push(publisher);
  }

  removePublisher(publisher: Publisher): void {
    const index = this.publishers.indexOf(publisher);
    if (index > -1) {
      this.publishers.splice(index, 1);
    }
  }
}
