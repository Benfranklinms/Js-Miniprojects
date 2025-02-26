const input = document.querySelector('#input');
const add = document.querySelector('#add');
const list = document.querySelector('#list-container');

const addTask = () => {
    const text = input.value.trim();
    if(text === ""){
        alert("Please input text");
    }
        const li = document.createElement('li');
        li.textContent(text);

        li.addEventListener('click', () => {
            li.classList.toggle(checked);
        });

        const deleteButton = document.createElement('span');
        deleteButton.textContent('❌');

        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
        });

        li.appendChild(deleteButton);
        list.appendChild(li);
        input.value = "";
};

add.addEventListener('click', addTask);