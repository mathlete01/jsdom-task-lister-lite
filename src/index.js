// First, ensure the DOM is loaded before you manipulate the DOM
document.addEventListener("DOMContentLoaded", () => {
  
  function createTask(event){
    // Stop submit button from doing what it usually does--saving to a database
    event.preventDefault();
    // Create list item
    const newItem = document.createElement("li");
    // Save input from text field to variable
    let description = document.getElementById("new-task-description").value;
    // Assign input to list item 
    newItem.textContent = description
    // get Unordered List id 
    let list = document.querySelector("ul");
    // append List Item to Unordered List
    list.appendChild(newItem);
    // Create delete button
    const deleteBtn = document.createElement("button");
    // Append button to List Item
    newItem.appendChild(deleteBtn);
    // Name the delete button
    deleteBtn.textContent = "x";
    // Add listener to delete button, add action to delete button
    deleteBtn.addEventListener("click", function(){newItem.remove()});
  }

  // Add event listener to submit button
  document.getElementById("create-task-form").addEventListener("submit", createTask);

});