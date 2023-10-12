//Exo 1 : LE TAXI
let Personnage = {
    Prenom: 'John',
    SanteMentale: 10
}

let ListeMusic = [
    'Anissa - Wejdenne',
    'My Eyes - Travis Scott',
    'Calling for you - Drake',
    'Wet Dreams - Odetari',
    'Carousell - Mandragora'
]

let Trajet = {
    FeuRouge: 30,
    Changements: 0
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

for (let i = 1; i < Trajet.FeuRouge; i++) {
    let MusicSelector = getRandomInt(5)
    console.log(ListeMusic[MusicSelector])
    console.log(Trajet.FeuRouge - i)
    if (ListeMusic[MusicSelector] == 'Anissa - Wejdenne') {
        Personnage.SanteMentale--
        console.log("-1 Santé Mentale ! Il vous en reste " + Personnage.SanteMentale)
        Trajet.Changements++
    }
    if (Personnage.SanteMentale <= 0) {
        console.log("EXPLOSION")
        break
    }
    if (i == 29) {
        console.log("BRAVO " + Personnage.Prenom + ", tu es bien arrivé!")
        console.log("Il t'a fallut : " + Trajet.Changements + " Changements.")
        console.log("Voici ta santé mentale finale : " + Personnage.SanteMentale)
    }
}
