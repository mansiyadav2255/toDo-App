const taskInput = document.querySelector('#taskInput')
const addTaskButton=document.querySelector('#addTask')
const taskList = document.querySelector('#taskList')

//function to add a task 

function addTask(){
    const taskText = taskInput.value.trim();
    if(taskText ==="")return;

    //create a new list item

    const li = document.createElement("li")
    li.innerHTML=`${taskText} <button class = 'delete'>Delete</button>`

    //append task to the list
    taskList.appendChild(li);

    //clear input field

    taskInput.value="";

    //Add event listener to delete button 

    li.querySelector(".delete").addEventListener("click",()=>{
        li.remove();
    })

}

//add event listener for the button 

addTaskButton.addEventListener("click",addTask);

//allow adding task by pressing 'Enter

taskInput.addEventListener("keypress",(event)=>{
    if(event.key ==="Enter") addTask();
});