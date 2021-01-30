var BookNow = document.getElementById("book-now").addEventListener("click",function(){
    var BookingFrom = document.getElementById("booking-form");
    BookingFrom.style.display= "none";
    var BookingContent = document.getElementById("booking-content");
    BookingContent.style.display= "none";

    var message = document.getElementById("confirmation-message");
    message.style.display= "block";
});

var increaseFristClass = document.getElementById("increase-frist-class").addEventListener('click',function(){
    ticketsNumberCounter(true, "first-class-tickets");
    sumOfAllTickets();
})

var increaseFristClass = document.getElementById("decrease-frist-class").addEventListener('click',function(){
    ticketsNumberCounter(false, "first-class-tickets");
    sumOfAllTickets();
})

var increaseFristClass = document.getElementById("increase-economy-class").addEventListener('click',function(){
    ticketsNumberCounter(true, "economy-class-tickets");
    sumOfAllTickets();
})

var increaseFristClass = document.getElementById("decrease-economy-class").addEventListener('click',function(){
    ticketsNumberCounter(false, "economy-class-tickets");
    sumOfAllTickets();
})


// the function below will find out the number of tickets.....
function ticketsNumberCounter(isIncrese, tickets){
    var totalTickets = document.getElementById(tickets).value;
    var firstClass = parseInt(totalTickets);
    var increaseTickets = firstClass;
    if(isIncrese == true){
        increaseTickets = increaseTickets+1;
    }
    if(isIncrese == false && increaseTickets > 0){
        increaseTickets = increaseTickets-1;
    }
    document.getElementById(tickets).value = increaseTickets;
}


// the function below will sum all the tickets price....
function sumOfAllTickets(){
    var firstTickets = document.getElementById("first-class-tickets").value;
    var totalFirstClass = parseInt(firstTickets);

    var ecomonyTickets = document.getElementById("economy-class-tickets").value;
    var totalEconomyClass = parseInt(ecomonyTickets);

    var fristClassPrice = totalFirstClass*150;
    var economyClassPrice = totalEconomyClass*100;
    var subtotal = fristClassPrice + economyClassPrice;
    document.getElementById("subtotal").innerText=subtotal;

    var tax = subtotal*0.1;
    document.getElementById("vat").innerText = tax;

    var total = subtotal + tax;
    document.getElementById("total-amount").innerText = total;
}