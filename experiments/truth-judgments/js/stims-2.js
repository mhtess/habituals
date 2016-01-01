var stimuli = [
{
	habitual: "hikes",
	past: "hiked",
	category: "hobby",
	frequency: ["2 years","year","2 months","week"],
	preventative: {
		verb: "broke",
		obj: "legs",
		requires: "possessive"
	},
	// enabling: "really had a lot of fun those times"
},
{
	habitual: "runs",
	past: "ran",
	category: "hobby",
	frequency: ["2 years","year","2 months","week"],
	preventative: {
		verb: "broke",
		obj: "legs",
		requires: "possessive"
	},
	// enabling: "really enjoys running"
},
{
	habitual: "plays the banjo",
	past: "played the banjo",
	category: "hobby",
	frequency: ["5 years","2 years","year"],
	preventative: {
		verb: "developed crippling arthritis in",
		obj: "hands",
		requires: "possessive"
	},
	enabling: {
		verb: "joined",
		obj: "friend's band",
		requires: "possessive"
	},
	// enabling: "really enjoys playing the banjo"
},
{
	habitual: "plays tennis",
	past: "played tennis",
	category: "hobby",
	frequency: ["5 years","2 years","year"],
	preventative: {
		verb: "developed crippling arthritis in",
		obj: "elbows",
		requires: "possessive"
	},
},
{
	habitual: "climbs mountains",
	past: "climbed mountains",
	category: "hobby",
	frequency: ["5 years","2 years","year"],
	preventative: {
		verb: "received",
		obj: " a doctor's order to stop all strenuous physical exercise"
	}
},
{
	habitual: "wears a suit",
	past: "wore a suit",
	category: "clothing",
	frequency: ["6 months","month","week"], 
	preventative:{
		verb: "got fired from",
		obj: "job on Wall Street, and now works in a pizza parlor.",
		requires: "possessive"
	}
},
{
	habitual: "wears a bra",
	past: "wore a bra",
	category: "clothing",
	frequency: ["6 months","month","week"]
},
{
	habitual: "wears slacks",
	past: "wore slacks",
	category: "clothing",
	frequency: ["6 months","month","week"]
},
{
	habitual: "wears socks",
	past: "wore socks",
	category: "clothing",
	frequency: ["6 months","month","week"]
},
// {
// 	habitual: "wears a hat",
// 	past: "wore a hat",
// 	category: "clothing",
// 	frequency: ["2 months","month","week"]
// },
// {
// 	habitual: "wears gloves",
// 	past: "wore gloves",
// 	category: "clothing",
// 	frequency: ["month","week"]
// },
// {
// 	habitual: "wears sweaters",
// 	past: "wore a sweater",
// 	category: "clothing",
// 	frequency: ["month","week"]
// },
{
	habitual: "wears a watch",
	past: "wore a watch",
	category: "clothing",
	frequency: ["6 months","month","week"]
},
{
	habitual: "writes novels",
	past: "wrote a novel",
	category: "employment",
	frequency: ["5 years", "year"],
	preventative:{
		verb: "retired from",
		obj: "writing career",
		requires: "possessive"
	}
},
{
	habitual: "writes poems",
	past: "wrote a poem",
	category: "employment",
	frequency: ["5 years", "year"],
	preventative:{
		verb: "retired from",
		obj: "writing career",
		requires: "possessive"
	}
},
{
	habitual: "sells things on eBay",
	past: "sold something on eBay",
	category: "employment",
	frequency: ["5 years", "year"]
},
{
	habitual: "sells companies",
	past: "sold a company",
	category: "employment",
	frequency: ["5 years", "year"],
	preventative:{
		verb: "changed careers",
		obj: "to spend more time with family"
	}
},
{
	habitual: "steals cars",
	past: "stole a car",
	category: "employment",
	frequency: ["5 years", "year", "month"],
	preventative:{
		verb: "vowed",
		obj: "to never break the law again"
	}
},
{
	habitual: "steals chewing gum",
	past: "stole chewing gum",
	category: "employment",
	frequency: ["5 years", "year", "month"],
	preventative:{
		verb: "vowed",
		obj: "to never break the law again"
	}
},
{
	habitual: "volunteers for soup kitchens",
	past: "volunteered for a soup kitchen",
	category: "employment",
	frequency: ["5 years", "year"],
	preventative:{
		verb: "grew disillusioned with the soup kitchens in the area",
		obj: "and wants nothing to do with it anymore"
	}
},
{
	habitual: "volunteers for political campaigns",
	past: "volunteered for a political campaign",
	category: "employment",
	frequency: ["5 years", "year"],
	preventative:{
		verb: "grew disillusioned with the political system",
		obj: "and wants nothing to do with it anymore"
	}
},
{
	habitual: "goes to the movies",
	past: "went to the movies",
	category: "entertainment",
	frequency: ["2 years","year","month"],
	// preventative: "local theatre closed"
},
{
	habitual: "goes to the ballet",
	past: "went to the ballet",
	category: "entertainment",
	frequency: ["2 years","year","month"]
},
{
	habitual: "watches professional football",
	past: "watched professional football",
	category: "entertainment",
	frequency: ["2 years","year","month"],
	preventative: {
		verb: "moved off the grid and",
		obj: "no longer has access to televeision"
	}
},
{
	habitual: "watches space launches",
	past: "watched space launches",
	category: "entertainment",
	frequency: ["2 years", "year","month"]
},
{
	habitual: "listens to Pandora",
	past: "listened to Pandora",
	category: "entertainment",
	frequency: ["year","month", "week"],
	preventative: {
		verb: "moved off the grid and",
		obj: "no longer has access to the internet"
	}
},
// {
// 	habitual: "listens to Russian folk music",
// 	past: "listened to Russian folk music",
// 	category: "entertainment",
// 	frequency: ["year","month", "week"]
// },
{
	habitual: "listens to live music",
	past: "listened to live music",
	category: "entertainment",
	frequency: ["year","month", "week"]
},
{
	habitual: "eats peanut butter",
	past: "ate peanut butter",
	category: "food",
	frequency: ["5 years", "year","month"],
	preventative:{
		verb: "developed",
		obj: "a peanut allergy"
	}
},
{
	habitual: "eats caviar",
	past: "ate caviar",
	category: "food",
	frequency: ["5 years", "year","month"],
	preventative:{
		verb: "developed",
		obj: "a seafood allergy"
	}
},
// {
// 	habitual: "eats cereal",
// 	past: "ate cereal",
// 	category: "food",
// 	frequency: ["5 years", "year","month", "week"]
// },
{
	habitual: "smokes cigarettes",
	past: "smoked cigarettes",
	category: "food",
	frequency: ["year","month", "week"],
	preventative:{
		verb: "quit",
		obj: "smoking cigarettes"
	}
},
{
	habitual: "smokes marijuana",
	past: "smoked marijuana",
	category: "food",
	frequency: ["5 years", "year","month", "week"],
	preventative:{
		verb: "quit",
		obj: "smoking marijuana"
	}
},
{
	habitual: "does cocaine",
	past: "did cocaine",
	category: "food",
	frequency: ["5 years", "year","month", "week"],
	preventative:{
		verb: "entered",
		obj: "into Narcotics Anonymous"
	}
},
{
	habitual: "drinks beer",
	past: "drank beer",
	category: "food",
	frequency: ["year","month", "2 weeks","week"],
	preventative:{
		verb: "entered",
		obj: "into Alcoholics Anonymous"
	}
},
{
	habitual: "drinks coffee",
	past: "drank coffee",
	category: "food",
	frequency: ["year","month", "2 weeks","week"],
	preventative:{
		verb: "decided",
		obj: "to give up all caffeine"
	}}];


var characters = [
{
	name: "Daniel",
	gender: "male"
},
{
	name: "David",
	gender: "male"
},
{
	name: "Alexander",
	gender: "male"
},
{
	name: "Gabriel",
	gender: "male"
},
{
	name: "Anthony",
	gender: "male"
},
{
	name: "William",
	gender: "male"
},
{
	name: "John",
	gender: "male"
},
{
	name: "Tom",
	gender: "male"
},
{
	name: "Lucas",
	gender: "male"
},
{
	name: "Michael",
	gender: "male"
},
{
	name: "Eric",
	gender: "male"
},
{
	name: "Cameron",
	gender: "male"
},
{
	name: "Stephen",
	gender: "male"
},
{
	name: "Lee",
	gender: "male"
},
{
	name: "Greg",
	gender: "male"
},
{
	name: "Angela",
	gender: "female"
},
{
	name: "Jennifer",
	gender: "female"	
},
{
	name: "Monica",
	gender: "female"
},
{
	name: "Melinda",
	gender: "female"
},
{
	name: "Veronica",
	gender: "female"	
},
{
	name: "Alicia",
	gender: "female"
},
{
	name: "Maya",
	gender: "female"
},
{
	name: "Sophia",
	gender: "female"
},
{
	name: "Kim",
	gender: "female"
},
{
	name: "Laura",
	gender: "female"
},
{
	name: "Julia",
	gender: "female"
},
{
	name: "Michelle",
	gender: "female"
},
{
	name: "Stephanie",
	gender: "female"
},
{
	name: "Claire",
	gender: "female"
},
{
	name: "Kathleen",
	gender: "female"
}]	


var maleCharacters = [
{
	name: "Daniel",
	gender: "male"
},
{
	name: "David",
	gender: "male"
},
{
	name: "Alexander",
	gender: "male"
},
{
	name: "Gabriel",
	gender: "male"
},
{
	name: "Anthony",
	gender: "male"
},
{
	name: "William",
	gender: "male"
},
{
	name: "John",
	gender: "male"
},
{
	name: "Tom",
	gender: "male"
},
{
	name: "Lucas",
	gender: "male"
},
{
	name: "Michael",
	gender: "male"
},
{
	name: "Eric",
	gender: "male"
},
{
	name: "Cameron",
	gender: "male"
},
{
	name: "Stephen",
	gender: "male"
},
{
	name: "Lee",
	gender: "male"
},
{
	name: "Greg",
	gender: "male"
},
{
	name: "Kyle",
	gender: "male"
},
{
	name: "Ben",
	gender: "male"
},
{
	name: "Josh",
	gender: "male"
},
{
	name: "Robert",
	gender: "male"
},
{
	name: "Ronald",
	gender: "male"
},
{
	name: "Jacob",
	gender: "male"
},
{
	name: "Lewis",
	gender: "male"
},
{
	name: "Stephen",
	gender: "male"
},
{
	name: "Derrick",
	gender: "male"
},
{
	name: "Christopher",
	gender: "male"
},
{
	name: "Brian",
	gender: "male"
},
{
	name: "Vince",
	gender: "male"
},
{
	name: "Ted",
	gender: "male"
},
{
	name: "Scott",
	gender: "male"
},
{
	name: "Seth",
	gender: "male"
},
{
	name: "Martin",
	gender: "male"
},
{
	name: "Doug",
	gender: "male"
},
{
	name: "George",
	gender: "male"
},
{
	name: "Tim",
	gender: "male"
},
{
	name: "Jack",
	gender: "male"
},
{
	name: "Fred",
	gender: "male"
}]



var femaleCharacters = [
{
	name: "Angela",
	gender: "female"
},
{
	name: "Jennifer",
	gender: "female"	
},
{
	name: "Monica",
	gender: "female"
},
{
	name: "Melinda",
	gender: "female"
},
{
	name: "Veronica",
	gender: "female"	
},
{
	name: "Alicia",
	gender: "female"
},
{
	name: "Maya",
	gender: "female"
},
{
	name: "Sophia",
	gender: "female"
},
{
	name: "Kim",
	gender: "female"
},
{
	name: "Laura",
	gender: "female"
},
{
	name: "Julia",
	gender: "female"
},
{
	name: "Michelle",
	gender: "female"
},
{
	name: "Stephanie",
	gender: "female"
},
{
	name: "Claire",
	gender: "female"
},
{
	name: "Kathleen",
	gender: "female"
},
{
	name: "Rebecca",
	gender: "female"
},
{
	name: "Hillary",
	gender: "female"
},
{
	name: "Jessica",
	gender: "female"
},
{
	name: "Natalie",
	gender: "female"
},
{
	name: "Kristina",
	gender: "female"
},
{
	name: "Esther",
	gender: "female"
},
{
	name: "Elizabeth",
	gender: "female"
},
{
	name: "Crystal",
	gender: "female"
},
{
	name: "Theresa",
	gender: "female"
},
{
	name: "Janet",
	gender: "female"
},
{
	name: "Linda",
	gender: "female"
},
{
	name: "Elisa",
	gender: "female"
},
{
	name: "Ashley",
	gender: "female"
},
{
	name: "Shannon",
	gender: "female"
},
{
	name: "Tina",
	gender: "female"
},
{
	name: "Kelly",
	gender: "female"
},
{
	name: "Bridgette",
	gender: "female"
},
{
	name: "Amber",
	gender: "female"
},
{
	name: "Jackie",
	gender: "female"
},
{
	name: "Brooke",
	gender: "female"
},
{
	name: "Nicole",
	gender: "female"
}]	
