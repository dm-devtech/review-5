describe("Todos", function() {
  var todoList;

  beforeEach(function() {
    todoList = new Todos();
  });

  describe("Add to-do function", function() {
    it("adding a todo returns confirmation message and the todo", function() {
      expect(todoList.add("wash the car")).toEqual("Todo Added. Todos remaining: wash the car");
    });

    it("adds multiple todos and returns them", function() {
      todoList.add("wash the dishes")
      expect(todoList.add("clean the car")).toEqual("Todo Added. Todos remaining: wash the dishes, clean the car")
    })
  })

  describe("Remove to-do function", function() {
    it("delete a to do", function() {
      todoList.add("wash the dishes")
      expect(todoList.done(1)).toEqual("You dont have any todos!")
    })

    it("add multiple todos and delete one of them, returns remaining todo", function() {
      todoList.add("wash the dishes")
      todoList.add("clean the car")
      expect(todoList.done(1)).toEqual("Todos remaining: clean the car")
    })
  })

  describe("edge cases", function() {
    it("throws error when the wrong format is given", function() {
      expect(function() {todoList.add(1)}).toThrowError("To do must be in the form of a string")
    })
  })

});
