let name = ""
let color = ""
let dogcat = ""
let SENTINEL = "hello world"
while (true) {
    name = game.askForString("What is your name?")
    color = game.askForString("What is your favorite color?")
    dogcat = game.askForString("Are you a dog or cat person?")
    
    game.splash("Your name is " + name)
    game.splash("Your favorite color is " + color)
    if(dogcat == "dog"){
        game.splash("You are a dog person! Arf!")
    }

    if(dogcat == "cat"){
        game.splash("You are a cat person! Meow!")
    }
}

