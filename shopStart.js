var nums = [1, 2, 3, 4];
var items = ["Coke", "Kit Kat", "Bar One", "Fanta"];
var prices = [7.5, 9.5, 8.5, 7.5];
var quantities = [0, 0, 0, 0];
var totals = [0.0, 0.0, 0.0, 0.0];
var totalOrderAmt = 0;

function add_selection(x) {
    console.log(x);
    quantities[x] = quantities[x] + 1;
    totals[x] = prices[x] * quantities[x];
    totalOrderAmt += prices[x];

    --display_all();
}

function remove_selection(x) {
if(quantities[x]>=1)
   {
    console.log(x);
    quantities[x] = quantities[x] -1;
    totals[x] = totals[x]-prices[x];
    totalOrderAmt -= prices[x];
   }

    --display_all();
}


 


function display_all() {



    var myTable = "<table><th style='width: 100px; color: red; text-align: right;'>Num</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Item</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Price</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Quantity</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Total</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Add</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Add</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Remove</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Remove</th>";

    for (i = 0; i < items.length; i++) {
        myTable += "<tr><td style='width: 100px; text-align: right;'>" + nums[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + items[i] + "</td><";
        myTable += "<td style='width: 100px; text-align: right;'>" + prices[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + quantities[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + totals[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'<button onclick='add_selection(" + i + ")'>Add</button></td>";
        myTable += "<td style='width: 100px; text-align: right;'><button onclick='add_selection(" + i + ")'>Add</button></td>";
	myTable += "<td style='width: 100px; text-align: right;'<button onclick='remove_selection(" + i + ")'>Remove</button></td>";
        myTable += "<td style='width: 100px; text-align: right;'><button onclick='remove_selection(" + i + ")'>Remove</button></td>";
 	//myTable += "<td style='width: 100px; text-align: right;'><button onclick='checkout()'>Checkout</button></td>";
    }

    myTable += "</table>";

 //myTable += "<br/><button onclick='showtot()'>Checkout</button>";
//myTable += "<br/><br/><p>Total: " + totalOrderAmt + "</p>";
 


    // document.write(myTable);
    document.getElementById("demo").innerHTML = myTable;
	
	 const MyButton = document.getElementById('MyButton');
    //Add on click listener for button
    MyButton.addEventListener('click', function() 
	{document.getElementById('total').innerHTML =  "Total:" + totalOrderAmt  ;	})
}

window.onload = function() {
    display_all();
}
