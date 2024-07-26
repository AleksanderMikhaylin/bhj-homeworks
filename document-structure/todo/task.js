const taskInputText = document.getElementById('task__input');
const taskInputButton = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list');

function removeTask() {
  const removedItem = this.closest('.task');
  taskList.removeChild(removedItem);
};

function newTask() {
  event.preventDefault();
  if (taskInputText.value !== '') {
    const newTaskAddDiv = 
      `<div class="task">
        <div class="task__title">
          ${taskInputText.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div> `;
    taskList.insertAdjacentHTML('afterBegin', newTaskAddDiv);
    taskInputText.value ='';
    taskList.getElementsByClassName('task__remove')[0].onclick = removeTask
  }
}

function newTaskByEnter(event) {
  if (event.keyCode === 13){
    newTask();
  }
}

taskInputText.addEventListener('keydown', newTaskByEnter);
taskInputButton.addEventListener('click', newTask);
