class concert {
    constructor(date, name, timeOfDay, place, ticketLink) {
      this.name = name
      this.date = date
      this.timeOfDay = timeOfDay
      this.place = place
      this.ticketLink = ticketLink
    }
  }

//legg til nye konserter her
const upcomingConcerts = [
   
  ]
  
  
  
  for (let i = 0; i < upcomingConcerts.length; i++) {
    const nextConcert = upcomingConcerts[i]
    const node = document.createElement('p')
  
    //ticket link
    const a = document.createElement('a'); 
    a.title = "Billetter";  
    a.href = nextConcert.ticketLink
  
    //display text in calendar
    node.innerText = nextConcert.date + ', '+nextConcert.timeOfDay + '\n- ' + nextConcert.name+'\n@ '+nextConcert.place+ '\n '+'\n\n'
    document.getElementById('upcoming-concerts').appendChild(node)
  }