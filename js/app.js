//TODO: Fix local paths
restaurants = 
[
	{
		"name":"Sicilian",
		"lat":32.089132,
		"long":34.77278,
		"dsc":"Sicilian",
		"icon": "../grapics/40x40pin.png",
		"tags":["no_slaves","also_vegan","sign_lang"]
	},
	{
		"name":"Hudson",
		"long":34.840248,
		"lat":32.109799,		
		"icon": "../grapics/40x40pin.png",
		"dsc":"Hudson",
		"tags":["no_slaves","social_tag"]
	},
	{
	"name":"Budhdha Burger",
	"lat":32.069132,
	"long":34.77078,
	"dsc":"בודהה בורגר",
		"icon": "../grapics/40x40pin.png",
	"tags":["no_slaves","wheelchair","vegan","kosher","social_tag"]
	},	
	{
	"name":"Moses",
	"lat":32.109132,
	"long":34.84058,
	"dsc":"<rtl>מוזס רמת החייל Tel Aviv<rtl/>",
	"icon": "../grapics/moses.png",
	"tags":["no_slaves","wheelchair"]
	},	
	{
	"name":"Kkao",
	"lat":32.113464, 
	"long": 34.800457, 
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
	"tags":["no_slaves","kosher"]
	},
	{
	"name":"Arcaffe",
	"lat":32.109625,
	"long": 34.780444,
	"dsc":"Arcaffe",	
	"icon": "../grapics/40x40pin.png",
	"tags":["shabbath","also_vegan","kosher_compiler","kosher"]
	},
	{
	"name":"Dabush Shawarma",
	"lat":32.079825,
	"long": 34.780644,
	"dsc":"Dabush Shawarma",	
	"icon": "../grapics/40x40pin.png",
	"tags":["shabbath","also_vegan","kosher_compiler","kosher"]
	},
	{
	"name":"AM:PM",
	"lat":32.059025,
	"long": 34.780044,
	"dsc":"AM:PM",	
	"icon": "../grapics/40x40pin.png",
	"tags":["also_vegan","no_slaves"]
	}
]

function getTags()
{
	return $("#tagSearch").val();	
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



