interface TicketProps{
    destination: string,
    price: number,
    status: string;
}

class Ticket implements TicketProps {
    public destination: string;
    public price: number;
    public status: string;

    constructor(destination: string, price: number, status: string) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

function sortTickets(tickets: string[], criteria: string):void {
    const resultArray: Ticket[] = [];
    for (let ticket of tickets) {
        const ticketProps = ticket.split("|");
        const destination = ticketProps[0];
        const price = Number(ticketProps[1]);
        const status = ticketProps[2];
        resultArray.push(new Ticket(destination, price, status));
    }
    let sortedArray: Ticket[] = [];
    switch (criteria) {
        case "destination":
            sortedArray = resultArray.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case "price":
            sortedArray = resultArray.sort((a, b) => a.price - b.price);
            break;
        case "status":
            sortedArray = resultArray.sort((a, b) => a.status.localeCompare(b.status));
            break;
    }
    console.log(sortedArray);
}

const inputArray = [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
]
const inputCriteria = "status";
sortTickets(inputArray, inputCriteria);
