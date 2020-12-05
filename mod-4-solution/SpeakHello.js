(function(say){
var helloSpeaker = newobject();


var speakWord = "Hello";


 helloSpeaker.speak =function(name){
  console.log(speakWord + " " + name);
};
say.helloSpeaker = helloSpeaker;
})(say);
