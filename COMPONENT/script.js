// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;
// const phoneRegex = /^\(\d{3}\)-\d{3}-\d{4}$/;
// const usernameRegex = /^(?=.*\d)[A-Za-z\d]{4,16}$/;

// document.getElementById('phone').addEventListener('keydown', function(event) {
//   if (event.key === 'Enter') {
//     event.preventDefault();
//     document.getElementById('country').focus();
//   }
// });

// document.getElementById('country').addEventListener('change', function() {
//   document.getElementById('state').focus();
// });

// document.getElementById('state').addEventListener('change', function() {
//   document.getElementById('city').focus();
// });

// document.getElementById('city').addEventListener('change', function() {
//   document.getElementById('submit-btn').focus();
// });

// document.getElementById('registration-form').addEventListener('submit', function(event) {
//   event.preventDefault();

//   const username = document.getElementById('username').value;
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;
//   const dob = document.getElementById('dob').value;
//   const salary = document.getElementById('salary').value;
//   const phone = document.getElementById('phone').value;
//   const country = document.getElementById('country').value;
//   const state = document.getElementById('state').value;
//   const city = document.getElementById('city').value;

//   if (username === '' || email === '' || password === '') {
//     alert('Please fill in all required fields.');
//     return;
//   }

//   if (!passwordRegex.test(password)) {
//     alert('Invalid password format.');
//     return;
//   }

//   if (!phoneRegex.test(phone)) {
//     alert('Phone number must be in the format (123)-456-7890.');
//     return;
//   }

//   if (!usernameRegex.test(username)) {
//     alert('Username must be between 4 and 16 characters and include at least one number.');
//     return;
//   }

//   const tableBody = document.getElementById('submitted-data-body');
//   const newRow = tableBody.insertRow();

//   newRow.insertCell(0).textContent = username;
//   newRow.insertCell(1).textContent = email;
//   newRow.insertCell(2).textContent = dob;
//   newRow.insertCell(3).textContent = salary;
//   newRow.insertCell(4).textContent = phone;
//   newRow.insertCell(5).textContent = getCountryNameById(country);
//   newRow.insertCell(6).textContent = getStateNameById(state);
//   newRow.insertCell(7).textContent = getCityNameById(city);

//   const actionCell = newRow.insertCell(8);
//   actionCell.innerHTML = `
//     <button onclick="deleteRow(this)" class="btn btn-danger">Delete</button>
//     <button onclick="updateRow(this)" class="btn btn-primary">Update</button>
//   `;

//   document.getElementById('registration-form').reset();
// });

// // Function to delete row
// function deleteRow(button) {
//   const row = button.parentElement.parentElement;
//   row.remove();
// }

// // Function to update row
// // function updateRow(button) {
// //   const row = button.parentElement.parentElement;
// //   document.getElementById('username').value = row.cells[0].textContent;
// //   document.getElementById('email').value = row.cells[1].textContent;
// //   document.getElementById('country').value=row.cells[2].textContent;
// //   document.getElementById('dob').value = row.cells[2].textContent;
// //   document.getElementById('salary').value = row.cells[3].textContent;
// //   document.getElementById('phone').value = row.cells[4].textContent;
// // }

// function updateRow(button) {
//   const row = button.parentElement.parentElement;

//   // Allow editing only Username, Email, and Country
//   document.getElementById('username').value = row.cells[0].textContent;
//   document.getElementById('email').value = row.cells[1].textContent;

//   // Set the country dropdown value
//   const countryDropdown = document.getElementById('country');
//   const countryName = row.cells[5].textContent; // Assuming country is in the 6th column

//   for (let option of countryDropdown.options) {
//     if (option.text === countryName) {
//       countryDropdown.value = option.value;
//       break;
//     }
//   }

//   // Keep all other fields unchanged and disable editing
//   document.getElementById('dob').value = row.cells[2].textContent;
//   document.getElementById('salary').value = row.cells[3].textContent;
//   document.getElementById('phone').value = row.cells[4].textContent;
//   document.getElementById('state').value = row.cells[6].textContent;
//   document.getElementById('city').value = row.cells[7].textContent;

//   document.getElementById('dob').setAttribute("readonly", true);
//   document.getElementById('salary').setAttribute("readonly", true);
//   document.getElementById('phone').setAttribute("readonly", true);
//   document.getElementById('state').setAttribute("readonly", true);
//   document.getElementById('city').setAttribute("readonly", true);

//   document.getElementById('submit-btn').textContent = 'Save';
// }


// // Functions to get country, state, city names by ID
// function getCountryNameById(id) {
//   const country = countries.find(c => c.id == id);
//   return country ? country.name : 'Unknown';
// }

// function getStateNameById(id) {
//   const state = states.find(s => s.id == id);
//   return state ? state.name : 'Unknown';
// }

// function getCityNameById(id) {
//   const city = cities.find(c => c.id == id);
//   return city ? city.name : 'Unknown';
// }

// // Input Validations
// function validateUsername() {
//   const username = document.getElementById('username').value;
//   const usernameError = document.getElementById('username-error');
//   usernameError.textContent = usernameRegex.test(username) ? '' : 'Invalid username format.';
// }

// function validateEmail() {
//   const email = document.getElementById('email').value;
//   const emailError = document.getElementById('email-error');
//   const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
//   emailError.textContent = emailPattern.test(email) ? '' : 'Invalid email address.';
// }

// function validatePassword() {
//   const password = document.getElementById('password').value;
//   const passwordError = document.getElementById('password-error');
//   passwordError.textContent = passwordRegex.test(password) ? '' : 'Invalid password format.';
// }

// function validateDob() {
//   const dob = document.getElementById('dob').value;
//   const dobError = document.getElementById('dob-error');
//   dobError.textContent = dob ? '' : 'Date of birth is required.';
// }

// function validateSalary() {
//   const salary = document.getElementById('salary').value;
//   const salaryError = document.getElementById('salary-error');
//   salaryError.textContent = salary && salary >= 0 ? '' : 'Invalid salary value.';
// }

// function validatePhone() {
//   const phone = document.getElementById('phone').value;
//   const phoneError = document.getElementById('phone-error');
//   phoneError.textContent = phoneRegex.test(phone) ? '' : 'Invalid phone number format.';
// }

// // Load location data
// let countries = [];
// let states = [];
// let cities = [];

// async function loadLocationData() {
//   try {
//     const [countriesData, statesData, citiesData] = await Promise.all([
//       fetch('./countries.json').then(res => res.json()),
//       fetch('./states.json').then(res => res.json()),
//       fetch('./cities.json').then(res => res.json()),
//     ]);

//     countries = countriesData[2].data;
//     states = statesData[2].data;
//     cities = citiesData[2].data;

//     populateCountries();
//   } catch (error) {
//     console.error('Error loading location data:', error);
//   }
// }

// // Populate dropdowns dynamically
// function populateCountries() {
//   const countrySelect = document.getElementById('country');
//   countrySelect.innerHTML = '<option value="">Select a Country</option>';
//   countries.forEach(country => {
//     const option = document.createElement('option');
//     option.value = country.id;
//     option.textContent = country.name;
//     countrySelect.appendChild(option);
//   });
// }

// function populateStates() {
//   const countryId = document.getElementById('country').value;
//   const stateSelect = document.getElementById('state');
//   stateSelect.innerHTML = '<option value="">Select a State</option>';
//   states.filter(state => state.countryId == countryId).forEach(state => {
//     const option = document.createElement('option');
//     option.value = state.id;
//     option.textContent = state.name;
//     stateSelect.appendChild(option);
//   });
// }

// function populateCities() {
//   const stateId = document.getElementById('state').value;
//   const citySelect = document.getElementById('city');
//   citySelect.innerHTML = '<option value="">Select a City</option>';
//   cities.filter(city => city.stateId == stateId).forEach(city => {
//     const option = document.createElement('option');
//     option.value = city.id;
//     option.textContent = city.name;
//     citySelect.appendChild(option);
//   });
// }

// loadLocationData();

// document.getElementById('phone').addEventListener('input', function(event) {
//   let phoneNumber = event.target.value.replace(/\D/g, '');
//   event.target.value = phoneNumber.length <= 3 ? `(${phoneNumber}` 
//     : phoneNumber.length <= 6 ? `(${phoneNumber.slice(0, 3)})-${phoneNumber.slice(3)}`
//     : `(${phoneNumber.slice(0, 3)})-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
// });

// document.getElementById('country').addEventListener('change', populateStates);
// document.getElementById('state').addEventListener('change', populateCities);




// let rowToUpdate = null; 

// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;
// const phoneRegex = /^\(\d{3}\)-\d{3}-\d{4}$/;
// const usernameRegex = /^(?=.*\d)[A-Za-z\d]{4,16}$/;

// document.getElementById('registration-form').addEventListener('submit', function(event) {
//   event.preventDefault();

//   // const username = document.getElementById('username').value;
//   // const email = document.getElementById('email').value;
//   // const password = document.getElementById('password').value;
//   // const dob = document.getElementById('dob').value;
//   // const salary = document.getElementById('salary').value;
//   // const phone = document.getElementById('phone').value;
//   // const country = document.getElementById('country').value;
//   // const state = document.getElementById('state').value;
//   // const city = document.getElementById('city').value;

//    const username = document.getElementById('username').value;
//   const email = document.getElementById('email').value;
//   const passwordField = document.getElementById('password'); // Get password field
//   const passwordLabel = document.getElementById('password-label'); 
//   const password = passwordField ? passwordField.value : ""; // If hidden, set empty
//   const dob = document.getElementById('dob').value;
//   const salary = document.getElementById('salary').value;
//   const phone = document.getElementById('phone').value;
//   const country = document.getElementById('country').value;
//   const state = document.getElementById('state').value;
//   const city = document.getElementById('city').value;

//   if (!username || !email) {
//     alert('Please fill in all required fields.');
//     return;
//   }
//   // if (!passwordRegex.test(password)) {
//   //   alert('Invalid password format.');
//   //   return;
//   // }
//    if (passwordField && passwordField.style.display !== 'none' && !passwordRegex.test(password)) {
//     alert('Invalid password format.');
//     return;
//   }
//   if (!phoneRegex.test(phone)) {
//     alert('Phone number must be in the format (123)-456-7890.');
//     return;
//   }
//   if (!usernameRegex.test(username)) {
//     alert('Username must be between 4 and 16 characters and include at least one number.');
//     return;
//   }


//   if (rowToUpdate) {
//     // Update the existing row
//     rowToUpdate.cells[0].textContent = username;
//     rowToUpdate.cells[1].textContent = email;
//     rowToUpdate.cells[2].textContent = dob;
//     rowToUpdate.cells[3].textContent = salary;
//     rowToUpdate.cells[4].textContent = phone;
//     rowToUpdate.cells[5].textContent = getCountryNameById(country);
//     rowToUpdate.cells[6].textContent = getStateNameById(state);
//     rowToUpdate.cells[7].textContent = getCityNameById(city);

//     rowToUpdate = null;
//     document.getElementById('submit-btn').textContent = 'Submit';
//   } else {
//     // Add new row
//     addRowToSubmittedTable(username, email, dob, salary, phone, country, state, city);
//   }

//   document.getElementById('registration-form').reset();
// });

// function addRowToSubmittedTable(username, email, dob, salary, phone, country, state, city) {
//   const tableBody = document.getElementById('submitted-data-body');
//   const newRow = tableBody.insertRow();

//   newRow.insertCell(0).textContent = username;
//   newRow.insertCell(1).textContent = email;
//   newRow.insertCell(2).textContent = dob;
//   newRow.insertCell(3).textContent = salary;
//   newRow.insertCell(4).textContent = phone;
//   newRow.insertCell(5).textContent = getCountryNameById(country);
//   newRow.insertCell(6).textContent = getStateNameById(state);
//   newRow.insertCell(7).textContent = getCityNameById(city);

//   const actionCell = newRow.insertCell(8);
//   actionCell.innerHTML = `
//     <button onclick="updateRow(this)" class="btn btn-primary">Update</button>
//     <button onclick="editSavedRow(this)" class="btn btn-info">View</button>
//     <button onclick="deleteRow(this)" class="btn btn-danger">Delete</button>
//   `;
// }

// function deleteRow(button) {
//   if (confirm("Do you want to delete this row?")) {
//     button.parentElement.parentElement.remove();
//     resetForm(); // Reset the form after deletion
//   }
// }

// function resetForm() {
//   const form = document.getElementById('user-form'); // Assuming the form has an ID
//   form.reset(); // Reset all form fields

//   // Convert labels back to input fields
//   document.getElementById('username').outerHTML = `<input type="text" id="username" name="username">`;
//   document.getElementById('email').outerHTML = `<input type="email" id="email" name="email">`;
//   document.getElementById('password').outerHTML = `<input type="password" id="password" name="password">`;
//   document.getElementById('dob').outerHTML = `<input type="date" id="dob" name="dob">`;
//   document.getElementById('salary').outerHTML = `<input type="number" id="salary" name="salary">`;
//   document.getElementById('phone').outerHTML = `<input type="text" id="phone" name="phone">`;
//   document.getElementById('country').outerHTML = `<input type="text" id="country" name="country">`;
//   document.getElementById('state').outerHTML = `<input type="text" id="state" name="state">`;
//   document.getElementById('city').outerHTML = `<input type="text" id="city" name="city">`;

//   // Show submit button again
//   document.getElementById('submit-btn').style.display = 'inline-block';

//   // Hide cancel button
//   document.getElementById('cancel-btn').style.display = 'none';
// }

// function hidePasswordField() {
//     let passwordField = document.getElementById('password');
//     let passwordLabel = document.querySelector('label[for="password"]');

//    if (passwordField) {
//     passwordField.disabled = true; // Make it uneditable
//     passwordField.style.backgroundColor = '#d3d3d3'; // Grey color
//     passwordField.style.color = '#808080'; // Adjust text color
//     passwordField.style.cursor = 'not-allowed'; // Show disabled cursor
// }
// if (passwordLabel) {
//     passwordLabel.style.color = '#808080'; // Grey out the label
// }
// }
// // function updateRow(button) {
// //   rowToUpdate = button.parentElement.parentElement;

// //   hidePasswordField();
// //   document.getElementById('username').value = rowToUpdate.cells[0].textContent;
// //   document.getElementById('email').value = rowToUpdate.cells[1].textContent;
// //   document.getElementById('dob').value = rowToUpdate.cells[2].textContent;
// //   document.getElementById('salary').value = rowToUpdate.cells[3].textContent;
// //   document.getElementById('phone').value = rowToUpdate.cells[4].textContent;
// //   document.getElementById('country').value = getCountryIdByName(rowToUpdate.cells[5].textContent);
// //   document.getElementById('state').value = getStateIdByName(rowToUpdate.cells[6].textContent);
// //   document.getElementById('city').value = getCityIdByName(rowToUpdate.cells[7].textContent);


// //   document.getElementById('submit-btn').textContent = 'Save';

// // }

// function updateRow(button) {
//   rowToUpdate = button.parentElement.parentElement;

//   hidePasswordField(); // Hide or disable the password field
//   document.getElementById('username').value = rowToUpdate.cells[0].textContent;
//   document.getElementById('email').value = rowToUpdate.cells[1].textContent;
//   document.getElementById('dob').value = rowToUpdate.cells[2].textContent;
//   document.getElementById('salary').value = rowToUpdate.cells[3].textContent;
//   document.getElementById('phone').value = rowToUpdate.cells[4].textContent;
//   document.getElementById('country').value = getCountryIdByName(rowToUpdate.cells[5].textContent);
//   document.getElementById('state').value = getStateIdByName(rowToUpdate.cells[6].textContent);
//   document.getElementById('city').value = getCityIdByName(rowToUpdate.cells[7].textContent);

//   // Hide the password field completely
//   document.getElementById('password').style.display = 'none';
//   // document.getElementById('password').value = ''; // Clear password field

//   document.getElementById('submit-btn').textContent = 'Save';
// }

 
// // function updateRow(button) {
// //   rowToUpdate = button.parentElement.parentElement;

// //   hidePasswordField();

// //   document.getElementById('username').value = rowToUpdate.cells[0].textContent;
// //   document.getElementById('email').value = rowToUpdate.cells[1].textContent;
// //   document.getElementById('dob').value = rowToUpdate.cells[2].textContent;
// //   document.getElementById('salary').value = rowToUpdate.cells[3].textContent;
// //   document.getElementById('phone').value = rowToUpdate.cells[4].textContent;
// //   document.getElementById('country').value = getCountryIdByName(rowToUpdate.cells[5].textContent);
// //   document.getElementById('state').value = getStateIdByName(rowToUpdate.cells[6].textContent);
// //   document.getElementById('city').value = getCityIdByName(rowToUpdate.cells[7].textContent);

// //   const passwordField = document.getElementById('password');
// //   if (passwordField) {
// //     passwordField.disabled = true; // Keep it disabled
// //     // passwordField.style.backgroundColor = '#d3d3d3'; // Grey color
// //     passwordField.style.color = '#808080';
// //     passwordField.style.cursor = 'not-allowed';
// //   }

// //   document.getElementById('submit-btn').textContent = 'Save';
// // }



// // function editSavedRow(button) {
// //   const row = button.parentElement.parentElement;

// //   // Get the form fields
// //   const form = document.getElementById('user-form'); // Assuming the form has an ID
// //   const usernameField = document.getElementById('username');
// //   const emailField = document.getElementById('email');
// //   const dobField = document.getElementById('dob');
// //   const salaryField = document.getElementById('salary');
// //   const phoneField = document.getElementById('phone');
// //   const countryField = document.getElementById('country');
// //   const stateField = document.getElementById('state');
// //   const cityField = document.getElementById('city');

// //   hidePasswordField();
// //   // Replace input fields with labels
// //   usernameField.outerHTML = `<label id="username">${row.cells[0].textContent}</label>`;
// //   emailField.outerHTML = `<label id="email">${row.cells[1].textContent}</label>`;
// //   dobField.outerHTML = `<label id="dob">${row.cells[2].textContent}</label>`;
// //   salaryField.outerHTML = `<label id="salary">${row.cells[3].textContent}</label>`;
// //   phoneField.outerHTML = `<label id="phone">${row.cells[4].textContent}</label>`;
// //   countryField.outerHTML = `<label id="country">${row.cells[5].textContent}</label>`;
// //   stateField.outerHTML = `<label id="state">${row.cells[6].textContent}</label>`;
// //   cityField.outerHTML = `<label id="city">${row.cells[7].textContent}</label>`;


// //   // Hide the submit button
// //   // document.getElementById('submit-btn').style.display = 'none';

// //   // Show the cancel button
// //  document.getElementById('cancel-btn').addEventListener('click', function() {
// //     // Reset the form fields
// //     document.getElementById('registration-form').reset();

// //     // Restore password field and label visibility
// //     document.getElementById('password').style.display = 'block';
// //     document.getElementById('password-label').style.display = 'block';

// //     // Change submit button text back to "Submit"
// //     document.getElementById('submit-btn').textContent = 'Submit';

// //     // Clear any row reference for update mode
// //     rowToUpdate = null;
// // });
  
// // }

// function editSavedRow(button) {
//   const row = button.parentElement.parentElement;

//   hidePasswordField();
  
//   // Get the form fields
//   const usernameField = document.getElementById('username');
//   const emailField = document.getElementById('email');
//   const dobField = document.getElementById('dob');
//   const salaryField = document.getElementById('salary');
//   const phoneField = document.getElementById('phone');
//   const countryField = document.getElementById('country');
//   const stateField = document.getElementById('state');
//   const cityField = document.getElementById('city');
//   const passwordField = document.getElementById('password');

//   // Replace input fields with labels
//   usernameField.outerHTML = `<label id="username">${row.cells[0].textContent}</label>`;
//   emailField.outerHTML = `<label id="email">${row.cells[1].textContent}</label>`;
//   dobField.outerHTML = `<label id="dob">${row.cells[2].textContent}</label>`;
//   salaryField.outerHTML = `<label id="salary">${row.cells[3].textContent}</label>`;
//   phoneField.outerHTML = `<label id="phone">${row.cells[4].textContent}</label>`;
//   countryField.outerHTML = `<label id="country">${row.cells[5].textContent}</label>`;
//   stateField.outerHTML = `<label id="state">${row.cells[6].textContent}</label>`;
//   cityField.outerHTML = `<label id="city">${row.cells[7].textContent}</label>`;

//   // Hide the actual password and show asterisks instead
//   if (passwordField) {
//     passwordField.outerHTML = `<input type="password" id="password" value="******" disabled style="background-color: #d3d3d3; color: #808080; cursor: not-allowed;">`;
//   }

//   // Hide the submit button
//   document.getElementById('submit-btn').style.display = 'none';
// }


// function getCountryNameById(id) {
//   const country = countries.find(c => c.id == id);
//   return country ? country.name : 'Unknown';
// }

// function getStateNameById(id) {
//   const state = states.find(s => s.id == id);
//   return state ? state.name : 'Unknown';
// }

// function getCityNameById(id) {
//   const city = cities.find(c => c.id == id);
//   return city ? city.name : 'Unknown';
// }

// function getCountryIdByName(name) {
//   const country = countries.find(c => c.name == name);
//   return country ? country.id : '';
// }

// function getStateIdByName(name) {
//   const state = states.find(s => s.name == name);
//   return state ? state.id : '';
// }

// function getCityIdByName(name) {
//   const city = cities.find(c => c.name == name);
//   return city ? city.id : '';
// }

// let countries = [], states = [], cities = [];

// async function loadLocationData() {
//   try {
//     const [countriesData, statesData, citiesData] = await Promise.all([
//       fetch('./countries.json').then(res => res.json()),
//       fetch('./states.json').then(res => res.json()),
//       fetch('./cities.json').then(res => res.json()),
//     ]);

//     countries = countriesData[2].data;
//     states = statesData[2].data;
//     cities = citiesData[2].data;

//     populateCountries();
//   } catch (error) {
//     console.error('Error loading location data:', error);
//   }
// }

// function populateCountries() {
//   const countrySelect = document.getElementById('country');
//   countrySelect.innerHTML = '<option value="">Select a Country</option>';
//   countries.forEach(country => {
//     const option = document.createElement('option');
//     option.value = country.id;
//     option.textContent = country.name;
//     countrySelect.appendChild(option);
//   });
// }

// function populateStates() {
//   const countryId = document.getElementById('country').value;
//   const stateSelect = document.getElementById('state');
//   stateSelect.innerHTML = '<option value="">Select a State</option>';
//   states.filter(state => state.countryId == countryId).forEach(state => {
//     const option = document.createElement('option');
//     option.value = state.id;
//     option.textContent = state.name;
//     stateSelect.appendChild(option);
//   });
// }

// function populateCities() {
//   const stateId = document.getElementById('state').value;
//   const citySelect = document.getElementById('city');
//   citySelect.innerHTML = '<option value="">Select a City</option>';
//   cities.filter(city => city.stateId == stateId).forEach(city => {
//     const option = document.createElement('option');
//     option.value = city.id;
//     option.textContent = city.name;
//     citySelect.appendChild(option);
//   });
// }

// document.getElementById('phone').addEventListener('input', function(event) {
//   let phoneNumber = event.target.value.replace(/\D/g, '');
//   event.target.value = phoneNumber.length <= 3 ? `(${phoneNumber}` 
//     : phoneNumber.length <= 6 ? `(${phoneNumber.slice(0, 3)})-${phoneNumber.slice(3)}`
//     : `(${phoneNumber.slice(0, 3)})-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
// });

// document.getElementById('country').addEventListener('change', populateStates);
// document.getElementById('state').addEventListener('change', populateCities);

// loadLocationData();

let rowToUpdate = null;

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;
const phoneRegex = /^\(\d{3}\)-\d{3}-\d{4}$/;
const usernameRegex = /^(?=.*\d)[A-Za-z\d]{4,16}$/;

document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const passwordField = document.getElementById('password');
    const password = passwordField ? passwordField.value : "";
    const dob = document.getElementById('dob').value;
    const salary = document.getElementById('salary').value;
    const phone = document.getElementById('phone').value;
    const country = document.getElementById('country').value;
    const state = document.getElementById('state').value;
    const city = document.getElementById('city').value;

    if (!username || !email) {
        alert('Please fill in all required fields.');
        return;
    }

    if (passwordField && passwordField.style.display !== 'none' && !passwordRegex.test(password)) {
        alert('Invalid password format.');
        return;
    }
    if (!phoneRegex.test(phone)) {
        alert('Phone number must be in the format (123)-456-7890.');
        return;
    }
    if (!usernameRegex.test(username)) {
        alert('Username must be between 4 and 16 characters and include at least one number.');
        return;
    }

    if (rowToUpdate) {
        // Update the existing row
        rowToUpdate.cells[0].textContent = username;
        rowToUpdate.cells[1].textContent = email;
        rowToUpdate.cells[2].textContent = dob;
        rowToUpdate.cells[3].textContent = salary;
        rowToUpdate.cells[4].textContent = phone;
        rowToUpdate.cells[5].textContent = getCountryNameById(country);
        rowToUpdate.cells[6].textContent = getStateNameById(state);
        rowToUpdate.cells[7].textContent = getCityNameById(city);

       rowToUpdate = null;  // Clear rowToUpdate *AFTER* the update
        document.getElementById('submit-btn').textContent = 'Submit';
        resetForm(); // Call resetForm to fully reset the form
    } else {
        // Add new row
         addRowToSubmittedTable(username, email, dob, salary, phone, country, state, city);
        document.getElementById('registration-form').reset(); // Clear form fields
        resetForm();
    }
});


function addRowToSubmittedTable(username, email, dob, salary, phone, country, state, city) {
    const tableBody = document.getElementById('submitted-data-body');
    const newRow = tableBody.insertRow();

    newRow.insertCell(0).textContent = username;
    newRow.insertCell(1).textContent = email;
    newRow.insertCell(2).textContent = dob;
    newRow.insertCell(3).textContent = salary;
    newRow.insertCell(4).textContent = phone;
    newRow.insertCell(5).textContent = getCountryNameById(country);
    newRow.insertCell(6).textContent = getStateNameById(state);
    newRow.insertCell(7).textContent = getCityNameById(city);

    const actionCell = newRow.insertCell(8);
    actionCell.innerHTML = `
        <button onclick="updateRow(this)" class="btn btn-primary">Update</button>
        <button onclick="editSavedRow(this)" class="btn btn-info">View</button>
        <button onclick="deleteRow(this)" class="btn btn-danger">Delete</button>
    `;
}

function deleteRow(button) {
    if (confirm("Do you want to delete this row?")) {
        button.parentElement.parentElement.remove();
        resetForm();
    }
}

// function resetForm() {
//     document.getElementById('registration-form').reset();
//     restoreInputFields();
//     document.getElementById('submit-btn').textContent = 'Submit';
//     document.getElementById('submit-btn').style.display = 'inline-block'; // Show submit button
//     rowToUpdate = null; // Clear rowToUpdate in resetForm as well
// }

function resetForm() {
    document.getElementById('registration-form').reset(); // Clear form fields
    restoreInputFields(); // Restore input fields
    document.getElementById('submit-btn').textContent = 'Submit';
    document.getElementById('submit-btn').style.display = 'inline-block';
    rowToUpdate = null; // Clear rowToUpdate

    populateCountries(); // Reset country dropdown
    document.getElementById('state').innerHTML = '<option value="">Select a State</option>'; // Reset state
    document.getElementById('city').innerHTML = '<option value="">Select a City</option>'; // Reset city
}

function restoreInputFields() {
  const fields = ['username', 'email', 'password', 'dob', 'salary', 'phone', 'country', 'state', 'city'];
  fields.forEach(id => {
    const element = document.getElementById(id);
    if (element.tagName === 'LABEL') {
      let newInput = document.createElement('input');
      newInput.type = (id === 'password') ? 'password' : (id === 'dob') ? 'date' : (id === 'salary') ? 'number' : (id === 'email') ? 'email' : 'text';
      newInput.id = id;
      newInput.name = id;
      newInput.className = element.className;  // Maintain any classes
      element.parentNode.replaceChild(newInput, element);
    }
  });
  document.getElementById('password').style.display = 'block'; // Ensure password is visible
}


function hidePasswordField() {
    const passwordField = document.getElementById('password');
    if (passwordField) {
        passwordField.style.display = 'none'; // Hide the password field
    }
}

// document.getElementById('cancel-btn').addEventListener('click', function(event) {
//     event.preventDefault();
//     // Check if we're in "view" mode (labels are present)
//     const usernameField = document.getElementById('username');
//     if (usernameField.tagName === 'LABEL') {  // In view mode
//         resetForm(); // Restore default form
//     } else { // In update mode
//         document.getElementById('registration-form').reset(); // Just reset the form if not in view mode.
//         restoreInputFields();// Restore input fields
//         document.getElementById('submit-btn').textContent = 'Submit';
//         document.getElementById('submit-btn').style.display = 'inline-block';
//         rowToUpdate = null;
//     }
// });

function updateRow(button) {
    rowToUpdate = button.parentElement.parentElement;

    restoreInputFields(); // Restore input fields before populating

    document.getElementById('username').value = rowToUpdate.cells[0].textContent;
    document.getElementById('email').value = rowToUpdate.cells[1].textContent;
    document.getElementById('dob').value = rowToUpdate.cells[2].textContent;
    document.getElementById('salary').value = rowToUpdate.cells[3].textContent;
    document.getElementById('phone').value = rowToUpdate.cells[4].textContent;
    document.getElementById('country').value = getCountryIdByName(rowToUpdate.cells[5].textContent);
    document.getElementById('state').value = getStateIdByName(rowToUpdate.cells[6].textContent);
    document.getElementById('city').value = getCityIdByName(rowToUpdate.cells[7].textContent);

    hidePasswordField();
    document.getElementById('submit-btn').textContent = 'Save';
    document.getElementById('submit-btn').style.display = 'inline-block'; 
}

function editSavedRow(button) {
    const row = button.parentElement.parentElement;
    // DO NOT call restoreInputFields() here.  We want to keep the labels.

    const usernameField = document.getElementById('username');
    const emailField = document.getElementById('email');
    const dobField = document.getElementById('dob');
    const salaryField = document.getElementById('salary');
    const phoneField = document.getElementById('phone');
    const countryField = document.getElementById('country');
    const stateField = document.getElementById('state');
    const cityField = document.getElementById('city');
    const passwordField = document.getElementById('password');

    usernameField.outerHTML = `<label id="username" class="${usernameField.className}">${row.cells[0].textContent}</label>`;
    emailField.outerHTML = `<label id="email" class="${emailField.className}">${row.cells[1].textContent}</label>`;
    dobField.outerHTML = `<label id="dob" class="${dobField.className}">${row.cells[2].textContent}</label>`;
    salaryField.outerHTML = `<label id="salary" class="${salaryField.className}">${row.cells[3].textContent}</label>`;
    phoneField.outerHTML = `<label id="phone" class="${phoneField.className}">${row.cells[4].textContent}</label>`;
    countryField.outerHTML = `<label id="country" class="${countryField.className}">${row.cells[5].textContent}</label>`;
    stateField.outerHTML = `<label id="state" class="${stateField.className}">${row.cells[6].textContent}</label>`;
    cityField.outerHTML = `<label id="city" class="${cityField.className}">${row.cells[7].textContent}</label>`;

    if (passwordField) {
        passwordField.outerHTML = `<input type="password" id="password" value="******" disabled style="background-color: #d3d3d3; color: #808080; cursor: not-allowed;" class="${passwordField.className}">`;
    }

    document.getElementById('submit-btn').style.display = 'none';
}



// function editSavedRow(button) {
//     const row = button.parentElement.parentElement;

//     restoreInputFields(); // Restore input fields before making them labels

//     const usernameField = document.getElementById('username');
//     const emailField = document.getElementById('email');
//     const dobField = document.getElementById('dob');
//     const salaryField = document.getElementById('salary');
//     const phoneField = document.getElementById('phone');
//     const countryField = document.getElementById('country');
//     const stateField = document.getElementById('state');
//     const cityField = document.getElementById('city');
//     const passwordField = document.getElementById('password');

//     usernameField.outerHTML = `<label id="username">${row.cells[0].textContent}</label>`;
//     emailField.outerHTML = `<label id="email">${row.cells[1].textContent}</label>`;
//     dobField.outerHTML = `<label id="dob">${row.cells[2].textContent}</label>`;
//     salaryField.outerHTML = `<label id="salary">${row.cells[3].textContent}</label>`;
//     phoneField.outerHTML = `<label id="phone">${row.cells[4].textContent}</label>`;
//     countryField.outerHTML = `<label id="country">${row.cells[5].textContent}</label>`;
//     stateField.outerHTML = `<label id="state">${row.cells[6].textContent}</label>`;
//     cityField.outerHTML = `<label id="city">${row.cells[7].textContent}</label>`;

//     if (passwordField) {
//         passwordField.outerHTML = `<input type="password" id="password" value="******" disabled style="background-color: #d3d3d3; color: #808080; cursor: not-allowed;">`;
//     }

//     document.getElementById('submit-btn').style.display = 'none';
// }

function getCountryNameById(id) {
  const country = countries.find(c => c.id == id);
  return country ? country.name : 'Unknown';
}

function getStateNameById(id) {
  const state = states.find(s => s.id == id);
  return state ? state.name : 'Unknown';
}

function getCityNameById(id) {
  const city = cities.find(c => c.id == id);
  return city ? city.name : 'Unknown';
}

function getCountryIdByName(name) {
  const country = countries.find(c => c.name == name);
  return country ? country.id : '';
}

function getStateIdByName(name) {
  const state = states.find(s => s.name == name);
  return state ? state.id : '';
}

function getCityIdByName(name) {
  const city = cities.find(c => c.name == name);
  return city ? city.id : '';
}

let countries = [], states = [], cities = [];

async function loadLocationData() {
  try {
    const [countriesData, statesData, citiesData] = await Promise.all([
      fetch('./countries.json').then(res => res.json()),
      fetch('./states.json').then(res => res.json()),
      fetch('./cities.json').then(res => res.json()),
    ]);

    countries = countriesData[2].data;
    states = statesData[2].data;
    cities = citiesData[2].data;

    populateCountries();
  } catch (error) {
    console.error('Error loading location data:', error);
  }
}

function populateCountries() {
  const countrySelect = document.getElementById('country');
  countrySelect.innerHTML = '<option value="">Select a Country</option>';
  countries.forEach(country => {
    const option = document.createElement('option');
    option.value = country.id;
    option.textContent = country.name;
    countrySelect.appendChild(option);
  });
}

function populateStates() {
  const countryId = document.getElementById('country').value;
  const stateSelect = document.getElementById('state');
  stateSelect.innerHTML = '<option value="">Select a State</option>';
  states.filter(state => state.countryId == countryId).forEach(state => {
    const option = document.createElement('option');
    option.value = state.id;
    option.textContent = state.name;
    stateSelect.appendChild(option);
  });
}

function populateCities() {
  const stateId = document.getElementById('state').value;
  const citySelect = document.getElementById('city');
  citySelect.innerHTML = '<option value="">Select a City</option>';
  cities.filter(city => city.stateId == stateId).forEach(city => {
    const option = document.createElement('option');
    option.value = city.id;
    option.textContent = city.name;
    citySelect.appendChild(option);
  });
}

document.getElementById('phone').addEventListener('input', function(event) {
  let phoneNumber = event.target.value.replace(/\D/g, '');
  event.target.value = phoneNumber.length <= 3 ? `(${phoneNumber}` 
    : phoneNumber.length <= 6 ? `(${phoneNumber.slice(0, 3)})-${phoneNumber.slice(3)}`
    : `(${phoneNumber.slice(0, 3)})-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
});

document.getElementById('country').addEventListener('change', populateStates);
document.getElementById('state').addEventListener('change', populateCities);

loadLocationData();

