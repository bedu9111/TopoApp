let addBtn = document.querySelector('.nav-box button');
let input = document.querySelector('.nav-box input');
let ulBox = document.querySelector('.ul-box');
let tasks = document.querySelector('.footer-box div');
let clearBtn = document.querySelector('.footer-box button');

let noOfTask = 1;


/* Add Task */

addBtn.addEventListener('click', () => {

    if (input.value.trim() === '') {
        alert("Please enter a valid task");
        return;
    }

    let li = document.createElement('li');
    let div = document.createElement('div');
    let checkbox = document.createElement('input');
    let label = document.createElement('label');
    let button = document.createElement('button');

    div.classList.add('list');

    checkbox.type = 'checkbox';
    checkbox.className = 'check';

    label.innerText = input.value;
    button.innerText = 'X';

    div.append(checkbox, label);
    li.append(div, button);
    ulBox.appendChild(li);

    input.value = '';

    noOfTask++;
    updateCount();
});


/* Click Events (Checkbox + Delete) */

ulBox.addEventListener('click', (e) => {

    // Checkbox
    if (e.target.type === 'checkbox') {

        let label = e.target.nextElementSibling;

        if (e.target.checked) {
            noOfTask--;
            label.style.textDecoration = 'line-through';
        }
        else {
            noOfTask++;
            label.style.textDecoration = 'none';
        }

        updateCount();
    }


    // Delete Button
    if (e.target.innerText === 'X') {

        let checkbox = e.target.parentElement.querySelector('.check');

        if (!checkbox.checked) {
            noOfTask--;
        }

        e.target.parentElement.remove();
        updateCount();
    }
});


/* Clear Completed */

clearBtn.addEventListener('click', () => {

    let allChecks = document.querySelectorAll('.check');
    let removed = false;

    allChecks.forEach(check => {

        if (check.checked) {
            check.parentElement.parentElement.remove();
            removed = true;
        }

    });

    if (!removed) {
        alert("No completed tasks");
    }

    updateCount();
});


/* Update Task Count */

function updateCount() {

    if (noOfTask < 0) noOfTask = 0;

    tasks.innerText = `${noOfTask} tasks left`;
}
