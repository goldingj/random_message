let messageOptions = [" I like eggs", "I slapped her in the face with a piece of pizza", "Hide yo kids, Hide yo wife", "I like turtles", "I was eating a hamburger and it took it, I don't know where it's at"];



function message (){

    let random = messageOptions[Math.floor(messageOptions.length*Math.random())];
    return random;

}

console.log(message());
