const todoInputBtn = document.querySelector("#todo_input_btn");
const todoInputText = document.querySelector("#todo_input");
const todoContainer = document.querySelector("#todo-container");
const localStorageKey = "my-todo";
let todoItemArr = [];

window.onload = () => {
    getTodoFromStorage();
    renderTodoList();
}

todoInputBtn.addEventListener("click", addTodo);
todoInputText.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTodo();
    }
});

function addTodo() {
    const inputVal = todoInputText.value.trim();
    if (inputVal === "") {
        return;
    }

    setTodoToStorage(inputVal);
    renderTodoList();
    todoInputText.value = "";
};

todoContainer.addEventListener("click", function (e) {
    const target = e.target;

    if (target.id === "delete") {
        deleteTodo(target);
    }
    else if (target.id === "edit") {
        editTodo(target);
    }
    else if (target.type === "checkbox") {
        checkTodo(target);
    }
});

function setTodoToStorage(content) {
    const timestamp = Date.now();
    todoItemArr.push({ id: timestamp, content: content, done: false });
    resetStorage();
}

function getTodoFromStorage() {
    const todoObj = JSON.parse(localStorage.getItem(localStorageKey));
    if (todoObj) {
        todoItemArr = todoObj;
    }
}

function resetStorage() {
    const jsonStr = JSON.stringify(todoItemArr);
    localStorage.setItem(localStorageKey, jsonStr);
}

function editTodo(target) {
    const todoItem = target.closest(".input-group");
    const todoId = todoItem.dataset.todoId;
    const inputText = todoItem.querySelector(".form-control");
    const editBtn = todoItem.querySelector("#edit");
    const findTodoItem = todoItemArr.find(item => item.id == todoId);

    if (editBtn.innerText === "編輯") {
        inputText.removeAttribute("disabled");

        editBtn.innerText = "保存";
        editBtn.classList.remove("btn-warning");
        editBtn.classList.add("btn-success");
    }
    else if (editBtn.innerText === "保存") {
        if (findTodoItem) {
            findTodoItem.content = inputText.value;
        }
        resetStorage();
        inputText.setAttribute("disabled", true);
        editBtn.innerText = "編輯";
        editBtn.classList.remove("btn-success");
        editBtn.classList.add("btn-warning");
    }
};

function checkTodo(target) {
    const todoItem = target.closest(".input-group");
    const todoId = todoItem.dataset.todoId;

    todoItemArr.forEach(item => {
        if (item.id == todoId) {
            item.done = target.checked;
        }
    });

    resetStorage();
};

function deleteTodo(target) {
    const todoItem = target.closest(".input-group");
    const todoId = todoItem.dataset.todoId;

    todoItemArr = todoItemArr.filter(item => item.id != todoId);

    resetStorage();
    renderTodoList();
};


function renderTodoList() {
    const todoContainer = document.querySelector("#todo-container");
    todoContainer.innerHTML = "";

    todoItemArr.forEach(item => {
        const newTodo = document.createElement("div");
        newTodo.classList.add("input-group", "mb-3");
        newTodo.dataset.todoId = item.id;
        newTodo.innerHTML = `
            <div class="input-group-text">
                <input class="form-check-input mt-0" type="checkbox" ${item.done ? 'checked' : ''} 
                    aria-label="Checkbox for following text input">
            </div>
            <input type="text" class="form-control" value="${item.content}" disabled>
            <button type="button" id="edit" class="btn btn-warning">編輯</button>
            <button type="button" id="delete" class="btn btn-danger">刪除</button>
        `;

        todoContainer.appendChild(newTodo);
    });
};