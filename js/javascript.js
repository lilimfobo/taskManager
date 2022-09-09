window.addEventListener('load', () => {
	todos = JSON.parse(localStorage.getItem('todos')) || [];
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

		todos.push(task);

		localStorage.setItem('todos', JSON.stringify(todos));
