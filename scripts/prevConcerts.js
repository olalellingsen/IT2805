
class concert {
  constructor(date, name, timeOfDay, place) {
    this.name = name
    this.date = date
    this.timeOfDay = timeOfDay
    this.place = place
  }
}


//legg til nye konserter her
const concerts = [
  
  new concert('25.03.2023','Ella & Frank Meets Basie', '20:00', 'Cosmopolite, Oslo'),
  new concert('18.02.2023','Det Rekomponerte Nye', '20:00', 'Dokkhuset Scene, Trondheim'),
  new concert('16.02.2023','Det Rekomponerte Nye', '20:00', 'Victoria Nasjonal Jazzscene, Oslo'),
  new concert('16.12.2022','NSBs jul', '20.00', 'Ilen Kirke, Trondheim'),
  new concert('15.12.2022','NSBs jul', '20.00', 'Parkbiografen, Skien'),
  new concert('14.12.2022','NSBs jul', '20.00', 'St.Croixhuset, Fredrikstad'),
  new concert('13.12.2022','NSBs jul', '20.00', 'Lillestrøm kultursenter, Lillestrøm'),
  new concert('06.12.2022','NSBs jul', '20.00', 'Parkteatret, Oslo'),
  new concert('12.11.2022','NSB spiller seg selv', '', 'SALT Art & Music, Oslo'),
  new concert('15.10.2022','Bridge over MeToo m/Shannon Mowday', '', 'Storbandfestivalen, Lillestrøm'),

  new concert('18.06.2022','NSB spiller Thad Jones', '20.00', 'Lancelot, Asker'),
  new concert('03.03.2022', 'NSB + Orch', '', 'Marmorsalen Sentralen, Oslo'),
  new concert('17.12.2021', 'NSBs Jul', '', 'St. Croix-huset, Frederikstad (avlyst)'),
  new concert('15.12.2021', 'NSBs Jul', '','Dokkhuset, Trondheim (avlyst)'),
  new concert('15.12.2021', 'NSBs Jul','', 'Dokkhuset, Trondheim (avlyst)'),
  new concert('14.12.2021', 'NSBs Jul','', 'Parkteateret, Oslo (avlyst)'),
  new concert('14.12.2021', 'NSBs Jul','', 'Parkteateret, Oslo (avlyst)'),
  new concert('13.12.2021', 'NSBs Jul','', 'USF Verftet, Bergen'),
  new concert('10.12.2021', 'NSBs Jul','', 'Hamar Kulturhus, Hamar'),
  new concert('22.11.2021', 'Ibsensangene m/ Magnus Mrphy og Schola Cantorum','', 'Cosmopolite, Oslo'),
  new concert('09.10.2021', 'Bridge over MeToo m/ Shannon Mowday','', 'Dokkhuset, Trondheim'),
  new concert('07.10.2021', 'Bridge over MeToo m/ Shannon Mowday','', 'Cosmopolite, Oslo'),
  new concert('16.10.2021', 'Tellus','', 'Lillestrøm Storbandfestival'),
  new concert('30.08.2021', 'Tellus','', 'SALT Art & Music, Oslo'),
  new concert('28.08.2021', 'Tellus','', 'Nabolagsfestivalen på Grefsen, Oslo'),
  new concert('18.06.2021', 'Bridge over MeToo m/ Shannon Mowday','', 'Marmorsalen Sentralen, Oslo'),
  new concert('12.12.2020', 'NSBs Jul','', 'Sardinen USF, Bergen (avlyst)'),
  new concert('11.12.2020', 'NSBs Jul','', 'St. Petri Kirke, Stavanger (avlyst)'),
  new concert('10.12.2020', 'Livinnspilling av NSBs Jul','', 'Marmorsalen Sentralen, Oslo'),
  new concert('09.12.2020', 'NSBs Jul','', 'Home Work Space, Hamar (avlyst)'),
  new concert('10.122020', 'Liveinnspilling','', 'Home Work Space, Oslo'),
  new concert('4.03.2020', 'NSB + Orch','', 'Marmorsalen Sentralen, Oslo (avlyst)'),
  new concert('28.11.2019', 'NSBs Jul','', 'Ingensteds, Oslo'),
  new concert('28.11.2019', 'Kampenfestivalen 2019','', 'Kampen Kirke, Oslo'),
  new concert('12.08.2019', 'NSB feat. Knut Riisæs på Oslo Jazzfestival','', 'Nasjonal Jazzscene, Oslo'),
  new concert('22.06.2019', 'Konsertpå Nordic Black Theatre','', 'Nordic Black Theatre, Oslo'),
  new concert('12.08.2018', 'NSB + Akershus Ungdomsjazzorkster, Oslo Jazzfestival','', 'Nasjonal Jazzscene, Oslo'),
  new concert('31.03.2018', 'NSB + Akerhus Ungdomsjazzorkester','', 'Trikkehallen, Oslo'),
  new concert('14.08.2017', 'NSB på Oslo Jazzfestival,','', 'Sentralen, Oslo'),
  new concert('14.08.2017','NSB på Trikkehallen','', 'Trikkehallen, Oslo')
]

//check if date is in the past
function isInThePast(dateStr) {
  // dateStr format should be dd.mm.yyyy.
  var d = parseInt(dateStr.substring(0,2));
  var m = parseInt(dateStr.substring(3,5));
  var y = parseInt(dateStr.substring(6,10));
  var date = new Date(y, m-1, d);
  var today = new Date()
  today.setHours(0,0,0,0)
  return date < today
}

for (let i = 0; i < concerts.length; i++) {
    const concert = concerts[i]

    if (isInThePast(concert.date)) {
        const node = document.createElement('p')
        node.innerText = concert.date + ' // '+ concert.name+' // '+concert.place
        document.getElementById('prev-concerts').appendChild(node)

    } 
    /* else {
        console.log(i)
        const node = document.createElement('p')
        node.innerText = concert.date+ ' kl' +concert.timeOfDay+'\n' + concert.name + '\n' + concert.place
        document.getElementById('upcoming-concerts').appendChild(node)
    } */
}

