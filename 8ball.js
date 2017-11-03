var list = ["We shall see",
			"Yes",
			"No!",
			"Maybe.",
			"Ask again later.",
			"As I see it... Yes",
			"Certainly.",
			"Try again later",
			"Doubtful",
			"Signs point to yes."];

function randomNumber(){
	return Math.floor(Math.random() * 10);
}


//just testing javascript
function testJs() {
	//alert("test!");
}

function shakemagic8Balll(){
	document.getElementById("magic8balll").src="8ballback.png";
	//alert("This is your fortune");

		//change paragraph to magic 8ball text
		document.getElementById("results").innerHTML=list[randomNumber()];

		//alert(randomNumber());
}