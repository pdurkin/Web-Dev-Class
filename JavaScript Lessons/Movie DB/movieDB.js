var movieDB = [
	{
		haveWatched: false,
		title: "\"In Bruges\"",
		rating: "4"
	},
	{
		haveWatched: true,
		title: "\"Frozen\"",
		rating: "3.5"
	},
	{
		haveWatched: true,
		title: "\"Mad Max Fury Road\"",
		rating: "4.5"
	},
	{
		haveWatched: false,
		title: "\"Les Miserables\"",
		rating: "3.5"
	}
];

var string = "";
for (var i = 0; i < movieDB.length; i++){
	if(movieDB[i].haveWatched == true){
		string += "You have watched ";
	}
	else{
		string += "You have not watched ";
	}

	string += movieDB[i].title + " - " + movieDB[i].rating + " stars";
	console.log(string);
	string = "";
}