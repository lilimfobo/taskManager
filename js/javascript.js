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

    tasks.forEach(task => {
		const taskItem = document.createElement('div');
		taskItem.classList.add('taskitem');

		const label = document.createElement('label');
		const input = document.createElement('input');
		const span = document.createElement('span');
		const content = document.createElement('div');
		const actions = document.createElement('div');
		const edit = document.createElement('button');
		const deleteButton = document.createElement('button');

        input.type = 'checkbox';
		input.checked = task.done;
		span.classList.add('bubble');
		if (todo.category == 'personal') {
			span.classList.add('personal');
		} else {
			span.classList.add('work');
		}
		content.classList.add('task-content');
		actions.classList.add('actions');
		edit.classList.add('edit');
		deleteButton.classList.add('delete');

		content.innerHTML = `<input type="text" value="${task.content}" readonly>`;
		edit.innerHTML = 'Edit';
		deleteButton.innerHTML = 'Delete';
