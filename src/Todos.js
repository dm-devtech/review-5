class Todos {

  constructor() {
    this.list = []
  }

  add(toDoItem) {
    this.list.push(toDoItem)
    let allTodos = this.list.join(", ")
    return `Todo Added. Todos remaining: ${allTodos}`
    }

  done(toDoItem) {
    let element = toDoItem - 1
    this.list.splice(element, 1)
    let allTodos = this.list.join(", ")
      if(this.list.length === 0) {
        return "You dont have any todos!"
      } else {
        return `Todos remaining: ${allTodos}`
      }
    }

  }
