- Info gathering.

command line to do apps
build a to do app

add and complete to-dos

input
command with argument
to add = add("wash the car") = 1
done = done(1)

output
indication to-do has been added
as well as full list of to-dos
done - if all Completed

input = 1 Wash the car 
input to complete = done 1
 output = Completed todo "Wash the car".
Your Todos:
You don't have any todos!

Remaining todos then output =
input =  Wash the car 
input to complete = done 2
Completed todo "Wash the car". Your Todos:
1 Do the dishes

Testing
1 - adding a todo
input = wash the car.  
Output = todo added.  
Remaining Todos = wash the car

2 - add 2 todos
input = wash the car, do the dishes
output = todo added, wash the car, do the dishes

3 - adding a todo, then completing that todo then output = no more Todos
input wash the car
completing the todo
output - no remaining Todos

4 - adding 2 todos, completing one of them then
input = wash the car, do the dishes.
input = complete todo 1
output = todo 1 complete & second remaining todo prints out

5 - same as test 4 except complete all todos.  

Edge cases
- return a message telling them how the input should be supplied.
Program doesn't recognise command

Tools:
Javascript
Jasmine
