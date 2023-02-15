let todoList = [
    { id: 1, name: 'react js', status: false },
    { id: 2, name: 'angular js', status: true },
    { id: 3, name: 'html', status: false },
]

let requestUser = +prompt('you can do this: \n 1) add todo\n 2) remove todo \n 3) change detail todo')


if (requestUser == 1) {

    let nameTodo = prompt('enter your todo"s name to add it')
    let newTodo = {
        id: todoList.length + 1,
        nameTodo,
        status: false
    }

    todoList.push(newTodo)
    console.log(todoList);


} else if (requestUser == 2) {

    let nameTodo = prompt('enter your todo"s name to remove it ')
    todoList.pop(nameTodo)
    console.log(todoList);

} else if (requestUser == 3) {

    let nameTodo = prompt('enter your todo"s name to change it')
    let detailTodo;

    todoList.forEach(todo => {
        if (todo.name == nameTodo) {
            detailTodo = todo
            detailTodo.status = !detailTodo.status
        }
    })

    console.log(todoList);
}


