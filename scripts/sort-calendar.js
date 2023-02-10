//denne brukes ikke lenger! se conserts.js


const theCalendar = document.getElementById('upcoming-concerts')

class concert {
  constructor(date, name, timeOfDay, place) {
    this.name = name
    this.date = date
    this.timeOfDay = timeOfDay
    this.place = place
  }
}

class Calendar {
  constructor(events) {
    this.events = events
  }
}

const upcomingConcerts = new Calendar([
  new concert('16.12.2022','NSBs jul', '20.00', 'Ilen Kirke, Trondheim'),
  new concert('15.12.2022','NSBs jul', '20.00', 'Parkbiografen, Skien'),
  new concert('14.12.2022','NSBs jul', '20.00', 'St.Croixhuset, Fredrikstad'),
  new concert('13.12.2022','NSBs jul', '20.00', 'Lillestrøm kultursenter, Lillestrøm'),
  new concert('06.12.2022','NSBs jul', '20.00', 'Parkteatret, Oslo'),
  new concert('12.11.2022','NSB spiller seg selv', '', 'SALT Art & Music, Oslo'),
  new concert('15.10.2022','Bridge over MeToo m/Shannon Mowday', '', 'Storbandfestivalen, Lillestrøm'),
])

function isInThePast(dateStr) {
  // dateStr format should be dd/mm/yyyy. Separator can be anything e.g. / or -. It wont effect
  var d = parseInt(dateStr.substring(0,2));
  var m = parseInt(dateStr.substring(3,5));
  var y = parseInt(dateStr.substring(6,10));

  var date = new Date(y, m-1, d);
  var today = new Date()
  today.setHours(0,0,0,0)
  
  return date < today
}

for (let i = 0; i < upcomingConcerts.events.length; i++) {
  const concert = document.createElement('p')
  const eventInQ = upcomingConcerts.events[i]

  concert.innerText = eventInQ.date+ ' kl' +eventInQ.timeOfDay+'\n' + eventInQ.name + '\n' + eventInQ.place

  theCalendar.appendChild(concert)
}
















