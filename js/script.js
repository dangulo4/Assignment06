// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.querySelector('form');
let table = document.querySelector('table');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0;
// let count = document.querySelector('td').childNodes;
console.log(count);
window.addEventListener('load', (e) => {
  checkEmployees();
});
// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
  // PREVENT FORM SUBMISSION
  e.preventDefault();
  // GET THE VALUES FROM THE TEXT BOXES
  let newId = document.querySelector('#id').value;
  let newName = document.querySelector('#name').value;
  let newExt = document.querySelector('#extension').value;
  let newEmail = document.querySelector('#email').value;
  let newDept = document.querySelector('#department').value;
  // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
  let row = table.insertRow();
  // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
  let id = row.insertCell();
  let name = row.insertCell();
  let ext = row.insertCell();
  let email = row.insertCell();
  let dept = row.insertCell();
  // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
  let idText = document.createTextNode(newId);
  let nameText = document.createTextNode(newName);
  let extText = document.createTextNode(newExt);
  let emailText = document.createTextNode(newEmail);
  let deptText = document.createTextNode(newDept);
  id.appendChild(idText);
  name.appendChild(nameText);
  ext.appendChild(extText);
  email.appendChild(emailText);
  dept.appendChild(deptText);
  // CREATE THE DELETE BUTTON
  let deleteBtn = document.createElement('button');
  // ADD BOOTSTRAP CLASSES FOR A BUTTON
  deleteBtn.className = 'btn btn-danger mt-1 active';
  // CREATE TEXT NODE FOR DELETE BUTTON AND SET IT TO 'X'
  let textDelete = document.createTextNode('X');
  // APPEND TEXT NODE FOR DELETE BUTTON
  deleteBtn.appendChild(textDelete);
  // APPEND DELETE BUTTON TO ROW
  row.appendChild(deleteBtn);
  // RESET THE FORM
  form.reset();

  // SET FOCUS BACK TO THE ID TEXT BOX
  // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
  count = document.querySelector('table').rows.length - 1;
  console.log(count);
  checkEmployees();
});

// DELETE EMPLOYEE

// FUNCTION TO SHOW OR HIDE "NO ROWS" ALERT
function checkEmployees() {
  count == 0
    ? document.querySelector('span').classList.add('show')
    : document.querySelector('span').classList.remove('show');
}
