class Todos {

  add(toDoItem) {
    const listOfTodos = []
    listOfTodos.push(toDoItem)
    return `Todo Added. Todo remaining: ${listOfTodos}`
  }
}
