const input = document.querySelector('#input');
const add = document.querySelector('#add');
const list = document.querySelector('#list-container');

const addTask = () => {
    const text = input.value.trim();
    if(text === ""){
        alert("Please input text");
    }
    else{
        const li = document.createElement('li');
        li.textContent(text)
    }
}