function DigitalPal(hungry, sleepy, bored, age) {
    this.hungry = hungry;
    this.sleepy = sleepy;
    this.bored = bored;
    this.age = age;

    this.feed = function(){
        if(hungry === true){
            console.log( "That was yummy!")
            hungry = false;
            sleepy = true;
        }else {
            console.log("No thanks! I'm full.")
        }
    }

    this.sleep = function () {
        if(sleepy === true){
            console.log("Zzzzzzzzzz")
            sleepy = false;
            bored = true;
            increaseAge()
        }else{
            console.log("No way! I'm not tired.")
        }
    }

    this.play = function(){
        if (bored === true){
            console.log("Yay! Let's play!")
            bored = false;
            hungry = true;
        } else {
            console.log("Not right now. Later?")
        }
    }

    this.increaseAge= function(){
        age++
        console.log("Happy Birthday to me! I am "+age+" years old!")
    }

}

var dog = new DigitalPal(false, true, true, 0)
var cat = new DigitalPal(false, true, true, 0)

var outside = false;

dog.outside = function (){

    console.log("outside")
}

dog.bark = function(){
        console.log("Woof! Woof!")
}

dog.goOutside= function(){

        if (outside === true){
            console.log("We're already outside though...")
        }else {
            console.log("Yay! I love the outdoors!")
            outside = true;
            dog.bark()
        }
    }  

    dog.goInside = function (){
        if (outside === true){
            console.log("Do we have to? Fine...");
            outside = false;
        } else {
            console.log("I'm already inside...")
        }
    }

cat.houseCondition = 100;
cat.meow = function(){
    console.logs("Meow! Meow!")
}
cat.destroyFurniture = function(){

    if(cat.houseCondition > 0){
    cat.houseCondition -= 10;
    console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!")
    cat.bored = false;
    cat.sleepy = true
    }else{
        console.log("There is nothing left to Destroy!")
    }
}

cat.buyNewFurniture = function(){
    cat.houseCondition += 50;
    console.log("Are you sure about that?")
}

// dog.outside()
// dog.goOutside()
// dog.goInside()
// cat.destroyFurniture();


dog.play()
dog.play()


