const inputtask = document.getElementById('inputtask');
const addbtn = document.getElementById('addbtn');
const tasklist = document.getElementById('tasklist');

addbtn.addEventListener('click', addtask);

function addtask() {
  const task = inputtask.value.trim();

  inputtask.value = '';

  if (task === '') {
    alert("PLEASE ENTER TEXT");
    return;
  }

  const li = document.createElement('li');
  const tasktext = document.createTextNode(task);
  li.appendChild(tasktext);

  const removebtn = document.createElement('button');
  removebtn.textContent = 'Remove';
  removebtn.addEventListener('click', removetask);
  li.appendChild(removebtn);

  tasklist.appendChild(li);
}

function removetask(event) {
  const li = event.target.parentNode;
  tasklist.removeChild(li);
}
