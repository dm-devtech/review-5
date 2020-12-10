describe("Todos", function() {
  var todoList;

  beforeEach(function() {
    todoList = new Todos();
  });

  it("adding a todo returns confirmation message and the todo", function() {
    expect(todoList.add("wash the car")).toEqual("Todo Added. Todo remaining: wash the car");
  });
});
