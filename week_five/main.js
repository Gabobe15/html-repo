const form = document.querySelector('form');
const emptyMsg = document.querySelector('#empty-message');
let taskList = document.querySelector('#task-list');
// course outline 
let cOutline = document.querySelector('#outline');
const courseOutline = {
	Frontend: ['reactJs', 'html', 'css', 'js'],
	Backend: ['python', 'php', 'node'],
};

// looping throught object 
for (c in courseOutline) {
	cOutline.innerHTML += `<p>
	${c}:${courseOutline[c]}<br/>
	</p>
	`;
	console.log(`${c}: ${courseOutline[c]}`);
}


// todo list array 
const tasks = [];


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
