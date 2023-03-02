// currency converter app, bill split App
// console.log('app.js is connected!!');
// var => var, let and const

function splitBill(){
    let amount  = document.getElementById('amount').value;
    let persons = document.getElementById('persons').value;
    let bill = amount / persons;
    document.getElementById('bill').innerHTML = bill;
}