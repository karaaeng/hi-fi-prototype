
const profilesList = [
  {image: require('../Images/Profiles/harold.jpg'), selected: "profile", name: "Cat", location: "Las Vegas", pronouns: "she/her", interests: "music, dogs, coffee", status: "available"},
  
]

const profiles = {
  harold: profilesList[0],
  barbara: profilesList[1],
  james: profilesList[2],
  john: profilesList[3],
  linda: profilesList[4],
  liz: profilesList[5],
  mary: profilesList[6],
  michael: profilesList[7],
  patricia: profilesList[8],
  robert: profilesList[9],

  random: () => {
    return profilesList[Math.floor(Math.random() * 10)]
  }

}

export default profiles
