restaurants = 
[
	{
		"name":"Sicilian",
		"long":44,
		"lat":44,
		"dsc":"ad",
		"tags":["vegan", "pork"]
	},
	{
		"name":"hudson",
		"long":44.002,
		"lat":44.002,
		"dsc":"addf",
		"tags":["sabath", "pork"]
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
