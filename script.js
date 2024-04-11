// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  const employees =[]; // Empezar un array vacio para almacenar los datos dentro de Employees
  let addEmployee = true; // Permite agregar mas empleados si es true
  while (addEmployee){ // El bucle que se ejecuta mientras se quiera agregar mas usuarios
    const firstName = prompt("Enter Employee´s first name");// Solicita el primer nombre del empleado
    const lastName = prompt ("Enter employee´s last name");// Solicita el apellido del empleado
    let salary = prompt("Enter Employee´s salary");// Solicita el salario del empleado

    if(isNaN(Number(salary))){// Valida si el salario es un numero valido
      salary = 0; // Si el usuario pone en numero invalido, pondrá un salario de 0
    } else {
      salary = Number(salary);// Convierte el salario en un numero
    }
    const employee = { // Se crea un objeto para representar al empleado con los datos que ingresa el usuario
      firstName: firstName,
      lastName: lastName,
      salary: salary
    };
    employees.push(employee);// Empuja los datos a la variable antes creada

    const continueAdding = confirm ("Do you want to add another employee?")// validar si termina el proceso o agrega mas usuarios
    if(!continueAdding){//si el usuario decide no agregar otro empleado
      addEmployee=false;// termina el bucle
    }
  }
  return employees; // regresa lo que agrego el usuario
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
let totalSalary=0;// Inicia una variable para almacenar el total de los salarios
employeesArray.forEach(employee=>{// Itera sobre cada empleado en el array de empleados
  totalSalary += employee.salary;// suma el salario del empleado al total
});
const averageSalary = totalSalary / employeesArray.length;//El salario total entre el numero de empleados

console.log(`Average Salary: $${averageSalary.toFixed(2)}`);//muestra el salario promedio
console.log(`Number of Employees: ${employeesArray.length}`)//mueestra el total de empleados
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const randomIndex = Math.floor(Math.random() * employeesArray.length);//Genera un indice aleatorio dentro del array de empleados
  const randomEmployee = employeesArray[randomIndex];// extra un empleado aleatorio del array

  console.log(`Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}`);// Muestra el empleado seleccionado
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
