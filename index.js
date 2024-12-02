var customerName = 'bob';

function upperCaseCustomerName () {
 customerName = customerName.toUpperCase();

}

//3. setbestcustomer
var bestCustomer;

function setBestCustomer () {
    bestCustomer = 'not bob';
}


//overwrite bestcustomer

let BestCustomer;

function setBestCustomer () {
    bestCustomer = 'not bob';
}


function overwriteBestCustomer () {
 bestCustomer = 'maybe bob';
}

//changeleast
const LeastFavoriteCustomer = 'bob';
function changeLeastFavoriteCustomer () {
    LeastFavoriteCustomer = 'joy';
}
