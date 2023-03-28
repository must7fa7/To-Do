const input = document.getElementById("input");
const date = document.getElementById("date");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");
const h2 = document.getElementById('h2');


addBtn.addEventListener("click", function () {

  if (input.value === "" || date.value === "") {
    alert("Please enter a task and a date");

  } else {
    const li = document.createElement("li");
    const task = document.createElement("span");
    const dueDate = document.createElement("span");
    const deleteBtn = document.createElement("button");
    const editBtn = document.createElement("button");

    const taskText = input.value;
    const dueDateText = date.value;


    task.innerText = input.value;
    dueDate.innerText = date.value;
    deleteBtn.innerText = "Delete";
    editBtn.innerText = "Edit"


    if (addBtn.innerText === 'Add') {

      li.appendChild(task);
      li.appendChild(dueDate);
      li.appendChild(deleteBtn);
      li.appendChild(editBtn);
      list.appendChild(li);

    } else {
      const li = list.querySelector("li span:first-of-type");

      li.innerText = taskText;

      const dueDate = li.nextElementSibling;
      dueDate.innerText = dueDateText;

      input.value = "";
      date.value = "";
      addBtn.innerText = "Add";

    }

    input.value = "";
    date.value = "";
    h2.innerText = '';



    // delete event 
    deleteBtn.addEventListener("click", function () {
      li.remove();
    });


    // edit event
    editBtn.addEventListener('click', () => {
      input.value = task.innerText;
      date.value = dueDate.innerText;
      addBtn.innerText = 'edit';
    });


    // change color event
    let incres = 0;
    li.addEventListener('click', () => {
      if (incres % 2 == 0) {
        incres++;
        li.style.backgroundColor = 'rgba(13, 226, 27, 0.407)';
      } else {
        incres++;
        li.style.backgroundColor = 'rgba(240, 248, 255, 0.407)';
      }
    });
  }
});