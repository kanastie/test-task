/* 1. Приложение для списка дел
 Создайте простое приложение для списка задач, используя HTML, CSS и JavaScript.
 Приложение должно включать следующие функции:
 ● Текстовое поле для добавления новых задач.
 ● Кнопка для добавления задачи в список.
 ● Возможность отметить задачу как выполненную (по клику на нее).
 ● Завершённая задача должна отличаться от незавершённой визуально.
 ● Кнопка для удаления задачи.
 Требуется:
 1. Манипулировать DOM для динамического добавления задач в список.
 2. Обработать завершение и удаление задачи с помощью событий JavaScript.
 Бонус: Добавьте возможность фильтрации задач (например, показать только
 завершённые или незавершённые задачи).
 */

const page = document.querySelector(".todo");
const tasksList = page.querySelector(".task__list");
let tasks = tasksList.children;
const taskInput = page.querySelector(".new-task__input");
const newTaskBtn = page.querySelector(".new-task__add-btn");
const doneList = page.querySelector(".task__list--done");

const deleteElement = () => {
  Array.from(tasks).forEach((item) => {
    const delBtn = item.querySelector(".task__del");

    delBtn.addEventListener("click", () => {
      item.remove();
    });
  });
};

const addCheckHandler = () => {
  Array.from(tasks).forEach((item) => {
    const checkbox = item.querySelector(".task__input");

    checkbox.addEventListener("change", () => {
      doneList.appendChild(item);
      item.classList.add("task__item--done");
    });
  });
};

for (let i = 0; i < tasks.length; i++) {
  addCheckHandler(tasks[i]);
  deleteElement(tasks[i]);
}

const addTask = () => {
  const taskText = taskInput.value;
  console.log(tasks);
  console.log(tasks[0]);
  console.log(tasks[1]);
  console.log(tasks[2]);
  console.log(tasks[3]);

  if (taskText) {
    const taskItemTemplate = document.querySelector(
      "#task-item-template"
    ).content;
    const taskLi = taskItemTemplate.querySelector("li");
    const clonedItem = taskLi.cloneNode(true);
    const taskDescription = clonedItem.querySelector("span");
    taskDescription.textContent = taskText;

    addCheckHandler();
    deleteElement();
    tasksList.appendChild(clonedItem);

    taskInput.value = "";
  } else {
    alert("Поле пусто");
  }
};

newTaskBtn.addEventListener("click", () => {
  addTask();
});

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Enter") {
    evt.preventDefault();
    addTask();
  }
});

// Удаление работает, когда в списке от двух задач. Когда в списке одна задача, HTML Collection отображает 0 объектов в массиве. Не знаю, как решить эту проблему
