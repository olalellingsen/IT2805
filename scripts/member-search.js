const memberSearchInput = document.querySelector('#member-search-input')
const instrumentSearchInput = document.querySelector('#instrument-search-input')
const memberList = document.querySelector('#member-list')

/**
 * This is static data which will be used to dynamically generate all of the
 * member cards. It's also made easily editable by the people who will
 * maintain the website.
 */
const members = [
  { image: '/images/band-members/NSBportretter-nett@veronicavangroningen-10.jpg', name: 'Oskar Lindeberget', instrument: 'Altsax/Sopransax',category: 'Saxofon' },
  { image: '/images/band-members/NSBportretter-nett@veronicavangroningen-2.jpg', name: 'Aksel Rønning', instrument: 'Altsax/Fløyte', category: 'Saxofon'},
  { image: '/images/band-members/NSBportretter-nett@veronicavangroningen-37.jpg', name: 'Erik Egge Jordheim', instrument: 'Tenorsax',category: 'Saxofon' },
  { image: '/images/band-members/NSBportretter-nett@veronicavangroningen-6.jpg', name: 'Zakarias Meyer Øverli', instrument: 'Tenorsax', category: 'Saxofon' },
  { image: '/images/band-members/sol.jpg'                                      , name: 'Sol Léna-Schroll', instrument: 'Barytonsax',category: 'Saxofon' },

  { image: '/images/band-members/NSBportretter-nett@veronicavangroningen-32.jpg', name: 'Jørgen Bjelkerud', instrument: 'Trombone',category: 'Trombone/Tuba' },
  { image: '/images/band-members/peter.jpg'                                     , name: 'Peter Robertstad', instrument: 'Trombone',category: 'Trombone/Tuba' },
  { image: '/images/band-members/NSBportretter-nett@veronicavangroningen-41.jpg', name: 'Astrid Ombudstvedt', instrument: 'Trombone' ,category: 'Trombone/Tuba'},
  { image: '/images/band-members/NSBportretter-nett@veronicavangroningen-17.jpg', name: 'Jesper Kramer-Johansen', instrument: 'Tuba/Cimbasso' ,category: 'Trombone/Tuba'},

  { image: '/images/band-members/NSBportretter-nett@veronicavangroningen-26.jpg', name: 'Henrik Smelhus Sjøeng', instrument: 'Trompet' ,category: 'Trompet'},
  { image: '/images/band-members/NSBportretter-nett@veronicavangroningen-47.jpg', name: 'Ola Lømo Ellingsen', instrument: 'Trompet' ,category: 'Trompet'},
  { image: '/images/band-members/kristina.jpg'                                  , name: 'Kristina Fransson', instrument: 'Trompet' ,category: 'Trompet'},
  { image: '/images/band-members/NSBportretter-nett@veronicavangroningen-30.jpg', name: 'Oscar Andreas Haug', instrument: 'Trompet' ,category: 'Trompet'},

  { image: '/images/band-members/NSBportretter-nett@veronicavangroningen-15.jpg', name: 'Konstantin Helmers', instrument: 'Gitar/Fiolin' ,category: 'Komp'},
  { image: '/images/band-members/NSBportretter-nett@veronicavangroningen-23.jpg', name: 'Philip Granly', instrument: 'Piano' ,category: 'Komp'},
  { image: '/images/band-members/hakon.jpg'                                     , name: 'Håkon Huldt-Nystrøm', instrument: 'Bass' ,category: 'Komp'},
  { image: '/images/band-members/NSBportretter-nett@veronicavangroningen-35.jpg', name: 'Trym Saugstad Karlsen', instrument: 'Trommer' ,category: 'Komp'},

]

/** Simple .reduce to gather all the unique .instrument keys from the members */
const allInstruments = members.reduce((acc, member) => {
  // If the current instrument is not in the accumulative list, add it
  if (!acc.includes(member.category)) {
    acc.push(member.category)
  }
  return acc
}, [])

/** Populate the <select> element with all the instruments */
for (const instrument of allInstruments) {
  const option = document.createElement('option')
  option.value = instrument
  option.innerText = instrument
  instrumentSearchInput.appendChild(option)
}

/**
 * Code to execute when the list of member cards shown to the visitor has
 * changed. This is triggered when the user uses the search field or select
 * dropdown.
 */
const onMemberListUpdate = (members) => {
  // Delete all the existing children in the grid <div>.
  let child = memberList.firstChild
  while (child !== null) {
    memberList.removeChild(child)
    child = memberList.firstChild
  }

  // Go through all of the members who are to be inserted into the grid.
  // This is ES6 destructuring, which is a fancy way of grabbing the keys of the object
  // as individual variables.
  for (const { image, name, instrument } of members) {
    const root = document.createElement('div')
    const img = document.createElement('img')
    const h = document.createElement('h1')
    const p = document.createElement('p')

    // Create the data for the member card
    img.src = image
    h.innerText = name
    p.innerText = instrument

    root.append(img, h, p)
    memberList.appendChild(root)
  }
}

// When the search field is changed, filter the members based on the search
memberSearchInput.addEventListener('input', () => {
  const searchValue = memberSearchInput.value.toLowerCase()
  // Grab all members whose name include the search term.
  const filteredMembers = members.filter(member => member.name.toLowerCase().includes(searchValue))
  // Update the UI with the members matching the criteria
  onMemberListUpdate(filteredMembers)
})

instrumentSearchInput.addEventListener('change', () => {
  const searchValue = instrumentSearchInput.value
  if (searchValue === "all") {
    // If the default select option was selected again, we want to display
    // all of the members.
    onMemberListUpdate(members)
  } else {
    // Grab all members who play the selected instrument.
    const filteredMembers = members.filter(member => member.category === searchValue)
    onMemberListUpdate(filteredMembers)
  }
})

// Initially render all of the members. If this function call was not here,
// the member grid would be empty when the user loaded the site.
onMemberListUpdate(members)
