
const profilesList = [
  {image: require('../Images/Profiles/cat.jpg'), name: "Cat D.", location:"Stanford, CA", pronouns: "she/her", interests: "music, coffee dogs", status: "asking"},
  {image: require('../Images/kara.jpg'), name: "Kara E.", location:"Los Angeles, CA", pronouns: "she/her", interests: "knitting, dogs, reading", status: "open"},
  {image: require('../Images/isabella.jpeg'), name: "Isa F.", location:"Newport Beach CA", pronouns: "she/her", interests: "travelling, running", status: "asking"},
  {image: require('../Images/wilder.png'), name: "Wilder F.", location:"London", pronouns: "he/him", interests: "tennis, video games", status: "asking"},
  {image: require('../Images/christian.jpg'), name: "Christian D.", location:"London", pronouns: "he/him", interests: "video games, basketball", status: "open"},
  {image: require('../Images/cal.png'), name: "Cal T.", location:"Las Vegas, NV", pronouns: "he/him", interests: "surfing, music, rugby", status: "on hold"},
  {image: require('../Images/eden.jpg'), name: "Eden M.", location:"Stanford, CA", pronouns: "she/her", interests: "music, film, volleyball", status: "asking"},
  {image: require('../Images/marie.jpg'), name: "Marie B.", location:"Newport Beach, CA", pronouns: "she/her", interests: "running, cats", status: "asking"},

]

const profiles = {
  cat: profilesList[0],
  kara: profilesList[1],
  isa: profilesList[2],
  wilder: profilesList[3],
  christian: profilesList[4],
  cal: profilesList[5],
  eden: profilesList[6],
  marie: profilesList[7],

  random: () => {
    return profilesList[Math.floor(Math.random() * 10)]
  }

}

export default profiles
