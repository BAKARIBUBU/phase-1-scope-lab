// helpers.js

// Declare customerName globally
window.customerName = 'bob';

// Function to uppercase customerName
function upperCaseCustomerName() {
  window.customerName = window.customerName.toUpperCase();
}

// Function to set bestCustomer
function setBestCustomer() {
  window.bestCustomer = 'not bob';
}

// Function to overwrite bestCustomer
function overwriteBestCustomer(newBestCustomer) {
  window.bestCustomer = newBestCustomer;
}

// Constant variable for least favorite customer
const leastFavoriteCustomer = 'someone';

// Function to change least favorite customer
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else'; // This should throw an error
}

// Export functions if using Node.js or similar environment
