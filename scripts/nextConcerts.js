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
    new concert('16.02.2023','Det Rekomponerte Nye', '20:00', 'Victoria Nasjonal Jazzscene, Oslo', 'https://victoria.ticketco.events/no/nb/e/det_nye_norske_storband'),
    new concert('18.02.2023','Det Rekomponerte Nye', '20:00', 'Dokkhuset Scene, Trondheim', 'https://dokkhuset.hoopla.no/sales/event/dennyenorskerekomponert'),
    new concert('25.03.2023','Ella & Frank Meets Basie', '20:00', 'Cosmopolite, Oslo', '')
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