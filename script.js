//getting local storage function
function getTodo() {
    var todos = new Array;
    //the item became a string, so we need to parse it
    var stringedTodos = localStorage.getItem('todo');
    //as long as there are items in local storage
    if (stringedTodos !== null) {
        todos = JSON.parse(stringedTodos); 
    }
    return todos;
}
 
//whenever you are adding, you set the item in local storage
function add() {
    var task = document.getElementById('myInput').value;
    
    //once the local storage is set, you get it
    var todos = getTodo();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
    //clears the input text box after 
    const clearInput = document.getElementById('myInput').value = "";
    return false;
}

function remove() {
    //gets the specific id of element
    var id = this.getAttribute('id');
    //calling function todo to get items
    var todos = getTodo();
    //splice that specific id once
    todos.splice(id, 1);
    //after splicing, set up new todos again
    localStorage.setItem('todo', JSON.stringify(todos));
    //show the change
    show();
    return false;
}



function show() {
    
    var todos = getTodo();
    //start with a list
    var html = '<ul>';
    //creating list per length and remove button
    for(var i=0; i<todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">x</button></li>';
    };
    html += '</ul>'; //end with unordered list
 
    document.getElementById('myUL').innerHTML = html;
 
    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };

}
document.getElementById('add').addEventListener('click', add);
show();