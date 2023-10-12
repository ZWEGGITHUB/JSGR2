
//Jour 1 (exercices)


var a = 3
var b = 4
var c = 3
if (a == b)
{
    console.log ("c'est égal")
}

if (c < b && a +c != 3)
{
    console.log("ok")
}
else
{
    console.log("raté")
}

switch (a)
{
    case b:
        console.log ("égal a b")
        break
    case c:
        console.log ("égal a c")
        break
    default:
        console.log("égal a rien")
}

for (let i = 0; i < a; i++){
    console.log("oklm")
}

while(a < 9)
{
    a++
    if (a==8)
    {
        break
    }
    if (a == 7)
    {
        continue
    }
    console.log(a)
}
console.log('j ai cassé la boucle au bout de ' + a + ' tours')


//Jour 2 (exercices)


let a1 = "jean"
let b1 = "paul"
let result = checkName(a1, b1)

function checkName(name1, name2)
{
    if (name1 === name2)
    {
        return " Les prenoms sont identiques"
    }
    else
    {
        return " Les prenoms ne sont pas identiques"
    }
}
console.log(result)

let names=[]
names.push("Vincent", "Paul", "Arthur")

names.forEach(function(names)
{
    console.log(names+ " va a la peche")
})

let student = 
{
    Firstname: 'Nicolas',
    favoriteFood: 'Salad',
    city:'Paris',
}

let nbr = 0
let values = Object.values(student)
values.forEach(function (value)
{
    nbr += value.length
})

if (nbr%2 == 0)
    {
        console.log ("pair")
    }
    else
    {
        console.log ("impair")
    }


//Jour 3 (exercices)


class Pokemon 
{
    constructor (name, attack, defense, hp, luck)
    {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck;
    }

    isLucky()
    {
        return Math.random() <= this.luck;
    }

    attackPokemon(target)
    {
        if (this.isLucky()) 
        {
            const damage = this.attack - target.defense;
            if (damage > 0) 
            {
              target.hp -= damage;
            }
            console.log(`${this.name} attaque ${target.name} et inflige ${damage} dégâts.`);
        } 
        else 
        {
            console.log(`${this.name} rate son attaque contre ${target.name}.`);
        }
    }
}

let Salameche = new Pokemon("Salameche", 10, 20, 30, 0.75);

let Bulbizare = new Pokemon("Bulbizare", 15, 40, 30, 0.25);