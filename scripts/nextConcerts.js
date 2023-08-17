
  class Concert {
    constructor(date, name, timeOfDay, place, ticketLink) {
      this.name = name;
      this.date = date;
      this.timeOfDay = timeOfDay;
      this.place = place;
      this.ticketLink = ticketLink;
    }
  }
  
  // Legg til nye konserter her
  const upcomingConcerts = [
    new Concert('27.08', 'NSB feat. Adam Rapa', '18:00', 'Sentralen', 'https://tix.no/nb/sentralen/buyingflow/tickets/23350/44922'),
  ];
  
  for (let i = 0; i < upcomingConcerts.length; i++) {
    const nextConcert = upcomingConcerts[i];
    const node = document.createElement('p');
  
    // Ticket link
    const a = document.createElement('a');
    a.title = 'Billetter';
    a.href = nextConcert.ticketLink;
    a.innerText = 'Kjøp billetter';
  
    // Display text in calendar
    node.innerText = '\n'+nextConcert.date + ', ' + nextConcert.timeOfDay + '\n' + nextConcert.name + '\n@' + nextConcert.place + '\n ';
    node.appendChild(a);
    document.getElementById('upcoming-concerts').appendChild(node);
  }
  