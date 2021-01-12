class Todos {

  constructor() {
    this.list = []
  }

  joinList() {
    let allTodos = this.list.join(", ")
    return allTodos
  }

  deleteTodo(index) {
    this.list.splice(index-1, 1)
  }

  add(toDoItem) {
    if(typeof (toDoItem) != "string") throw new Error('To do must be in the form of a string')
    this.list.push(toDoItem)
    return `Todo Added. Todos remaining: ${this.joinList()}`
    }

  deletionMessage() {
    if(this.list.length === 0) {
      return "You dont have any todos!"
    } else {
      return `Todos remaining: ${this.joinList()}`
    }
  }

  done(toDoItem) {
    this.deleteTodo(toDoItem)
    return this.deletionMessage()
  }

}
