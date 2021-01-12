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
    this.list.push(toDoItem)
    return `Todo Added. Todos remaining: ${this.joinList()}`
    }

  done(toDoItem) {
    this.deleteTodo(toDoItem)
      if(this.list.length === 0) {
        return "You dont have any todos!"
      } else {
        return `Todos remaining: ${this.joinList()}`
      }
    }

  }
