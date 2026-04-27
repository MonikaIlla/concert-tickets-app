// Ticket purchase logic
let purchasedTickets = [];

document.getElementById('buyBtn').addEventListener('click', () => {
    const ticketSelect = document.getElementById('ticketType');
    const quantity = parseInt(document.getElementById('quantity').value);
    const price = parseInt(ticketSelect.value);
    const ticketType = ticketSelect.options[ticketSelect.selectedIndex].text;
    
    if (quantity < 1 || quantity > 10) {
        alert('Please select a quantity between 1 and 10');
        return;
    }
    
    const total = price * quantity;
    const ticket = {
        id: Date.now(),
        type: ticketType,
        quantity: quantity,
        price: price,
        total: total,
        timestamp: new Date().toLocaleString()
    };
    
    purchasedTickets.push(ticket);
    updateTicketList();
    showTotal(total);
    
    // Reset quantity to 1 after purchase
    document.getElementById('quantity').value = 1;
});

function showTotal(total) {
    const totalDisplay = document.getElementById('totalDisplay');
    totalDisplay.innerHTML = `💰 Total Amount: $${total} USD`;
    totalDisplay.style.animation = 'fadeIn 0.3s ease-in';
    setTimeout(() => {
        totalDisplay.style.animation = '';
    }, 300);
}

function updateTicketList() {
    const ticketList = document.getElementById('ticketList');
    if (purchasedTickets.length === 0) {
        ticketList.innerHTML = '<li style="color: #999;">No tickets purchased yet.</li>';
        return;
    }
    
    ticketList.innerHTML = purchasedTickets.map(ticket => `
        <li>
            🎫 ${ticket.type} x${ticket.quantity} = $${ticket.total} 
            <small style="color: #999;">(${ticket.timestamp})</small>
        </li>
    `).join('');
}

// Initialize
updateTicketList();
