// same as /backfiring-words/experiments/priors/stims-2.js
//Added deverbal noun field to each verb
var stimuli = [
{
	habitual: "hikes",
	category: "hobby",
	verb2: "goes on a hike",
	verb: "go on a hike",
	noun: "hiker",
},
{
	habitual: "runs",
	past: "went for a run",
	category: "hobby",
	verb2: "goes for a run",
	verb: "go for a run",
	noun: "runner"
},
{
	habitual: "plays the banjo",
	past: "played the banjo",
	category: "hobby",
	verb2:"plays the banjo",
	verb:"play the banjo",
	noun: "banjo player"
},
{
	habitual: "plays tennis",
	past: "played tennis",
	category: "hobby",
	verb2:"plays tennis",
	verb:"play tennis",
	noun:"tennis player"
},
{
	habitual: "climbs mountains",
	past: "climbed a mountain",
	category: "hobby",
	verb2: "climbs mountains",
	verb: "climb mountains",
	noun: "mountain climber"
},
{
	habitual: "wears a suit",
	past: "wore a suit",
	verb2: "wears a suit",
	verb: "wear a suit",
	category: "clothing",
	noun: "suit wearer"
},
// {
// 	habitual: "wears a bra",
// 	past: "wore a bra",
// 	category: "clothing",
// 	frequency: ["6 months","month","week"]
// },
{
	habitual: "wears slacks",
	past: "wore slacks",
	verb2: "wears slacks",
	verb: "wear slacks",
	noun: "slacks wearer",
	category: "clothing"
},
{
	habitual: "wears socks",
	past: "wore socks",
	verb2: "wears socks",
	verb: "wear socks",
	noun: "sock wearer",
	category: "clothing"
},
{
	habitual: "wears a hat",
	past: "wore a hat",
	verb2: "wears a hat",
	verb: "wear a hat",
	noun: "hat wearer",
	category: "clothing"
},
// {
// 	habitual: "wears gloves",
// 	past: "wore gloves",
// 	category: "clothing"
// },
// {
// 	habitual: "wears sweaters",
// 	past: "wore a sweater",
// 	category: "clothing"
{
	habitual: "wears a watch",
	verb: "wear a watch",
	verb2: "wears a watch",
	past: "wore a watch",
	noun: "watch wearer",
	category: "clothing"
},
{
	habitual: "writes novels",
	past: "wrote a novel",
	verb: "write a novel",
	verb2: "writes a novel",
	noun: "novelist",
	category: "employment"
},
{
	habitual: "writes poems",
	verb:"write a poem",
	verb2:"writes a poem",
	past: "wrote a poem",
	noun: "poet",
	category: "employment"
},
{
	habitual: "sells things on eBay",
	past: "sold something on eBay",
	verb: "sell things on eBay",
	verb2: "sell something on eBay",
	noun: "eBay seller",
	category: "employment",
},
// {
// 	habitual: "sells companies",
// 	past: "sold a company",
// 	verb: "sell companies",
// 	category: "employment"
// },
{
	habitual: "steals cars",
	past: "stole a car",
	verb: "steal a car",
	verb2: "steals a car",
	noun: "car thief",
	category: "employment"
},
{
	habitual: "steals chewing gum",
	past: "stole chewing gum",
	verb: "steal chewing gum",
	verb2: "steals chewing gum",
	noun: "chewing gum thief",
	category: "employment"
},
{
	habitual: "volunteers for soup kitchens",
	past: "volunteered for a soup kitchen",
	verb: "volunteer for soup kitchens",
	verb2: "volunteers for soup kitchens",
	noun: "soup kitchen volunteer",
	category: "employment"
},
{
	habitual: "volunteers for political campaigns",
	past: "volunteered for a political campaign",
	verb: "volunteer for a political campaign",
	verb2: "volunteers for a political campaign",
	noun: "political campaign volunteer",
	category: "employment"
},
{
	habitual: "goes to the movies",
	verb: "go to the movies",
	verb2: "goes to the movies",
	past: "went to the movies",
	noun: "moviegoer",
	category: "entertainment"
},
{
	habitual: "goes to the ballet",
	verb: "go to the ballet",
	verb2: "goes to the ballet",
	past: "went to the ballet",
	noun: "ballet attendee",
	category: "entertainment"
},
{
	habitual: "watches football",
	verb: "watch football",
	verb2: "watches football",
	past: "watched football",
	noun:  "football watcher",
	category: "entertainment"
},
{
	habitual: "watches space launches",
	past: "watched a space launch",
	verb: "watch a space launch",
	verb2: "watches a space launch",
	noun: "space launch watcher",
	category: "entertainment"
},
// {
// 	habitual: "listens to Pandora",
// 	past: "listened to Pandora",
// 	verb: "listen to Pandora",
// 	category: "entertainment"
// },
// {
// 	habitual: "listens to Russian folk music",
// 	past: "listened to Russian folk music",
// 	category: "entertainment"
// },
// {
// 	habitual: "listens to live music",
// 	past: "listened to live music",
// 	verb: "listen to live music",
// 	noun: "live music listener",
// 	category: "entertainment"
// },
{
	habitual: "eats peanut butter",
	past: "ate peanut butter",
	verb: "eat peanut butter",
	verb2: "eats peanut butter",
	noun: "peanut butter eater",
	category: "food"
},
{
	habitual: "eats caviar",
	past: "ate caviar",
	verb: "eat caviar",
	verb2: "eats caviar",
	noun: "caviar eater",
	category: "food"
},
{
	habitual: "eats cereal",
	past: "ate cereal",
	verb: "eat cereal",
	verb2: "eats cereal",
	noun: "cereal eater",
	category: "food"
},
{
	habitual: "smokes cigarettes",
	past: "smoked cigarettes",
	verb: "smoke cigarettes",
	verb2: "smokes cigarette",
	noun: "cigarette smoker",
	category: "food"
},
{
	habitual: "smokes marijuana",
	past: "smoked marijuana",
	verb: "smoke marijuana",
	verb2: "smokes marijuana",
	noun: "marijuana smoker",
	category: "food"
},
{
	habitual: "uses cocaine",
	past: "used cocaine",
	verb: "use cocaine",
	verb2: "uses cocaine",
	noun: "cocaine user",
	category: "food"
},
{
	habitual: "drinks beer",
	past: "drank a beer",
	verb: "drink beer",
	verb2: "drinks beer",
	noun: "beer drinker",
	category: "food"
},
{
	habitual: "drinks coffee",
	past: "drank coffee",
	verb: "drink coffee",
	verb2: "drinks coffee",
	noun: "coffee drinker",
	category: "food"
}
];


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
