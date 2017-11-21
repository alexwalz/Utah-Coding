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
        console.log("============================================")

    };

    this.isAlive = function () {
        if (hp > 0) {
            console.log("YEP, ", name + " Is Alive")
        } else {
            console.log(name, "is Dead.")

        }
    }

    this.levelUp = function () {
        //   * LevelUp: Function which increases this character's Age by 1, their Strength by 5, and their HitPoints by 25.
        age++
        strength = this.strength + 5
        hp = this.hp + 5
    }

    this.attack = function(character2){
        hp - character2.strength
        console.log(hp)
    }
}



//////////////////////////////////////////////////////

var masterChief = new character("Master Chief", "Badass", "Male", 45, 900, 9000);
var zavala = new character("Zavala", "Titan", "Male", 127, 600, 12000);
var zelda = new character("Zelda", "Scavenger", "Male", 17, 1200, 6000);



masterChief.printStats()
zavala.printStats()
zelda.printStats()

masterChief.isAlive()
zavala.isAlive()
zelda.isAlive()

masterChief.levelUp();
zavala.levelUp();
zelda.levelUp();