//TODO: Fix local paths
restaurants = 
[
	{
		"name":"Sicilian",
		"long":44,
		"lat":44,
		"dsc":"<b>ad</b>",
		"icon": "http://kosher.blob.core.windows.net/grapics/40x40pin.png",
		"tags":["vegan", "pork"]
	},
	{
		"name":"Hudson",
		"long":34.840248,
		"lat":32.109799,		
		"icon": "http://kosher.blob.core.windows.net/grapics/40x40pin.png",
		"dsc":"Hudson",
		"tags":[]
	},
	{
	"name":"Moses",
	"lat":32.109132,
	"long":34.84058,
	"dsc":"<rtl>מוזס רמת החייל Tel Aviv<rtl/>",
	//TODO: Upload
	"icon": "http://kosher.blob.core.windows.net/grapics/moses.png",
	"tags":[]
	},	
	{
	"name":"Kkao",
	"lat":32.113464, 
	"long": 34.840457, 
	"dsc":"Kkao",	
	"icon": "http://kosher.blob.core.windows.net/grapics/40x40pin.png",
	"tags":["pork","vegan","sabath"]
	},
	{
	"name":"Max Brener",
	"lat":32.109328, 
	"long": 34.839820,
	"dsc":"<div><b><br/>Max Breasdasdner <br/>asd <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>	adasd</b></div>",	
	"icon": "http://kosher.blob.core.windows.net/grapics/40x40pin.png",
	"tags":["pork"]
	},
	{
	"name":"Arcaffe",
	"lat":32.109625,
	"long": 34.840444,
	"dsc":"Arcaffe",	
	"icon": "http://kosher.blob.core.windows.net/grapics/40x40pin.png",
	"tags":["sabath","pork","vegan"]
	}
]

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
		$('#checkboxes input:checked').each(function() {
		selected.push($(this).val());
		});
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
