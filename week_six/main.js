const form = document.querySelector('form');
const emptyMsg = document.querySelector('#empty-message');
let taskList = document.querySelector('#task-list');

let resetData = document.querySelector('#reset');
// course outline

// todo list array
let tasks = [];

resetData.addEventListener('click', () => {
	tasks = [];
	renderList();
});

form.addEventListener('submit', addTask);

function addTask(e) {
	e.preventDefault();
	let newTask = document.getElementById('task').value.trim();
	//adding data to array
	if (newTask !== '') {
		tasks.push(newTask);
		renderList();
	} else {
		alert('Task cannot be empty!');
	}

	form.reset();
}

function renderList() {
	taskList.innerHTML = '';

	if (tasks.length === 0) {
		emptyMsg.textContent = 'Empty list';
	} else {
		emptyMsg.style.display = 'none';
	}

	tasks.forEach((task) => {
		const li = document.createElement('li');
		li.textContent = task;
		taskList.append(li);
	});
}
