function character(name, profession, gender, age, strength, hp) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hp = hp;
    this.printStats = function () {

        console.log("Your Characters Name Is: ", name);
        console.log("Your Characters Profession Is: ", profession);
        console.log("Your Characters Gender Is: ", gender);
        console.log("Your Characters Age Is: ", age);
        console.log("Your Characters Strength Is: ", strength);
        console.log("Your Characters Hit Points Are: ", hp, "\n");
        console.log("\n============================================\n")

    };

    this.isAlive = function () {
        if (hp > 0) {
            console.log("YEP, ", name + " Is Alive")
            return true;
        } else {
            console.log(name, "is Dead.")
            return false;

        }
    }

    this.levelUp = function () {
        //   * LevelUp: Function which increases this character's Age by 1, their Strength by 5, and their HitPoints by 25.
        age++
        strength = this.strength + 5
        hp = this.hp + 5
    }

    this.attack = function(opponent){
        opponent.strength = opponent.strength - hp
        console.log("You are attacking", opponent.name,"for a total of", hp, "Hit Points")
        console.log("Their Remaining Health is: ", opponent.strength)
        console.log("\n============================================\n")
    }
}



//////////////////////////////////////////////////////

var masterChief = new character("Master Chief", "Badass", "Male", 45, 9000, 900);
var zavala = new character("Zavala", "Titan", "Male", 127, 2200, 120);
var zelda = new character("Zelda", "Scavenger", "Male", 17, 1200, 600);



// masterChief.printStats()
// zavala.printStats()
zelda.printStats()

// masterChief.isAlive()
// zavala.isAlive()
// zelda.isAlive()

// masterChief.levelUp();
// zavala.levelUp();
// zelda.levelUp();

masterChief.attack(zelda)
zelda.printStats()