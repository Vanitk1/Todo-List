document.addEventListener("DOMContentLoaded", function() {
  const formFolder = document.getElementById("form-folder");
  const folderContainer = document.getElementById("folder-container");
  const formTask = document.getElementById("form-task");
  const taskContainer = document.getElementById("task-container");
  const modal = document.getElementById("myModal");
  const modalForm = document.getElementById("form-task-edit");
  let currentFolder = null;
  let tasks = [];

  formFolder.addEventListener("submit", function(event) {
      event.preventDefault();
      
      const folderNameInput = document.getElementById("folder-name");
      const folderName = folderNameInput.value;

      if (folderName.trim() === "") {
          alert("Folder name cannot be empty!");
          return;
      }

      const folderElement = document.createElement("div");
      folderElement.classList.add("folder");
      folderElement.textContent = folderName;

      folderElement.addEventListener("click", function() {
          currentFolder = folderName;
          renderTasks();
      });
      
      folderContainer.appendChild(folderElement);

      folderNameInput.value = "";
  });

  formTask.addEventListener("submit", function(event) {
      event.preventDefault();

      if(!currentFolder) {
        alert("You must select a folder before adding a task.");
        return;
      }
      
      const taskNameInput = document.getElementById("task-name");
      const taskDateInput = document.getElementById("task-date");
      const taskPriorityInput = document.getElementById("task-priority");

      const taskName = taskNameInput.value;
      const taskDate = taskDateInput.value;
      const taskPriority = taskPriorityInput.value;

      if (taskName.trim() === "") {
          alert("Task name cannot be empty!");
          return;
      }

      const task = {
          name: taskName,
          date: taskDate,
          priority: taskPriority,
          folder: currentFolder
      };

      tasks.push(task);
      if (!currentFolder || currentFolder === task.folder) {
          renderTask(task);
      }

      taskNameInput.value = "";
      taskDateInput.value = "";
      taskPriorityInput.value = "urgent";
  });

  function renderTasks() {
      taskContainer.innerHTML = "";
      tasks.forEach(task => {
          if (!currentFolder || currentFolder === task.folder) {
              renderTask(task);
          }
      });
  }

  function renderTask(task) {
      const taskElement = document.createElement("div");
      taskElement.classList.add("task");
      taskElement.innerHTML = `
          <h3>${task.name}</h3>
          <p>Date: ${task.date}</p>
          <p>Priority: ${task.priority}</p>
          <button class="edit-task">Edit</button>
          <button class="delete-task">Delete</button>
      `;
      
      taskContainer.appendChild(taskElement);

      const editButton = taskElement.querySelector(".edit-task");
      const deleteButton = taskElement.querySelector(".delete-task");

      editButton.addEventListener("click", function() {
          openModal(task);
      });

      deleteButton.addEventListener("click", function() {
          deleteTask(task);
      });
  }

  function openModal(task) {
      modal.style.display = "block";

      const taskNameEditInput = document.getElementById("task-name-edit");
      const taskDateEditInput = document.getElementById("task-date-edit");
      const taskPriorityEditInput = document.getElementById("task-priority-edit");

      taskNameEditInput.value = task.name;
      taskDateEditInput.value = task.date;
      taskPriorityEditInput.value = task.priority;

      modalForm.addEventListener("submit", function(event) {
          event.preventDefault();

          task.name = taskNameEditInput.value;
          task.date = taskDateEditInput.value;
          task.priority = taskPriorityEditInput.value;

          const taskElement = document.querySelector(".task h3");
          taskElement.textContent = task.name;

          closeModal();
      });
  }

  function closeModal() {
      modal.style.display = "none";
      modalForm.removeEventListener("submit", function() {});
  }

  function deleteTask(task) {
      tasks = tasks.filter(t => t !== task);
      renderTasks();
  }

  window.addEventListener("click", function(event) {
      if (event.target == modal) {
          closeModal();
      }
  });
});


