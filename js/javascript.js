window.addEventListener('load', () => {
	tasks = JSON.parse(localStorage.getItem('tasks')) || [];
	const enterName = document.querySelector('#yourName');
	const newForm = document.querySelector('#createTask');

	const myName = localStorage.getItem('myName') || '';

	enterName.value = myName;

	enterName.addEventListener('change', (e) => {
		localStorage.setItem('myName', e.target.value);
	})

    nameInput.value = myName;

	nameInput.addEventListener('change', (e) => {
		localStorage.setItem('myName', e.target.value);
	})

	newForm.addEventListener('submit', e => {
		e.preventDefault();

        const task = {
			content: e.target.elements.content.value,
			category: e.target.elements.category.value,
			done: false,
			createdAt: new Date().getTime()
		}

		tasks.push(task);

		localStorage.setItem('tasks', JSON.stringify(tasks));

        e.target.reset();

		DisplayTaskss()
	})

	DisplayTaskss()
})

function DisplayTasks () {
	const taskList = document.querySelector('#taskList');
	taskList.innerHTML = "";
