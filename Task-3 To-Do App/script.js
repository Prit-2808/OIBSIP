const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput"); 
const taskList = document.getElementById("taskList");
const emptyMsg = document.getElementById("emptyMsg");

const totalCount = document.getElementById("totalCount");
const pendingCount = document.getElementById("pendingCount");
const completedCount = document.getElementById("completedCount");

const todayDate = document.getElementById("todayDate");
const tabButtons = document.querySelectorAll(".tab-btn");

const editOverlay = document.getElementById("editOverlay");
const editTitle = document.getElementById("editTitle");
const editSaveBtn = document.getElementById("editSaveBtn");
const editCancelBtn = document.getElementById("editCancelBtn");

let editingTaskId = null;
let currentFilter = "all";

const STORAGE_KEY = "daylist-tasks-v2";
let tasks = loadTasks();

function loadTasks() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : [];
}
function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function showTodayDate() {
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  todayDate.textContent = new Date().toLocaleDateString("en-IN", options);
}

function formatTimestamp(isoString) {
  const date = new Date(isoString);
  return date.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) +
    ", " +
    date.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = taskInput.value.trim();
  if (title === "") return;

  const newTask = {
    id: generateId(),
    title: title,
    completed: false,
    createdAt: new Date().toISOString(),
    completedAt: null,
  };

  tasks.push(newTask);
  saveTasks();
  render();

  taskInput.value = "";
  taskInput.focus();
});

function toggleComplete(id) {
  const task = tasks.find((t) => t.id === id);
  if (!task) return;

  task.completed = !task.completed;
  task.completedAt = task.completed ? new Date().toISOString() : null;

  saveTasks();
  render();
}

function deleteTask(id) {
  tasks = tasks.filter((t) => t.id !== id);
  saveTasks();
  render();
}

function openEditModal(id) {
  const task = tasks.find((t) => t.id === id);
  if (!task) return;

  editingTaskId = id;
  editTitle.value = task.title;
  editOverlay.classList.add("show");
  editTitle.focus();
}

function closeEditModal() {
  editOverlay.classList.remove("show");
  editingTaskId = null;
}

editCancelBtn.addEventListener("click", closeEditModal);

editSaveBtn.addEventListener("click", function () {
  const newTitle = editTitle.value.trim();
  if (newTitle === "" || editingTaskId === null) return;

  const task = tasks.find((t) => t.id === editingTaskId);
  if (task) {
    task.title = newTitle;
    saveTasks();
    render();
  }
  closeEditModal();
});

editOverlay.addEventListener("click", function (e) {
  if (e.target === editOverlay) closeEditModal();
});

tabButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    tabButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    render();
  });
});

function createTaskElement(task) {
  const li = document.createElement("li");
  li.className = "task-item" + (task.completed ? " completed" : "");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "task-checkbox";
  checkbox.checked = task.completed;
  checkbox.disabled = task.completed;
  checkbox.addEventListener("change", () => toggleComplete(task.id));

  const body = document.createElement("div");
  body.className = "task-body";

  const titleRow = document.createElement("div");
  titleRow.className = "task-title-row";

  const titleEl = document.createElement("span");
  titleEl.className = "task-title";
  titleEl.textContent = task.title;

  const badge = document.createElement("span");
  badge.className = "badge " + (task.completed ? "badge-done" : "badge-pending");
  badge.textContent = task.completed ? "Completed" : "Pending";

  titleRow.appendChild(titleEl);
  titleRow.appendChild(badge);
  body.appendChild(titleRow);

  const metaEl = document.createElement("p");
  metaEl.className = "task-meta";
  metaEl.textContent = task.completed
    ? "Completed: " + formatTimestamp(task.completedAt)
    : "Created: " + formatTimestamp(task.createdAt);
  body.appendChild(metaEl);

  const actions = document.createElement("div");
  actions.className = "task-actions";

  const editBtn = document.createElement("button");
  editBtn.className = "icon-btn edit-btn";
  editBtn.title = "Edit task";
  editBtn.textContent = "✎";
  editBtn.addEventListener("click", () => openEditModal(task.id));

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "icon-btn delete-btn";
  deleteBtn.title = "Delete task";
  deleteBtn.textContent = "✕";
  deleteBtn.addEventListener("click", () => deleteTask(task.id));

  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(checkbox);
  li.appendChild(body);
  li.appendChild(actions);

  return li;
}

function render() {
  taskList.innerHTML = "";

  let visibleTasks = tasks;
  if (currentFilter === "pending") visibleTasks = tasks.filter((t) => !t.completed);
  if (currentFilter === "completed") visibleTasks = tasks.filter((t) => t.completed);

  visibleTasks = [...visibleTasks].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  visibleTasks.forEach((task) => taskList.appendChild(createTaskElement(task)));

  emptyMsg.classList.toggle("show", visibleTasks.length === 0);

  const pending = tasks.filter((t) => !t.completed).length;
  const completed = tasks.filter((t) => t.completed).length;
  const total = tasks.length;

  totalCount.textContent = total;
  pendingCount.textContent = pending;
  completedCount.textContent = completed;
}

showTodayDate();
render();