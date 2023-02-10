const table = document.querySelector('#table-body')

const records = [
  ['home.html', 'Hovedsiden som er den første siden brukeren kommer til når hen åpner siden.', 'William', '20.10.2021'],
  ['about.html', 'Informasjonsside om bandet', 'William', '20.10.2021'],
  ['contact.html', 'Side med kontaktinformasjon.', 'Ola', '20.10.2021'],
  ['members.html', 'En side med oversikt over medlemmene', 'Mats', '20.10.2021'],
  ['projects.html', 'Et og et bilde med tilhørende tekst om konserter/prosjekter bandet har gjennomført/skal gjennomføre. Brukeren kan scrolle nedover for å få frem hvert prosjekt.', 'Simen', '20.10.2021'],
  ['style.css', 'Stylesheet for hele nettsiden', 'Alle', '9.11.2021'],
  ['logo.png', '', 'Ola', '11.10.2021'],
  ['images/ folder', '', 'Ola', '11.10.2021'],
  ['sortCalendar.js', 'Javascript-fil som looper gjennom et array av kalender-objekter for å sortere kalenderen.', 'Simen', '3.11.2021'],
  ['sizeImage.js', 'Javascript-fil som manipulerer CSS-formateringen til et bilde.', 'Eskild', '3.11.2021'],
  ['transformProject.js', 'Javascript-fil som endrer CSS-formateringen til et div-element.', 'Simen', '3.11.2021'],
  ['slideshow.js', 'Javascript-fil som endrer bildet som vises i seksjonen.', 'Ola', '3.11.2021'],
  ['contact.js', 'JavaScript-fil som validerer og “sender” kontaktskjema', 'Mats', '3.11.2021'],
  ['Siste sjekk', 'Dobbeltsjekke alt for feil', 'Alle', '11.11.2021']
]

for (const [page, description, owner, date] of records) {
  const row = document.createElement('tr')
  for (const child of [page, description, owner, date]) {
    const cell = document.createElement('td')
    const text = document.createTextNode(child)
    cell.appendChild(text)
    row.appendChild(cell)
  }
  table.appendChild(row)
}