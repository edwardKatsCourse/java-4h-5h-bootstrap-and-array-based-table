let people = [];

//each change to array -> change table

function addPerson() {
    //1. add person to array

    let person = Person.getFromInput();
    people.push(person);

    //2. clear всю таблицу
    clearTable();

    //3. draw table from scratch (нарисовать таблицу с нуля)
    drawTable(people);

    Person.clear();
}

function searchByLastName() {
    let searchLastName = document.getElementById('searchLastName').value;

    if (searchLastName !== '') {

        let filteredPeople = people.filter((person) => person.lastName.includes(searchLastName));
        clearTable();
        drawTable(filteredPeople);
    } else {
        clearTable();
        drawTable(people);
    }
}

function searchOnEnterKey(event) {
    if (event.keyCode === 13) { //13 - Enter button
        searchByLastName();
    }
}

function clearTable() {
    let table = document.getElementById('peopleTable');
    let  rowCount = table.rows.length;
    for (let i = rowCount - 1; i > 0; i--) {
        table.deleteRow(i);
    }
}

function drawTable(people) {
    let table = document.getElementById('peopleTable');

    for (let person of people) {
        let row = table.insertRow(); //add row to the end of table

        //0
        row.insertCell().innerText = person.firstName;

        //1
        row.insertCell().innerText = person.lastName;

        //2
        row.insertCell().innerText = person.age;
    }
}



function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

Person.getFromInput = function () {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let age = document.getElementById('age').value;

    return new Person(firstName, lastName, age);
};

Person.clear = function () {
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('age').value = '';

};