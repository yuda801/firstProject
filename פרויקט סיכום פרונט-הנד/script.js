let contentElement = document.getElementById("task-content-input")
let dateElement = document.getElementById("due-date-input")
let timeElement = document.getElementById("due-time-input")

let CardsDivElement = document.getElementById("cards-div")

const addNewTask = () => {
    if (contentElement.value === '' || dateElement.value === '' || timeElement.value === '') {
        alert("Empty fields! Please try again...")
        return
    }

    // init the element
    let newId = Math.floor(Math.random() * 10000)
    let newTask = {
        id: newId, // TO DO: to fix in local storage task
        content: contentElement.value,
        date: dateElement.value,
        time: timeElement.value
    }

    // get from local storage
    let jsonArray = localStorage.getItem("tasks-list")
    let tasksList = JSON.parse(jsonArray)

    if (tasksList === null) {
        tasksList = []
    }

    // update list
    tasksList.push(newTask)

    // set to local storage 
    let toJson = JSON.stringify(tasksList)
    localStorage.setItem("tasks-list", toJson)

    // update list in html
    loadTasks()

    // clear input
    // contentElement.value = ''
    // dateElement.value = ''
    // timeElement.value = ''
}

// create table and rows by tasksList variable
const loadTasks = () => {
    let jsonArray = localStorage.getItem("tasks-list")
    let tasksList = JSON.parse(jsonArray)

    if (tasksList === null) {
        return
    }

    let table = '';

    for (let task of tasksList) {
        table += `<div class="task-note card">
                    <button type="button" id="btn" class="close btn-close" onclick="handleDeleteTaskById(${task.id})">   
                    &times;
                    </button>
                    <p id="txt" class="text-output">${task.content}</p><br/>
                    <time id="time" class="time-output">${task.date + "</br>" + task.time}</time>
                    </div>`
    }

    CardsDivElement.innerHTML = table
}

const handleDeleteTaskById = (id) => {
    // get from local storage
    let jsonArray = localStorage.getItem("tasks-list")
    let tasksList = JSON.parse(jsonArray)

    let filteredtasksList = tasksList.filter(el => el.id !== id)

    tasksList = filteredtasksList

    // set to local storage 
    let toJson = JSON.stringify(tasksList)
    localStorage.setItem("tasks-list", toJson)

    loadTasks()
}

const resetData = () => {
    localStorage.clear();
    const myNode = document.getElementById("cards-div");
    myNode.innerHTML = '';
    tasksList = null;

}

const resetInput = () => {
    contentElement.value = ''
    dateElement.value = ''
    timeElement.value = ''
}













































// let Tasks = []
// let taskID = -1;
// const addTask = () => {
//     taskID++;
//     let task = {
//         TaskNumber: taskID,
//         Text: document.getElementById("task-content").value,
//         Date: document.getElementById("due-date").value,
//         Time: document.getElementById("due-time").value
//     }
//     saveTask(task);

//     // for (let i = 0; i < Tasks.length; i++) {
//     showTasks(task);

// }

// //add a task to the list
// const saveTask = (task) => {
//     Tasks.push(task);
// }

// //removes a task from the list
// const removeTask = (indexOfTaskToDelete) => {
//     Tasks = Tasks.splice(indexOfTaskToDelete, 1);
// }

// // const showTasks = () => {

// //     let container = document.getElementById('cards-div');
// //     let taskDiv = document.createElement('div');
// //     document.getElementById('cards-div').appendChild(taskDiv);
// //     taskDiv.id = "task-note";

// //     let taskNoteDiv = document.getElementById('task-note');
// //     let btn = document.createElement("button");
// //     document.getElementById("task-note").appendChild(btn);
// //     btn.id = 'close';
// //     btn.type = "button";

// //     let XSign = document.getElementById('close');
// //     let span = document.createElement('span');
// //     document.getElementById('close').appendChild(span);
// //     span.id = "spn";
// //     document.getElementById('spn').innerHTML = "&times;"

// //     let taskTxt = document.getElementById('cards-div');
// //     let taskText = document.createElement('p');
// //     document.getElementById('task-note').appendChild(taskText);

// //     let a = document.getElementById('cards-div');
// //     let time = document.createElement('time');
// //     document.getElementById('task-note').appendChild(time);
// // }

// const showTasks = (task) => {
//     var element = document.getElementById("container");
//     var newElement = '<div class="task-note"><button type="button" id="btn" class="close"><span>&times;</span></button><br/><p id="txt" class="text-output"></p><br/><span id="time" class="time-output"></span></div>'
//     element.insertAdjacentHTML('afterend', newElement);

//     let txt = document.getElementById('btn');
//     let text = task.Text
//     txt.insertAdjacentHTML('afterend', text);

//     let clk = document.getElementById('txt');
//     let time = task.Date;
//     let date = task.Time;
//     let dateAndTime = date + "<br/>" + time;
//     clk.insertAdjacentHTML('afterend', dateAndTime);
// }