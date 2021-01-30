var BookNow = document.getElementById("book-now").addEventListener("click",function(){
    var BookingFrom = document.getElementById("booking-form");
    BookingFrom.style.display= "none";

    var BookingFrom = document.getElementById("confirmation-message");
    BookingFrom.style.display= "block";
});

var increaseFristClass = document.getElementById("increase-frist-class").addEventListener('click',function(){
    ticketsNumberCounter(true, "first-class-tickets");
    total();
})

var increaseFristClass = document.getElementById("decrease-frist-class").addEventListener('click',function(){
    ticketsNumberCounter(false, "first-class-tickets");
    total();
})

var increaseFristClass = document.getElementById("increase-economy-class").addEventListener('click',function(){
    ticketsNumberCounter(true, "economy-class-tickets");
    total();
})

var increaseFristClass = document.getElementById("decrease-economy-class").addEventListener('click',function(){
    ticketsNumberCounter(false, "economy-class-tickets");
    total();
})



function ticketsNumberCounter(isIncrese, tickets){
    var firstClassTickets = document.getElementById(tickets).value;
    var firstClass = parseInt(firstClassTickets);
    var increaseTickets = firstClass;
    if(isIncrese == true){
        increaseTickets = increaseTickets+1;
    }
    if(isIncrese == false && increaseTickets > 0){
        increaseTickets = increaseTickets-1;
    }
    document.getElementById(tickets).value = increaseTickets;
}


function total(){
    var firstTicketAll = document.getElementById("first-class-tickets").value;
    var firstTicketAllInt = parseInt(firstTicketAll);

    var ecomonyTicketAll = document.getElementById("economy-class-tickets").value;
    var ecomonyTicketAllInt = parseInt(ecomonyTicketAll);

    var firstTotal = firstTicketAllInt*150;
    var economyTotal = ecomonyTicketAllInt*100;
    var subtotal = firstTotal + economyTotal;
    document.getElementById("subtotal").innerText=subtotal;

    var tax = subtotal*0.1;
    document.getElementById("vat").innerText = tax;

    var total = subtotal + tax;
    document.getElementById("total-amount").innerText = total;
}