//TODO: Fix local paths
restaurants = 
[
	{
		"name":"Sicilian",
		"lat":32.083164, 
		"long":34.771680,
		"dsc":"Sicilian",
		"icon": "../grapics/40x40pin.png",
		"tags":["no_slaves","also_vegan"]
	},
	{
		"name":"Hudson",
		"long":34.840248,
		"lat":32.109799,		
		"icon": "../grapics/40x40pin.png",
		"dsc":"Hudson",
		"tags":["no_slaves","wheelchair"]
	},
	{
	"name":"Budhdha Burger",
	"lat":32.082254, 
	"long":34.781475,
	"dsc":"בודהה בורגר",
		"icon": "../grapics/40x40pin.png",
	"tags":["no_slaves","vegan","also_vegan","social_tag"]
	},	
	{
	"name":"Moses",
	"lat":32.109132,
	"long":34.84058,
	"dsc":'<img src="../grapics/MosesRest.png"/>',
	"icon": "../grapics/moses.png",
	"tags":["no_slaves","wheelchair","breil","also_vegan"]
	},	
	{
	"name":"Aroma",
	"lat":32.097852,
	"long": 34.773899,
	"dsc":'Aroma',
	"icon": "../grapics/40x40pin.png",
	"tags":["no_slaves"]
	},	
	{
	"name":"Kkao",
	"lat":32.063982, 
	"long": 34.773902, 
	"dsc":"Kkao",	
	"icon": "../grapics/40x40pin.png",
	"tags":["no_slaves","shabbath","also_vegan","kosher_compiler","kosher"]
	},
	{
	"name":"Max Brener",
	"lat":32.109328, 
	"long": 34.839820,
	"dsc":"Max Brener",	
	"icon": "../grapics/40x40pin.png",
	"tags":["no_slaves","wheelchair"]
	},
	{
	"name":"Arcaffe",
	"lat":32.112188,
	"long":  34.795873,
	"dsc":"Arcaffe",	
	"icon": "../grapics/40x40pin.png",
	"tags":["shabbath","also_vegan","wheelchair"]
	},
	{
	"name":"Dabush Shawarma",
	"lat":32.079825,
	"long": 34.782064,
	"dsc":"Dabush Shawarma",	
	"icon": "../grapics/40x40pin.png",
	"tags":["shabbath","kosher_compiler","kosher"]
	},
	{
	"name":"AM:PM",
	"lat": 32.084001, 
	"long": 34.816759,
	"dsc":"AM:PM",	
	"icon": "../grapics/40x40pin.png",
	"tags":["also_vegan","shabbath"]
	},
	{
	"name":"Matilda",
	"lat": 32.111014, 
	"long": 34.816087,
	"dsc":"Matilda",	
	"icon": "../grapics/40x40pin.png",
	"tags":["wheelchair"]
	},
	{
	"name":"חומוס גבעתיים",
	"lat": 32.075427, 
	"long": 34.808487,
	"dsc":"חומוס גבעתיים",	
	"icon": "../grapics/40x40pin.png",
	"tags":["wheelchair","kosher","also_vegan"]
	}
	,
	{
	"name":"פלאפל אציר",
	"lat": 32.110395, 
	"long": 34.822452,
	"dsc":"פלאפל אציר",	
	"icon": "../grapics/40x40pin.png",
	"tags":["wheelchair","kosher","also_vegan","shabbath","no_slaves"]
	}
	
	
]

function getTags()
{
	return $("#tagsearch").val();	
}

function updateMap()
	{
		var selectedTags = getSelectedTags();		
		var results = [];
		for (var i=0 ; i<restaurants.length ; i++) {
			var currRestaurant = restaurants[i];
			if (isKosher(selectedTags ,currRestaurant.tags))
				{
					results.push(currRestaurant);
				}
			
		}
		refreshMarks(results)
	}


function getSelectedTags()
	{
		var selected = [];
		tags=getTags().split(",")
		for (var i=0;i<tags.length;i++)
		{
			if(tags[i]!=="")
			{
				selected.push(tags[i]);
			}
		}
		return selected;
	}

	
function isKosher(selectedTags ,restaurantTags)
{
		for (var i=0; i<selectedTags.length ; i++){
			
			if (!inCollection(selectedTags[i], restaurantTags))
			{
				return false;
			}
		}
		return true;
}

function inCollection(item, collection)
{
	for (var i = 0 ; i<collection.length ; i++)
	{
		if (item == collection[i]) {return true;}
	}
	return false;
}

updateMap()



