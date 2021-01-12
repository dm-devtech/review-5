describe("Todos", function() {
  var todoList;

  beforeEach(function() {
    todoList = new Todos();
  });

  it("adding a todo returns confirmation message and the todo", function() {
    expect(todoList.add("wash the car")).toEqual("Todo Added. Todos remaining: wash the car");
  });

  it("adds multiple todos and returns them", function() {
    todoList.add("wash the dishes")
    expect(todoList.add("clean the car")).toEqual("Todo Added. Todos remaining: wash the dishes, clean the car")
  })
});
