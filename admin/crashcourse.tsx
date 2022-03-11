// Basic Types
let id: number = 5 
let company: string = 'Traversy Media' 
let isPublished: boolean = true
let x: any = 'Hello'

let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, true, 'Hello']

// Tuple - array expected in specific format
let person: [number, string, boolean] = [1, 'Brad', true]
// Tuple Array
let employees: [number, string][]
employees = [
  [1, 'Brad'],
  [2, 'John'],
  [3, 'Jill'],
]

// Union - Can be X or Y type
let pid: string | number
pid = '22'

// Enum - For when you want to assign numbers to text. Log as 'Direction1.Up'
enum Direction1 {   // Starts at 0 by default, can specify number and it'll count up from there
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {   // Can also be set to strings
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

// Objects
type User = {   // Sets a custom type
  id: number
  name: string
}
const user: User = {
  id: 1,
  name: 'John',
}

// Type Assertion - forces type
let cid: any = 1
// alternate way = let customerId = <number>cid
let customerId = cid as number

// Functions - also has a return type
function addNum(x: number, y: number): number {
  return x + y
}

// Void Functions - for functions with no return value
function log(message: string | number): void {
  console.log(message)
}

// Interfaces - custom types.
interface UserInterface {
  readonly id: number   // error if you try to assign a new value to that key
  name: string
  age?: number  // putting ? makes the key-pair optional
}

const user1: UserInterface = {
  id: 1,
  name: 'John',
}

interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y


interface PersonInterface {
  id: number
  name: string
  register(): string
}
// Classes
class Person implements PersonInterface {
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register() {
    return `${this.name} is now registered`
  }
}

const brad = new Person(1, 'Brad Traversy')
const mike = new Person(2, 'Mike Jordan')

// Subclasses
class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const emp = new Employee(3, 'Shawn', 'Developer')

// Generics  - wildcard for later by using <T>
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['brad', 'John', 'Jill'])

strArray.push(1) // Throws error