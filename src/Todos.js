class Todos {

  constructor() {
    this.list = []
  }

  joinList() {
    let allTodos = this.list.join(", ")
    return allTodos
  }

  add(toDoItem) {
    this.list.push(toDoItem)
    return `Todo Added. Todos remaining: ${this.joinList()}`
    }

  done(toDoItem) {
    let element = toDoItem - 1
    this.list.splice(element, 1)
      if(this.list.length === 0) {
        return "You dont have any todos!"
      } else {
        return `Todos remaining: ${this.joinList()}`
      }
    }

  }
