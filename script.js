const add = document.querySelector('.add');
const reset = document.querySelector('.reset');
const li = document.createElement("li");

add.addEventListener('click', function () {
    //first you want to create the element list
    var li = document.createElement("li");
    //getting the value of the what's in the text box
    var inputValue = document.getElementById('myInput').value;
    //clears the text box after submission, won't be grabbed by anything below
    var clearInput = document.getElementById('myInput').value = '';
    //create the text node in order to append to the list
    const t = document.createTextNode(inputValue);
    //append t to the list we created

    li.appendChild(t);
    //create the clear button for each single element
    //to append it to our actual list get its name and append
    document.getElementById('myUL').append(li);
    document.getElementById('myUL').addEventListener('click', function(e){
        var list = e.target;
        var listItems = document.querySelectorAll("li"); 
        var ul = document.getElementById("myUL");
        list.parentNode.removeChild(list);       
    });
});


reset.addEventListener('click', function () {
    //creating new list
    var newList = document.createElement("ul");
    //setting same ID name as previously so add button still works the same
    newList.setAttribute("id", "myUL");
    //get the current list and replace it with new list
    var currentList = document.getElementById('myUL');
    currentList.replaceWith(newList);

})



