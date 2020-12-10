describe("Todos", function() {
  var todoList;

  beforeEach(function() {
    todoList = new Todos();
  });

  it("adding a todo", function() {
    expect(todoList.add("wash the car")).toEqual("wash the car");
  });
});
