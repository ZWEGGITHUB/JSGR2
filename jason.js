//Exo 2 : LE TUEUR EN SERIE

let JasonHealth = 100

let Perso = ['Grand', 'Petit', 'Blond', 'Sportif', 'Geek']

let Morts = []

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

for (let i = 0; Morts.length < 5; i++) {
    let x = getRandomInt(3)
    if (x == 0) {
        console.log("Jason a tué " + Perso[i] + "!")
        Morts.push(Perso[i])
    }
    if (x == 1) {
        JasonHealth = JasonHealth - 10
        console.log("Le " + Perso[i] + " a esquivé et a infligé 10 dégats!")
        i--
    }
    if (x == 2) {
        JasonHealth = JasonHealth - 15
        console.log("Jason a tué le " + Perso[i] + " mais s'est pris 15 dégats!")
        Morts.push(Perso[i])
    }

    console.log("Jason à " + JasonHealth + " PV")

    if (Morts.length >= 5) {
        console.log("Bravo à Jason! Il a réussi à tuer tout le monde!")
        break
    }

    if (JasonHealth <= 0) {
        console.log("Jason est mort!")
        console.log("Les survivants ont gangés mais RIP à " + Morts)
        break
    }
}