// Require mysql and inquierer to run app.
var mysql = require("mysql");
var inquirer = require("inquirer");
		var choiceArray = [];
		
// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 8889,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon_db"
});

// FROM EXCERCISE 10 ON 10.12.2017
// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  start();  // run the start function after the connection is made to prompt the user
});

// function which prompts the user for what action they should take
function start() {
  inquirer
    .prompt({
      name: "welcome",
      message: "Welcome to 'Daily W.O.D. Gear' by Bamazon. \nHere are our daily items for sale. Hit enter to continue.",
    })
    .then(function(answer) {
      afterConnection();
      // selectItem();
    });
}

function afterConnection() {
	// LISTS THE ITEMS THAT ARE AVAILABLE IN THE STORE
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++){
    	console.log("Product ID: " + res[i].item_id + " | " + res[i].product_name.toUpperCase() + " | Dept:" + res[i].department_name.toUpperCase() + " | $" + res[i].price + " | Stock:" + res[i].quantity);
    }
    // console.log(res);
    console.log("-----------------------------------");
    // connection.end();
    selectItem();
  });
}

//  THIS IS THE SECTION THAT I CAN'T GET TO WORK.  IT PUSHES TO THE ARRAY, BUT THEN NO IDEA WHAT IT IS DOING
 // AFTERWARDS OR HOW TO FIX THE ISSUE OF ITEMS BEING DISPLAYED AS 'UNDEFINED'.
function selectItem() {
	// SHOWS THE ITEMS IN THE DATABASE WITH QUANTITIES LARGER THAN 0. OTHER WORDS, ONLY ITEMS IN STOCK.
	connection.query("SELECT * FROM products WHERE quantity > 0;", function(err, res) {
	 	 if (err) throw err;

		for (var i = 0; i < res.length; i++) {
	  		choiceArray.push({productName: res[i].product_name.toUpperCase(), quantity: res[i].quantity});
	  		console.log("Choice Array: " + choiceArray[i].productName + " | " + "Quantity: " + choiceArray[i].quantity);
		    // once you have the items, prompt the user for which they'd like to buy
		 }
	    inquirer
	      .prompt([
	        {
	        	name: "choice",
	        	type: "list",
	        	// NOT SURE WHY THIS IS HERE.  CONSOLE.LOG THE ARRAY JUST SHOWS THE LOOPED ITEMS.
	              // IS THIS EVEN NEEDED? I DON'T KNOW...
	        	choices: choiceArray,
	          	message: "What item would you like to purchase?"
	        },
	    	{
	      		type: "confirm",
	      		message: "Are you sure:",
	      		name: "confirm",
	      		default: true
	    	}
	      ])
	      .then(function(answer) {
	      	console.log("------------------");
	      	console.log(answer);  // SHOWS THE SELECTION AS AN 'UNDEFINED' ITEM. NOTHING ELSE TO DO SO IT ENDS THE CONNECTION.


      //GET TO HERE AND APPLICATION QUITS. HONESTLY, I DON'T KNOW WHAT I'M DOING... JUST COPYING, PASTING
      // AND HOPING FOR THE BEST... SO FAR NOT SO GREAT.  :(

      // I KNOW I WANT TO CHECK TO SEE IF THE ITEM SELECTED IS IN STOCK.
     
      // IF IT IS IN STOCK, REMOVE FROM STOCK AND UPDATE THE SQL DATABASE. THEN SHOW THE CUSTOMER
        // THE TOTAL COST OF THEIR ORDER.
     
      // IF NOT IN STOCK, POST A MESSAGE OF "INSUFFICIENT STOCK. PLEASE LOWER QUANTITY".

      	// get quantity
      	// make sure you have enough in stock
      		// "SELECT quantity FROM products
      		// WHERE product_name = '" + answer.choice + " ' ";  how to pass a sting into the SQL
      	// show total cost of order
      	// update db quantity
      		// look up the UPDATE syntax for Workbench

      		});
	    });
     connection.end();
}
