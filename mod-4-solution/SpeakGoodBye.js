(function(say){
	var byeSpeaker = newObject();
var speakWord = "Good Bye";


byeSpeaker.speak = function speak(name) {
  console.log(speakWord + " " + name);
};
say.byeSpeaker = byeSpeaker;
})(say);
