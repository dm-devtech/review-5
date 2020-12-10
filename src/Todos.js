class Todos {

  constructor() {
    this.list = []
  }

  add(toDoItem) {
    this.list.push(toDoItem)
    let allTodos = this.list.join()
    return `Todo Added. Todos remaining: ${allTodos}`
    }
  }
